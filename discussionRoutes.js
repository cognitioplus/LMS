// discussionRoutes.js
const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Security middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Middleware to check if user exists in database
const checkUserExists = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT id FROM users WHERE id = $1',
      [req.user.id]
    );
    
    if (rows.length === 0) {
      // Create user if they don't exist
      await pool.query(
        'INSERT INTO users (id, email, full_name) VALUES ($1, $2, $3)',
        [req.user.id, req.user.email, req.user.full_name || '']
      );
    }
    
    next();
  } catch (error) {
    console.error('Error checking user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get discussions with optional module filter
router.get('/', limiter, authenticateToken, checkUserExists, async (req, res) => {
  try {
    const { module = 'all' } = req.query;
    let query = `
      SELECT 
        d.id,
        d.module_id,
        m.title as module_title,
        d.user_id,
        u.full_name as user_name,
        d.content,
        d.created_at,
        COUNT(dl.user_id) as likes_count
      FROM discussions d
      JOIN modules m ON d.module_id = m.id
      JOIN users u ON d.user_id = u.id
      LEFT JOIN discussion_likes dl ON d.id = dl.discussion_id
      WHERE d.is_flagged = false
    `;
    const params = [];
    
    if (module !== 'all') {
      query += ' AND d.module_id = $1';
      params.push(module);
    }
    
    query += `
      GROUP BY d.id, m.title, u.full_name
      ORDER BY d.created_at DESC
      LIMIT 50
    `;
    
    if (module !== 'all') {
      params.push(module);
    }
    
    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching discussions:', error);
    res.status(500).json({ error: 'Failed to fetch discussions' });
  }
});

// Create a new discussion
router.post('/', 
  limiter,
  authenticateToken,
  checkUserExists,
  body('module').isLength({ min: 1, max: 20 }).trim(),
  body('content').isLength({ min: 10, max: 2000 }).trim(),
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid input', 
        details: errors.array() 
      });
    }
    
    const { module, content } = req.body;
    
    // Sanitize content (prevent XSS)
    const sanitizedContent = content
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/(\r\n|\n|\r)/g, "<br>");
    
    try {
      const { rows } = await pool.query(
        `INSERT INTO discussions (module_id, user_id, content)
         VALUES ($1, $2, $3)
         RETURNING id, module_id, user_id, content, created_at`,
        [module, req.user.id, sanitizedContent]
      );
      
      res.status(201).json(rows[0]);
    } catch (error) {
      console.error('Error creating discussion:', error);
      res.status(500).json({ error: 'Failed to create discussion' });
    }
  }
);

// Like a discussion
router.post('/:id/like', limiter, authenticateToken, checkUserExists, async (req, res) => {
  const { id } = req.params;
  
  try {
    // Check if discussion exists and isn't flagged
    const { rows: discussionRows } = await pool.query(
      'SELECT id FROM discussions WHERE id = $1 AND is_flagged = false',
      [id]
    );
    
    if (discussionRows.length === 0) {
      return res.status(404).json({ error: 'Discussion not found' });
    }
    
    // Check if user already liked this discussion
    const { rows: likeRows } = await pool.query(
      'SELECT 1 FROM discussion_likes WHERE discussion_id = $1 AND user_id = $2',
      [id, req.user.id]
    );
    
    if (likeRows.length > 0) {
      // Unlike if already liked
      await pool.query(
        'DELETE FROM discussion_likes WHERE discussion_id = $1 AND user_id = $2',
        [id, req.user.id]
      );
      return res.json({ message: 'Unliked successfully' });
    }
    
    // Like the discussion
    await pool.query(
      'INSERT INTO discussion_likes (discussion_id, user_id) VALUES ($1, $2)',
      [id, req.user.id]
    );
    
    res.json({ message: 'Liked successfully' });
  } catch (error) {
    console.error('Error liking discussion:', error);
    res.status(500).json({ error: 'Failed to like discussion' });
  }
});

// Flag a discussion for moderation
router.post('/:id/flag', limiter, authenticateToken, checkUserExists, async (req, res) => {
  const { id } = req.params;
  
  try {
    // Check if discussion exists
    const { rows: discussionRows } = await pool.query(
      'SELECT id, user_id FROM discussions WHERE id = $1',
      [id]
    );
    
    if (discussionRows.length === 0) {
      return res.status(404).json({ error: 'Discussion not found' });
    }
    
    // Prevent users from flagging their own discussions
    if (discussionRows[0].user_id === req.user.id) {
      return res.status(400).json({ error: 'You cannot flag your own discussion' });
    }
    
    // Flag the discussion
    await pool.query(
      `UPDATE discussions 
       SET is_flagged = true, flagged_by = $1, flagged_at = NOW()
       WHERE id = $2`,
      [req.user.id, id]
    );
    
    res.json({ message: 'Discussion flagged for review' });
  } catch (error) {
    console.error('Error flagging discussion:', error);
    res.status(500).json({ error: 'Failed to flag discussion' });
  }
});

module.exports = router;

// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const discussionRoutes = require('./discussionRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/discussions', discussionRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Discussion API server running on port ${PORT}`);
});

// auth.js - Authentication helper functions
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Generate JWT token for user
function generateAuthToken(user) {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email,
      full_name: user.full_name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Verify and decode JWT token
function verifyAuthToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Get user profile
async function getUserProfile(userId) {
  try {
    const { rows } = await pool.query(
      'SELECT id, email, full_name, role FROM users WHERE id = $1',
      [userId]
    );
    return rows[0] || null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

module.exports = {
  generateAuthToken,
  verifyAuthToken,
  getUserProfile
};

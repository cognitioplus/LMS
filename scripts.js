// scripts.js – Course Logic & UI Handlers
// Assumes courseData is already defined in modules.js

// State Management
let currentModuleIndex = 0;
let currentLessonIndex = 0;
let completedLessons = new Set();
let certificates = {};

// DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Load saved certificates from localStorage
    const storedCerts = localStorage.getItem('certificates');
    if (storedCerts) {
        try {
            certificates = JSON.parse(storedCerts);
        } catch (e) {
            console.warn('Failed to parse certificates from localStorage');
        }
    }
    initializeCourse();
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Initialize Course UI
function initializeCourse() {
    renderModuleList();
    loadLesson(0, 0);
    updateProgress();
    updateLessonCounts();
}

// Render Module List in Sidebar
function renderModuleList() {
    const moduleList = document.getElementById('moduleList');
    if (!moduleList) return;

    moduleList.innerHTML = courseData.modules.map((module, index) => `
        <div class="module-item ${index === currentModuleIndex ? 'active' : ''}" 
             onclick="loadModule(${index})">
            <div class="module-title">${module.title}</div>
            <div class="module-duration">⏱️ ${module.duration}</div>
        </div>
    `).join('');
}

// Load a Specific Module
function loadModule(moduleIndex) {
    if (moduleIndex < 0 || moduleIndex >= courseData.modules.length) return;
    currentModuleIndex = moduleIndex;
    currentLessonIndex = 0;
    loadLesson(moduleIndex, 0);
    renderModuleList();
}

// Load a Specific Lesson
function loadLesson(moduleIndex, lessonIndex) {
    const module = courseData.modules[moduleIndex];
    if (!module || !module.lessons[lessonIndex]) return;

    currentModuleIndex = moduleIndex;
    currentLessonIndex = lessonIndex;

    const lessonContentEl = document.getElementById('lessonContent');
    if (!lessonContentEl) return;

    const lesson = module.lessons[lessonIndex];
    lessonContentEl.innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 10px;">${module.title}</h2>
        <h3 style="color: var(--primary-light); margin-bottom: 20px;">${lesson.title}</h3>
        <div class="lesson-content">
            ${lesson.content}
        </div>
    `;

    // Mark lesson as completed
    const lessonId = `${moduleIndex}-${lessonIndex}`;
    completedLessons.add(lessonId);

    // Update UI
    updateNavigationButtons();
    updateProgress();
    updateLessonCounts();
    renderModuleList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation Controls
function nextLesson() {
    const currentModule = courseData.modules[currentModuleIndex];
    if (currentLessonIndex < currentModule.lessons.length - 1) {
        loadLesson(currentModuleIndex, currentLessonIndex + 1);
    } else if (currentModuleIndex < courseData.modules.length - 1) {
        loadLesson(currentModuleIndex + 1, 0);
    }
}

function previousLesson() {
    if (currentLessonIndex > 0) {
        loadLesson(currentModuleIndex, currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
        const prevModule = courseData.modules[currentModuleIndex - 1];
        loadLesson(currentModuleIndex - 1, prevModule.lessons.length - 1);
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (!prevBtn || !nextBtn) return;

    // Previous button
    const isAtStart = currentModuleIndex === 0 && currentLessonIndex === 0;
    prevBtn.disabled = isAtStart;
    prevBtn.style.opacity = isAtStart ? '0.5' : '1';

    // Next button
    const currentModule = courseData.modules[currentModuleIndex];
    const isLastLesson = currentLessonIndex === currentModule.lessons.length - 1;
    const isLastModule = currentModuleIndex === courseData.modules.length - 1;

    if (isLastLesson && isLastModule) {
        nextBtn.textContent = 'Course Complete ✓';
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    }
}

// Progress & Lesson Count
function updateProgress() {
    let totalLessons = 0;
    courseData.modules.forEach(m => totalLessons += m.lessons.length);
    const percentage = totalLessons > 0 ? Math.round((completedLessons.size / totalLessons) * 100) : 0;
    document.getElementById('overallProgress').style.width = `${percentage}%`;
    document.getElementById('progressPercentage').textContent = percentage;
}

function updateLessonCounts() {
    let totalLessons = 0;
    courseData.modules.forEach(m => totalLessons += m.lessons.length);
    document.getElementById('completedCount').textContent = completedLessons.size;
    document.getElementById('totalCount').textContent = totalLessons;
}

// Modal Functions
function showPurchaseModal() {
    // Check completion
    let totalLessons = 0;
    courseData.modules.forEach(m => totalLessons += m.lessons.length);
    if (completedLessons.size < totalLessons) {
        alert(`Please complete all modules before purchasing your certificate.\nYou have completed ${completedLessons.size} of ${totalLessons} lessons.`);
        return;
    }
    document.getElementById('purchaseModal')?.classList.add('active');
}

function closePurchaseModal() {
    const modal = document.getElementById('purchaseModal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('purchaseForm')?.classList.remove('hidden');
        document.getElementById('certificateGeneration')?.classList.add('hidden');
    }
}

function showVerificationModal() {
    document.getElementById('verificationModal')?.classList.add('active');
}

function closeVerificationModal() {
    const modal = document.getElementById('verificationModal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('verificationResult').innerHTML = '';
        document.getElementById('verifyCode').value = '';
        document.getElementById('userNumber').value = '';
    }
}

// Certificate & Verification Logic
function generateUserNumber() {
    const userNumber = Math.floor(10000 + Math.random() * 90000);
    localStorage.setItem('userNumber', userNumber);
    const baseCode = 'CCMHP-36912-2025-0777';
    const verificationCode = `${baseCode}${userNumber}`;
    localStorage.setItem('verificationCode', verificationCode);
    return userNumber;
}

function generateVerificationCode() {
    const userNumberInput = document.getElementById('userNumber')?.value.trim();
    if (!userNumberInput) {
        alert('Please enter your User Number first.');
        return;
    }
    const code = `CCMHP-36912-2025-0777${userNumberInput}`;
    document.getElementById('verifyCode').value = code.toUpperCase();
}

function verifyCertificate() {
    const inputCode = document.getElementById('verifyCode')?.value.trim().toUpperCase();
    const resultDiv = document.getElementById('verificationResult');
    if (!resultDiv || !inputCode) {
        if (resultDiv) resultDiv.innerHTML = '<div class="error-message">Please enter a verification code.</div>';
        return;
    }

    // Load from localStorage
    const stored = localStorage.getItem('certificates');
    const certs = stored ? JSON.parse(stored) : {};

    if (certs[inputCode]) {
        const cert = certs[inputCode];
        resultDiv.innerHTML = `
            <div style="background: var(--success); color: white; padding: 25px; border-radius: 8px;">
                <h3 style="margin-bottom: 15px;">✓ Valid Certificate</h3>
                <p><strong>Holder:</strong> ${cert.name}</p>
                <p><strong>Date Issued:</strong> ${cert.date}</p>
                <p><strong>Course:</strong> Certification Course for Mental Health and Well-Being Paraprofessional</p>
                <p style="margin-top: 15px; font-size: 0.9rem; opacity: 0.9;">This certificate is authentic and recognized by Cognitio+.</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="background: var(--error); color: white; padding: 25px; border-radius: 8px;">
                <h3 style="margin-bottom: 15px;">✗ Invalid Certificate</h3>
                <p>The verification code you entered does not match our records.</p>
                <p style="margin-top: 15px; font-size: 0.9rem; opacity: 0.9;">Please check the code and try again, or contact support if you believe this is an error.</p>
            </div>
        `;
    }
}

// Certificate Canvas Generation (for demonstration)
function downloadCertificate() {
    const canvas = document.getElementById('certificateCanvas');
    if (!canvas) return;
    const fullName = document.getElementById('fullName')?.value.trim().replace(/\s+/g, '_') || 'Certificate';
    const link = document.createElement('a');
    link.download = `CCMHP_Certificate_${fullName}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Utility
function scrollToContent() {
    document.querySelector('.main-content')?.scrollIntoView({ behavior: 'smooth' });
}

import React, { useState, useEffect } from 'react';
import { 
  Play, BookOpen, CheckCircle, Clock, FileText, Users, Shield, Award, 
  ChevronLeft, Home, MessageCircle, Heart, Eye, User, Zap, Globe, 
  FileQuestion, Calendar, FolderOpen, Lightbulb, ScrollText, ExternalLink
} from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'module'
  const [currentModule, setCurrentModule] = useState(null);
  const [completedModules, setCompletedModules] = useState(new Set());
  const [answers, setAnswers] = useState({});

  const modules = [
    {
      id: 0,
      title: "Introduction and Orientation",
      duration: "1 hour",
      icon: <User className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      objectives: [
        "Describe the purpose, structure, and expectations of the certification course.",
        "Define the role, responsibilities, and boundaries of a mental health paraprofessional.",
        "Explain how their work fits within the broader mental health ecosystem in the Philippines.",
        "Commit to ethical, trauma-informed, and rights-based support practices."
      ],
      content: [
        {
          type: 'video',
          title: 'Welcome to Cognitio+',
          duration: '8 min',
          description: 'Course Director introduces the vision, values, and journey ahead.',
          url: 'https://youtu.be/7feUjsAv5is'
        },
        {
          type: 'video',
          title: 'Course Objectives',
          duration: '5 min',
          description: 'Detailed overview of what you will learn in this certification program.',
          url: 'https://youtu.be/Em5JQJTSPsI'
        },
        {
          type: 'video',
          title: 'Message from Chief Training Officer',
          duration: '7 min',
          description: 'Reimagining Mental Health for the Filipinos - A message of hope and commitment.',
          url: 'https://youtu.be/PtN2YMdU1WY'
        },
        {
          type: 'video',
          title: 'Why This Course Matters',
          duration: '6 min',
          description: 'Understanding the critical need for paraprofessionals in the Philippine context.',
          url: 'https://youtu.be/sv8bYW8LtWE'
        },
        {
          type: 'slides',
          title: 'Your Role as a Paraprofessional',
          items: [
            "Supportive, not diagnostic",
            "Bridge to care, not a clinician",
            "Peer-based, not expert-led",
            "WHO Stepped Care Model: Level 1"
          ]
        },
        {
          type: 'pledge',
          title: 'Digital Pledge',
          text: "I commit to providing respectful, ethical, and compassionate support within my scope as a paraprofessional. I will not diagnose, treat, or promise secrecy in crisis situations. I will seek help when needed—for others and for myself."
        }
      ],
      quiz: [
        {
          question: "What is the primary role of a mental health paraprofessional?",
          options: [
            "To diagnose mental health conditions",
            "To prescribe medication",
            "To provide peer-based psychosocial support",
            "To replace therapists in rural areas"
          ],
          correct: 2
        },
        {
          question: "Which model places paraprofessionals at Level 1?",
          options: [
            "Maslow's Hierarchy",
            "WHO Stepped Care Model",
            "Biopsychosocial Model",
            "Stages of Change"
          ],
          correct: 1
        }
      ],
      reflection: "What does ‘holding space’ mean to you? Write about a time someone truly listened to you—how did it feel?"
    },
    {
      id: 1,
      title: "Foundations of Mental Health and Well-Being",
      duration: "3 hours",
      icon: <Heart className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-500",
      objectives: [
        "Define mental health using WHO and Philippine frameworks.",
        "Explain biopsychosocial determinants of mental well-being.",
        "Describe key provisions of RA 11036 (Mental Health Act).",
        "Identify how stigma affects help-seeking.",
        "Position paraprofessional work within the national mental health system."
      ],
      content: [
        {
          type: 'video',
          title: 'Mental Health in the Philippines',
          duration: '12 min',
          description: 'Overview of RA 11036, PCMH pillars, and community mental health landscape.',
          url: 'https://youtu.be/aHAuxdBfDzA'
        },
        {
          type: 'info',
          title: 'WHO Definition of Mental Health',
          text: "“Mental health is a state of well-being in which an individual realizes their own abilities, can cope with the normal stresses of life, can work productively, and is able to make a contribution to their community.”"
        },
        {
          type: 'table',
          title: 'Biopsychosocial Determinants',
          headers: ['Level', 'Examples'],
          rows: [
            ['Biological', 'Genetics, brain chemistry, chronic illness'],
            ['Psychological', 'Coping skills, self-esteem, trauma history'],
            ['Social', 'Poverty, discrimination, family support, access to education']
          ]
        }
      ],
      quiz: [
        {
          question: "Which law guarantees every Filipino the right to mental health care?",
          options: [
            "RA 10173",
            "RA 9165",
            "RA 11036",
            "RA 7277"
          ],
          correct: 2
        }
      ],
      reflection: "Describe a time when you or someone struggled emotionally. What helped? What barriers existed?"
    },
    {
      id: 2,
      title: "Ethics, Boundaries, and Digital Confidentiality",
      duration: "2 hours",
      icon: <Shield className="h-5 w-5" />,
      color: "from-purple-500 to-indigo-500",
      objectives: [
        "Explain core ethical principles (autonomy, beneficence, non-maleficence, justice).",
        "Apply RA 10173 (Data Privacy Act) to digital conversations.",
        "Obtain informed consent.",
        "Identify and manage boundary violations.",
        "Use a Digital Confidentiality Checklist."
      ],
      content: [
        {
          type: 'video',
          title: 'Ethics in Online Peer Support',
          duration: '10 min',
          description: 'Real scenarios on privacy, consent, and boundary setting.',
          url: 'https://youtu.be/8Ow64RjY5zc'
        },
        {
          type: 'script',
          title: 'Informed Consent Script',
          text: "Hi, I’m [Name], a trained peer supporter. Our conversation is private, but I can’t keep it secret if you’re in danger. Do you feel okay talking with me today?"
        },
        {
          type: 'checklist',
          title: 'Digital Confidentiality Checklist',
          items: [
            "✅ Secure platform (e.g., Signal)",
            "✅ Consent obtained",
            "✅ Data anonymized/deleted",
            "✅ No public discussion of cases"
          ]
        }
      ],
      quiz: [
        {
          question: "When can you break confidentiality?",
          options: [
            "When the user shares a sad story",
            "When a friend asks about your user",
            "When there is imminent risk of harm",
            "Never"
          ],
          correct: 2
        }
      ],
      reflection: "Describe a time you faced a boundary challenge."
    },
    {
      id: 3,
      title: "Psychological First Aid (Look–Listen–Link)",
      duration: "3 hours",
      icon: <Eye className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
      objectives: [
        "Explain PFA principles and limits.",
        "Apply Look–Listen–Link in distress scenarios.",
        "Recognize common stress reactions.",
        "Respond to suicidal ideation with calm communication.",
        "Make safe referrals within the Philippine system."
      ],
      content: [
        {
          type: 'video',
          title: 'PFA in Action: Look–Listen–Link',
          duration: '15 min',
          description: 'Animated demo of PFA response to online disclosure of anxiety.',
          url: 'https://youtu.be/TpPGddb93Kg'
        },
        {
          type: 'framework',
          title: 'Look–Listen–Link',
          steps: [
            { step: "LOOK", desc: "Assess safety and distress cues" },
            { step: "LISTEN", desc: "Offer nonjudgmental attention" },
            { step: "LINK", desc: "Connect to emotional, practical, and professional support" }
          ]
        },
        {
          type: 'resources',
          title: 'Philippine Referral Pathways',
          items: [
            "Hopeline PH: (02) 804-HOPE or 0917-558-HOPE",
            "Barangay MHPSS Desks",
            "DOH Mental Health Program via RHUs"
          ]
        }
      ],
      quiz: [
        {
          question: "What is the first step in PFA?",
          options: [
            "Give advice",
            "Ask about diagnosis",
            "Look – Assess safety",
            "Call a therapist"
          ],
          correct: 2
        }
      ],
      reflection: "When did someone’s presence help you through pain?"
    },
    {
      id: 4,
      title: "Core Support Skills",
      duration: "6 hours",
      icon: <MessageCircle className="h-5 w-5" />,
      color: "from-pink-500 to-rose-500",
      objectives: [
        "Demonstrate eight core support skills.",
        "Apply active listening in simulations.",
        "Use culturally appropriate validation.",
        "Practice limited self-disclosure.",
        "Integrate feedback using WHO rubric."
      ],
      content: [
        {
          type: 'skills',
          title: 'Eight Core Support Skills',
          items: [
            "1. Building Rapport",
            "2. Showing Empathy",
            "3. Reflecting",
            "4. Labeling Emotions",
            "5. Asking Open Questions",
            "6. Sharing Limited Personal Experience",
            "7. Identifying Strengths",
            "8. Responding When Asked for Advice"
          ]
        },
        {
          type: 'videos',
          title: 'Skill Demonstrations',
          videos: [
            { title: 'Building Rapport', url: 'https://youtu.be/TpPGddb93Kg' },
            { title: 'Showing Empathy', url: 'https://youtu.be/Jkg-1kLhTT4' },
            { title: 'Reflecting', url: 'https://youtu.be/ZhRTvXN_tJ8' },
            { title: 'Labeling Emotions', url: 'https://youtu.be/lxuYFw85hvw' },
            { title: 'Asking the Right Questions', url: 'https://youtu.be/8Ow64RjY5zc' },
            { title: 'Sharing Limited Personal Experience', url: 'https://youtu.be/7OReldWvjds' },
            { title: 'Identifying Strengths', url: 'https://youtu.be/znVeC6cdAVE' },
            { title: 'Generative Listening', url: 'https://youtu.be/lxuYFw85hvw' }
          ]
        },
        {
          type: 'example',
          title: 'Filipino Context Examples',
          examples: [
            { skill: "Empathy", phrase: "Ang bigat pala ng nararamdaman mo." },
            { skill: "Strengths", phrase: "Kahit gaano kahirap, nagawa mong kausapin ako—yan ay lakas." },
            { skill: "Advice", phrase: "Some people find journaling helpful—would that interest you?" }
          ]
        }
      ],
      quiz: [],
      reflection: "Which skill felt most natural? Hardest?"
    },
    {
      id: 5,
      title: "Recognizing and Responding to Crisis",
      duration: "4 hours",
      icon: <Zap className="h-5 w-5" />,
      color: "from-yellow-500 to-amber-500",
      objectives: [
        "Identify warning signs of suicide and self-harm.",
        "Apply 4-step crisis protocol.",
        "Use direct, nonjudgmental language.",
        "Navigate Philippine referral systems.",
        "Document and escalate using Crisis Escalation Matrix."
      ],
      content: [
        {
          type: 'warning',
          title: 'Warning Signs',
          signs: [
            "Verbal: “I want to disappear”",
            "Behavioral: Giving away possessions",
            "Emotional: Sudden calm after distress"
          ]
        },
        {
          type: 'protocol',
          title: '4-Step Crisis Response',
          steps: [
            "1. Stay calm & ensure safety",
            "2. Listen without judgment",
            "3. Remove access to means (if possible)",
            "4. Connect to help (Hopeline, 911, barangay desk)"
          ]
        },
        {
          type: 'matrix',
          title: 'Crisis Escalation Matrix',
          levels: [
            "Self → Supervisor → DOH/Professional"
          ]
        }
      ],
      quiz: [
        {
          question: "Which is an appropriate response to suicidal ideation?",
          options: [
            "“You have so much to live for!”",
            "“I’m not qualified to help.”",
            "“Are you thinking about hurting yourself? Do you have a plan?”",
            "“Let me post a prayer request.”"
          ],
          correct: 2
        }
      ],
      reflection: "What fears come up about crisis response?"
    },
    {
      id: 6,
      title: "Cultural Sensitivity and Community Context",
      duration: "2 hours",
      icon: <Globe className="h-5 w-5" />,
      color: "from-green-500 to-lime-500",
      objectives: [
        "Explain how Filipino values affect help-seeking.",
        "Adapt to regional, religious, and identity diversity.",
        "Honor indigenous and faith-based healing.",
        "Challenge bias and microaggressions.",
        "Apply PCMH Pillar 2."
      ],
      content: [
        {
          type: 'values',
          title: 'Filipino Values',
          items: [
            "Hiya (shame)",
            "Utang na Loob (gratitude)",
            "Pakikisama (harmony)"
          ]
        },
        {
          type: 'diversity',
          title: 'Diversity in PH',
          facts: [
            "175+ languages",
            "Catholic, Muslim, Indigenous, LGBTQIA+, PWD perspectives"
          ]
        }
      ],
      quiz: [],
      reflection: "What messages did you receive about mental health growing up?"
    },
    {
      id: 7,
      title: "Self-Care and Peer Supervision",
      duration: "3 hours",
      icon: <Heart className="h-5 w-5" />,
      color: "from-indigo-500 to-purple-500",
      objectives: [
        "Differentiate stress, burnout, compassion fatigue.",
        "Recognize personal warning signs.",
        "Practice mindfulness and grounding.",
        "Develop a self-care plan.",
        "Participate in peer supervision."
      ],
      content: [
        {
          type: 'selfcare',
          title: 'Four Dimensions of Self-Care',
          dimensions: [
            "Physical: Sleep, nutrition, movement",
            "Emotional: Journaling, crying, therapy",
            "Social: Time with friends, peer circles",
            "Spiritual: Prayer, nature, gratitude"
          ]
        },
        {
          type: 'supervision',
          title: 'Peer Supervision Structure',
          steps: [
            "Check-in → Case share → Reflection → Resource exchange"
          ]
        }
      ],
      quiz: [],
      reflection: "Describe a time you ignored your needs to care for others."
    },
    {
      id: 8,
      title: "Practicum and Mentorship",
      duration: "16 hours",
      icon: <Users className="h-5 w-5" />,
      color: "from-cyan-500 to-blue-500",
      objectives: [
        "Deliver 10 ethical peer support sessions.",
        "Apply all core skills in real interactions.",
        "Maintain boundaries and confidentiality.",
        "Reflect critically on practice.",
        "Identify growth areas."
      ],
      content: [
        {
          type: 'requirements',
          title: 'Practicum Requirements',
          items: [
            "10 sessions (20–45 mins each)",
            "Online or in-community",
            "Voluntary participants only",
            "Informed consent for every session"
          ]
        },
        {
          type: 'assessment',
          title: 'Mentorship & Assessment',
          items: [
            "3 sessions observed/recorded (with consent)",
            "Reflection Journal (10 entries)",
            "Mentor completes Observation Rubric and Final Evaluation"
          ]
        }
      ],
      quiz: [],
      reflection: "What did you learn about yourself through practicum?"
    },
    {
      id: 9,
      title: "Integration and Certification",
      duration: "1 hour",
      icon: <Award className="h-5 w-5" />,
      color: "from-amber-500 to-orange-500",
      objectives: [
        "Demonstrate mastery of course content through a final knowledge assessment.",
        "Reflect on personal and professional growth throughout the training.",
        "Articulate their role in the national mental health ecosystem.",
        "Commit to ongoing learning and ethical practice.",
        "Receive official certification."
      ],
      content: [
        {
          type: 'exam',
          title: 'Final Post-Test',
          details: "30 MCQs, 80% to pass, 2 attempts allowed"
        },
        {
          type: 'pledge',
          title: 'Paraprofessional Pledge',
          text: "I pledge to listen with empathy, act with integrity, and uphold the dignity of every person I support. I will know my limits, seek supervision when needed, and care for myself so I can serve others. I stand with the people of the Philippines in building a future where mental health is a shared responsibility and a universal right."
        }
      ],
      quiz: [],
      reflection: "Compare your confidence and knowledge at the start of this course to now. What skill are you most proud of developing?"
    }
  ];

  const progress = Math.round((completedModules.size / modules.length) * 100);

  const startModule = (module) => {
    setCurrentModule(module);
    setCurrentView('module');
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    setCurrentView('dashboard');
    setCurrentModule(null);
  };

  const handleAnswer = (moduleId, questionIndex, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [questionIndex]: optionIndex
      }
    }));
  };

  const submitQuiz = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    let score = 0;
    const userAnswers = answers[moduleId] || {};
    
    module.quiz.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        score++;
      }
    });

    if (score === module.quiz.length) {
      setCompletedModules(prev => new Set(prev).add(moduleId));
    }
    
    alert(`Quiz submitted! Score: ${score}/${module.quiz.length}`);
  };

  if (currentView === 'module' && currentModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
            <button 
              onClick={goBack}
              className="flex items-center text-indigo-600 hover:text-indigo-800 mr-4"
            >
              <ChevronLeft className="h-5 w-5" />
              Back to Dashboard
            </button>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentModule.color} flex items-center justify-center text-white`}>
                {currentModule.icon}
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">{currentModule.title}</h1>
                <p className="text-sm text-gray-600">{currentModule.duration}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Objectives */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 text-indigo-600 mr-2" />
              Learning Objectives
            </h2>
            <ul className="space-y-2">
              {currentModule.objectives.map((obj, idx) => (
                <li key={idx} className="text-gray-700 flex">
                  <span className="text-indigo-500 mr-2">•</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Lesson Content */}
          <div className="space-y-8 mb-10">
            {currentModule.content.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.title}</h3>
                
                {item.type === 'video' && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                    <Play className="h-12 w-12 text-indigo-500 mx-auto mb-3" />
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.duration}</p>
                    <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700"
                    >
                      Watch Video <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                )}

                {item.type === 'videos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.videos.map((vid, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">{vid.title}</h4>
                        <a 
                          href={vid.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200"
                        >
                          Watch Video <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'slides' && (
                  <ul className="space-y-2">
                    {item.items.map((slide, i) => (
                      <li key={i} className="p-3 bg-blue-50 rounded-lg text-gray-800">{slide}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'info' && (
                  <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 text-gray-800 italic">
                    "{item.text}"
                  </div>
                )}

                {item.type === 'table' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {item.headers.map((header, i) => (
                            <th key={i} className="px-4 py-2 text-left text-sm font-medium text-gray-900">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {item.rows.map((row, i) => (
                          <tr key={i}>
                            <td className="px-4 py-2 text-sm text-gray-900">{row[0]}</td>
                            <td className="px-4 py-2 text-sm text-gray-600">{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {item.type === 'script' && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-mono text-gray-800">{item.text}</p>
                  </div>
                )}

                {item.type === 'checklist' && (
                  <ul className="space-y-1">
                    {item.items.map((check, i) => (
                      <li key={i} className="text-gray-700">{check}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'framework' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {item.steps.map((step, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-indigo-600">{step.step}</div>
                        <p className="text-gray-700 mt-2">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'resources' && (
                  <ul className="space-y-2">
                    {item.items.map((res, i) => (
                      <li key={i} className="p-3 bg-green-50 rounded-lg text-gray-800">{res}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'skills' && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.items.map((skill, i) => (
                      <li key={i} className="p-3 bg-pink-50 rounded-lg text-gray-800">{skill}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'example' && (
                  <div className="space-y-3">
                    {item.examples.map((ex, i) => (
                      <div key={i} className="p-3 bg-rose-50 rounded-lg">
                        <span className="font-medium">{ex.skill}:</span> {ex.phrase}
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'warning' && (
                  <ul className="space-y-2">
                    {item.signs.map((sign, i) => (
                      <li key={i} className="p-3 bg-red-50 rounded-lg text-gray-800">{sign}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'protocol' && (
                  <ol className="space-y-2 list-decimal pl-5">
                    {item.steps.map((step, i) => (
                      <li key={i} className="p-2 bg-amber-50 rounded">{step}</li>
                    ))}
                  </ol>
                )}

                {item.type === 'matrix' && (
                  <div className="p-4 bg-yellow-50 rounded-lg text-center">
                    <p className="text-gray-800 font-medium">{item.levels[0]}</p>
                  </div>
                )}

                {item.type === 'values' && (
                  <ul className="space-y-2">
                    {item.items.map((val, i) => (
                      <li key={i} className="p-3 bg-lime-50 rounded-lg text-gray-800">{val}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'diversity' && (
                  <div className="space-y-3">
                    {item.facts.map((fact, i) => (
                      <div key={i} className="p-3 bg-green-50 rounded-lg">
                        {fact}
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'selfcare' && (
                  <ul className="space-y-2">
                    {item.dimensions.map((dim, i) => (
                      <li key={i} className="p-3 bg-purple-50 rounded-lg text-gray-800">{dim}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'supervision' && (
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="text-gray-800">{item.steps[0]}</p>
                  </div>
                )}

                {item.type === 'requirements' && (
                  <ul className="space-y-2">
                    {item.items.map((req, i) => (
                      <li key={i} className="p-3 bg-cyan-50 rounded-lg text-gray-800">{req}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'assessment' && (
                  <ul className="space-y-2">
                    {item.items.map((assess, i) => (
                      <li key={i} className="p-3 bg-blue-50 rounded-lg text-gray-800">{assess}</li>
                    ))}
                  </ul>
                )}

                {item.type === 'exam' && (
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-gray-800">{item.details}</p>
                  </div>
                )}

                {item.type === 'pledge' && (
                  <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg">
                    <p className="text-gray-800 italic">"{item.text}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reflection */}
          {currentModule.reflection && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <ScrollText className="h-5 w-5 text-indigo-600 mr-2" />
                Reflection Prompt
              </h3>
              <p className="text-gray-700 mb-4">{currentModule.reflection}</p>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg min-h-[120px]"
                placeholder="Write your reflection here..."
              />
              <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                Save Reflection
              </button>
            </div>
          )}

          {/* Quiz */}
          {currentModule.quiz.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileQuestion className="h-5 w-5 text-indigo-600 mr-2" />
                Knowledge Check
              </h3>
              <div className="space-y-6">
                {currentModule.quiz.map((q, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-gray-900 mb-3">{idx + 1}. {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, optIdx) => (
                        <label key={optIdx} className="flex items-start space-x-3">
                          <input
                            type="radio"
                            name={`quiz-${currentModule.id}-${idx}`}
                            className="mt-1"
                            onChange={() => handleAnswer(currentModule.id, idx, optIdx)}
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => submitQuiz(currentModule.id)}
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
              >
                Submit Quiz
              </button>
            </div>
          )}

          {/* Completion */}
          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={goBack}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              ← Back to Dashboard
            </button>
            <button
              onClick={() => {
                setCompletedModules(prev => new Set(prev).add(currentModule.id));
                goBack();
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700"
            >
              Mark as Complete
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Cognitio+</h1>
                <p className="text-sm text-gray-600">Mental Health Paraprofessional Certification</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Your Progress</p>
                <p className="text-sm text-gray-600">{progress}% Complete</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Certification Course for Mental Health and Well-Being Paraprofessionals
              </h2>
              <p className="text-gray-600 max-w-3xl">
                Aligned with WHO mhGAP, WHO QualityRights, and PCMH 2024–2028 Framework
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">40 Hours Total</span>
                </div>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">80% to Pass</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg">
              <Users className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Part 1: Foundational Training</h3>
              <p className="text-sm opacity-90">24 hours of online modules</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-lg">
              <BookOpen className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Part 2: Practicum</h3>
              <p className="text-sm opacity-90">16 hours supervised practice</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-lg">
              <FileText className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Assessment</h3>
              <p className="text-sm opacity-90">Quizzes, role-plays, journal</p>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-4 rounded-lg">
              <Award className="h-6 w-6 mb-2" />
              <h3 className="font-semibold">Certification</h3>
              <p className="text-sm opacity-90">Valid for 2 years</p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => startModule(module)}
            >
              <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center text-white mr-3`}>
                        {module.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-500">Module {module.id}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {module.duration}
                    </div>
                  </div>
                  {completedModules.has(module.id) && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  {module.objectives.length} learning objectives
                </p>
                <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center">
                  Start Lesson <ChevronLeft className="h-4 w-4 rotate-180 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Info */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start">
            <Award className="h-8 w-8 text-green-600 mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for Certification?</h3>
              <p className="text-gray-700 mb-3">
                Complete all modules with ≥80% overall score to earn your certification as a 
                <span className="font-medium"> Basic Mental Health and Wellness Paraprofessional</span>.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">
                  Valid for 2 years
                </span>
                <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">
                  Renewable via refresher
                </span>
                <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">
                  DOH-recognized
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2025 Cognitio+. Aligned with WHO mhGAP, WHO QualityRights, and PCMH 2024–2028 Framework.
            </div>
            <div className="flex space-x-6">
              <span className="text-sm text-gray-500">Developed with ❤️ for the Philippines</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

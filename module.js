const courseData = {
  modules: [
        {
            id: 'module0',
            title: 'Module 0: Orientation and Course Structure',
            duration: '2 hours',
            lessons: [
                { title: 'Pre-Test (15 Items)',
            content: `
                <h2>Pre-Test</h2>
                <p><strong>Instructions:</strong> Select the best answer for each question.</p>
                <ol>
                    <li><strong>What is the primary goal of Psychological First Assistant (PFA)?</strong><br>
                        a) To diagnose mental health conditions quickly.<br>
                        b) To provide non-intrusive, supportive, and practical help to people in crisis.<br>
                        c) To offer long-term cognitive behavioral therapy.<br>
                        d) To force distressed individuals to talk about their trauma.
                    </li>
                    <li><strong>Which Philippine law mandates the integration of mental health services into the basic health care system?</strong><br>
                        a) RA 10173 (Data Privacy Act)<br>
                        b) RA 11036 (Mental Health Act)<br>
                        c) RA 9165 (Comprehensive Dangerous Drugs Act)<br>
                        d) RA 7165 (Local Government Code)
                    </li>
                    <li><strong>The PFA principle of "Look" primarily involves:</strong><br>
                        a) Looking for a psychologist.<br>
                        b) Identifying immediate safety concerns and urgent basic needs.<br>
                        c) Looking through the person's personal notes.<br>
                        d) Looking up the person's social media history.
                    </li>
                    <li><strong>Which ethical principle requires you to act in the client's best interest ("doing good")?</strong><br>
                        a) Autonomy<br>
                        b) Justice<br>
                        c) Beneficence<br>
                        d) Non-maleficence
                    </li>
                    <li><strong>As a paraprofessional, which action is strictly outside your scope of practice?</strong><br>
                        a) Teaching breathing exercises.<br>
                        b) Making a professional referral.<br>
                        c) Diagnosing Bipolar Disorder.<br>
                        d) Listening empathetically.
                    </li>
                    <li><strong>The ethical principle of Autonomy means respecting the client's right to:</strong><br>
                        a) Pay you for services.<br>
                        b) Make their own choices, including refusing help.<br>
                        c) Share your personal life details.<br>
                        d) Get immediate, non-stop support.
                    </li>
                    <li><strong>The Data Privacy Act (RA 10173) governs the handling of Sensitive Personal Information (SPI). Which is an example of SPI?</strong><br>
                        a) A client's favorite color.<br>
                        b) A client's mental health disclosures.<br>
                        c) A client's first name.<br>
                        d) A client's preferred time of day.
                    </li>
                    <li><strong>The PFA action "Link" refers to:</strong><br>
                        a) Linking the client's past to their present problem.<br>
                        b) Connecting the client to social support and professional resources.<br>
                        c) Linking the cause of the crisis to the outcome.<br>
                        d) Linking your personal experience to theirs.
                    </li>
                    <li><strong>What is the primary goal of the WHO Mental Health Gap Action Programme (mhGAP)?</strong><br>
                        a) To fund new hospitals globally.<br>
                        b) To reduce the treatment gap for mental health disorders.<br>
                        c) To train psychiatrists only.<br>
                        d) To abolish all mental health stigma.
                    </li>
                    <li><strong>If a client is experiencing intense emotional distress, the PFA action you should prioritize is:</strong><br>
                        a) Look (Check for safety).<br>
                        b) Listen (Promote calmness).<br>
                        c) Link (Make a referral).<br>
                        d) Force (Encourage them to talk).
                    </li>
                    <li><strong>Professional boundaries are primarily established to protect:</strong><br>
                        a) Only the paraprofessional's schedule.<br>
                        b) Only the client's reputation.<br>
                        c) Both the client and the paraprofessional from harm or exploitation.<br>
                        d) Only the client's family.
                    </li>
                    <li><strong>Why is using non-judgmental language essential in PFA?</strong><br>
                        a) To avoid being rude.<br>
                        b) To promote connectedness and trust.<br>
                        c) To speed up the conversation.<br>
                        d) To help you diagnose the problem faster.
                    </li>
                    <li><strong>Which concept relates to the ethical principle of Justice?</strong><br>
                        a) Only serving clients with medical insurance.<br>
                        b) Serving all individuals equally regardless of their background.<br>
                        c) Giving personal advice only to those who ask nicely.<br>
                        d) Keeping every secret the client tells you.
                    </li>
                    <li><strong>What is the deepest level of listening, according to Otto Scharmer's model, where you listen with an open will to co-create a future possibility?</strong><br>
                        a) Factual Listening<br>
                        b) Downloading<br>
                        c) Empathic Listening<br>
                        d) Generative Listening
                    </li>
                    <li><strong>If a client tells you they are refusing to seek professional help, what action should you take based on the principle of Autonomy?</strong><br>
                        a) Gently pressure them to change their mind.<br>
                        b) Respect their decision while ensuring they know what support is available.<br>
                        c) Immediately end the support session.<br>
                        d) Call their family to intervene without their consent.
                    </li>
                </ol>
                <p style="margin-top: 20px; font-style: italic; color: var(--text-light);">
                    This pre-test is for self-assessment only. Your answers are not scored but will help you identify learning gaps as you progress through the course.
                </p>
                  
                    title: 'Course Goal and Philosophy',
                    content: `
                        <h2>Course Goal and Philosophy</h2>
                        <p>The central goal of this course is to equip you with the essential knowledge, values, and practical skills to provide <strong>safe, ethical, and compassionate peer-based psychosocial support</strong> in various Philippine contexts.</p>
                        <h3>Psychological First Aid (PFA) Principles</h3>
                        <p>The course philosophy applies <strong>Psychological First Aid (PFA)</strong> principles—<em>Look, Listen, Link</em>—to build foundational competencies in immediate support, communication, and safe referral.</p>
                        <section id="module-0-pfa" style="padding:40px; background-color:#f4f8fb;">
                          <h2>PFA CCHeSS Framework: The Five Core Principles</h2>
                          <p>PFA is a human, supportive, and practical response to serious stress, promoting immediate well-being and preventing long-term harm (WHO, 2011).</p>
                          <ul style="text-align:left; max-width:800px; margin:0 auto; font-size:16px; line-height:1.6;">
                            <li><strong>C - Promote Calmness:</strong> Promoting a state of tranquility and helping individuals manage anxiety and stress.</li>
                            <li><strong>C - Promote Connectedness:</strong> Fostering relationships and social support, which can help individuals feel less isolated during difficult times.</li>
                            <li><strong>H - Promote Hope:</strong> Instilling a sense of optimism and encouraging individuals to believe in positive outcomes and future possibilities.</li>
                            <li><strong>S - Promote Self-Efficacy:</strong> Enhancing individuals' confidence in their ability to cope with challenges and navigate their circumstances effectively.</li>
                            <li><strong>S - Promote Safety:</strong> Ensuring that individuals feel secure and protected in their environment, which is crucial for emotional recovery.</li>
                          </ul>
                        </section>
                    `
                },
                {
                    title: 'Course Structure',
                    content: `
                        <h2>Course Structure</h2>
                        <p>This comprehensive certification program consists of two main components:</p>
                        <h3>Part 1: Foundational Training (24 hours)</h3>
                        <p>Online modules introducing ethics, skills, and principles through:</p>
                        <ul>
                            <li>Video lectures and demonstrations</li>
                            <li>Interactive content and case studies</li>
                            <li>Knowledge quizzes</li>
                            <li>Reflection exercises</li>
                        </ul>
                        <h3>Part 2: Practicum (16 hours)</h3>
                        <p>10 guided online or community support sessions under mentor supervision, including:</p>
                        <ul>
                            <li>Real-world application of skills</li>
                            <li>Observation and feedback</li>
                            <li>Supervisor evaluation</li>
                        </ul>
                        <h3>Assessment Breakdown</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Assessment Type</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Knowledge Quizzes</td><td>20%</td></tr>
                                <tr><td>Skills (Role-plays, simulations)</td><td>30%</td></tr>
                                <tr><td>Practicum (Mentor Evaluation)</td><td>35%</td></tr>
                                <tr><td>Reflection (Journal and peer discussion)</td><td>15%</td></tr>
                            </tbody>
                        </table>
                        <p><strong>Overall Passing Grade: 75%</strong></p>
                    `
                }
            ]
        },
        {
            id: 'module1',
            title: 'Module 1: Foundational Frameworks and Your Role',
            duration: '3 hours',
            lessons: [
                {
                    title: '1.1 The Philippine Mental Health Context',
                    content: `
                        <h2>The Philippine Mental Health Context</h2>
                        <p>The <strong>Mental Health Act (Republic Act No. 11036)</strong> establishes the right of every Filipino to integrated, accessible, and rights-based mental health care. This law mandates the integration of mental health services into the basic health care system.</p>
                        <h3>Key Provisions of RA 11036</h3>
                        <ul>
                            <li>Right to access mental health services</li>
                            <li>Integration into primary care</li>
                            <li>Protection of rights of mental health service users</li>
                            <li>Prohibition of discrimination</li>
                            <li>Community-based mental health services</li>
                        </ul>
                        <h3>PCMH Mandate</h3>
                        <p>The Philippine Council for Mental Health (PCMH) is responsible for overseeing the law's implementation, making your role essential to extending its reach into the community.</p>
                        <!-- Embed Module 1 Slide Presentation -->
                        <div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
                            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAG4fnVLh98/CVt0kP-Grox9BbCo3BKwdA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
                        </div>
                        <a href="https://www.canva.com/design/DAG4fnVLh98/CVt0kP-Grox9BbCo3BKwdA/view?utm_content=DAG4fnVLh98&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">View Full Presentation</a>
                    `
                },
                {
                    title: 'Guiding Frameworks',
                    content: `
                        <h2>Guiding Frameworks</h2>
                        <p>The training is anchored in core national and international standards:</p>
                        <h3>WHO Mental Health Gap Action Programme (mhGAP)</h3>
                        <p>A strategy to scale up services for mental, neurological, and substance use disorders. You, as a paraprofessional, are <strong>key to addressing the service gap</strong>.</p>
                        <h3>WHO QualityRights Initiative</h3>
                        <p>Promotes <strong>dignity, recovery, and human rights</strong> in all mental health service delivery.</p>
                        <h3>Philippine Council for Mental Health (PCMH) Strategic Framework 2024–2028</h3>
                        <p>Guides the national mental health agenda, specifically addressing:</p>
                        <ul>
                            <li><strong>Pillar 1:</strong> Workforce Development</li>
                            <li><strong>Pillar 4:</strong> Cross-Sectoral Collaboration</li>
                        </ul>
                        <h3>Mental Health in the Philippines: Current State</h3>
                        <p>The Philippines faces significant mental health challenges:</p>
                        <ul>
                            <li>Limited mental health professionals (ratio of 1 psychiatrist per 250,000 people)</li>
                            <li>High stigma around mental health issues</li>
                            <li>Limited awareness and education</li>
                            <li>Geographic barriers to access</li>
                        </ul>
                        <p><strong>This is where you come in.</strong> As a paraprofessional, you help bridge the treatment gap and extend services to underserved communities.</p>
                        <!-- Bridging the Divide -->
                        <section id="module-1" style="padding:40px; background-color:#ffffff;">
                          <h2>Bridging the Divide</h2>
                          <p>This video explores the role and goals of Mental Health and Well-being Paraprofessionals, focusing on how they bridge the gap between communities and professional services.</p>
                          <!-- Embed Module 1 Video -->
                          <div style="text-align:center; margin:30px 0;">
                            <iframe width="949" height="534" src="https://www.youtube.com/embed/aHAuxdBfDzA" title="Bridging the Divide: The Roles and Goal of Mental Health and Well-being Paraprofessional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                          </div>
                        </section>
                    `
                },
                {
                    title: '1.2 The Roles and Goal of a Paraprofessional',
                    content: `
                        <h2>The Roles and Goal of a Paraprofessional</h2>
                        <p>As a paraprofessional, your role is <strong>non-clinical</strong>. You are not a licensed psychiatrist, psychologist, or counselor.</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Core Role</th>
                                    <th>Action Statement</th>
                                    <th>Professional Boundary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Support</strong></td>
                                    <td>Provide immediate, compassionate, and non-intrusive psychosocial support</td>
                                    <td><strong>DO NOT</strong> diagnose, prescribe medication, or offer psychotherapy</td>
                                </tr>
                                <tr>
                                    <td><strong>Normalize</strong></td>
                                    <td>Use person-first language and psychoeducation to combat mental health stigma</td>
                                    <td><strong>DO NOT</strong> use judgmental language or minimize distress</td>
                                </tr>
                                <tr>
                                    <td><strong>Link</strong></td>
                                    <td>Connect individuals to professional, licensed services when needed</td>
                                    <td><strong>DO NOT</strong> take on long-term case management for severe cases</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>What You CAN Do</h3>
                        <ul>
                            <li>Provide emotional support and active listening</li>
                            <li>Offer psychoeducation about mental health</li>
                            <li>Teach basic coping skills (breathing, grounding)</li>
                            <li>Make appropriate referrals to professionals</li>
                            <li>Follow up on client well-being</li>
                            <li>Advocate for mental health awareness</li>
                        </ul>
                        <h3>What You CANNOT Do</h3>
                        <ul>
                            <li>Diagnose mental health conditions</li>
                            <li>Prescribe or recommend medication</li>
                            <li>Provide psychotherapy or counseling</li>
                            <li>Promise guaranteed outcomes</li>
                            <li>Take on cases beyond your scope</li>
                        </ul>
                    `
                },
                {
                    title: '1.3 Understanding Stigma',
                    content: `
                        <h2>Understanding Mental Health Stigma</h2>
                        <p><strong>Mental Health Stigma</strong> (prejudice and discrimination) is a primary barrier to help-seeking in the Philippines. Your practice must actively counter this by normalizing distress, respecting confidentiality, and upholding the rights-based approach.</p>
                        <h3>Types of Stigma</h3>
                        <ul>
                            <li><strong>Public Stigma:</strong> Negative attitudes held by society</li>
                            <li><strong>Self-Stigma:</strong> Internalized shame about one's own mental health</li>
                            <li><strong>Structural Stigma:</strong> Systemic discrimination in policies and institutions</li>
                        </ul>
                        <h3>Common Stigmatizing Beliefs</h3>
                        <ul>
                            <li>"Mental health problems are a sign of weakness"</li>
                            <li>"People with mental illness are dangerous"</li>
                            <li>"Mental health issues are not real illnesses"</li>
                            <li>"Seeking help means you are crazy"</li>
                        </ul>
                        <h3>How to Combat Stigma</h3>
                        <ol>
                            <li><strong>Use Person-First Language:</strong> Say "person with depression" not "a depressive"</li>
                            <li><strong>Normalize Conversations:</strong> Talk openly about mental health</li>
                            <li><strong>Respect Confidentiality:</strong> Protect privacy to build trust</li>
                            <li><strong>Challenge Misconceptions:</strong> Correct myths with factual information</li>
                            <li><strong>Share Recovery Stories:</strong> Highlight hope and resilience</li>
                            <li><strong>Uphold Human Rights:</strong> Treat all individuals with dignity</li>
                        </ol>
                        <h3>Language Matters</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Instead of...</th>
                                    <th>Say...</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>"He's crazy"</td><td>"He's experiencing mental health challenges"</td></tr>
                                <tr><td>"She's bipolar"</td><td>"She has bipolar disorder"</td></tr>
                                <tr><td>"Committed suicide"</td><td>"Died by suicide"</td></tr>
                                <tr><td>"Mental patient"</td><td>"Person receiving mental health services"</td></tr>
                            </tbody>
                        </table>
                    `
                }
            ]
        },
        {
            id: 'module2',
            title: 'Module 2: Ethical, Legal, and Digital Practice',
            duration: '3 hours',
            lessons: [
                {
                    title: '2.1 Core Ethical Principles',
                    content: `
                        <h2>Core Ethical Principles</h2>
                        <!-- Module 2: Presentation -->
                        <section id="module-2" style="padding:40px; background-color:#ffffff;">
                          <h2>Slide Presentation: Core Ethical Principles</h2>
                          <!-- Embed Module 2 Slide Presentation -->
                          <div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
                            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAG4fzYXTSE/DnwXtDcHeA8rR3Gg3DNrnA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
                          </div>
                          <a href="https://www.canva.com/design/DAG4fzYXTSE/DnwXtDcHeA8rR3Gg3DNrnA/view?utm_content=DAG4fzYXTSE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">View Full Presentation</a>
                        </section>
                        <p>These four principles are the moral foundation of your work as a mental health paraprofessional:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Principle</th>
                                    <th>Meaning in Practice</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Autonomy</strong></td><td>Respect the service user's freedom of choice and self-determination. They have the right to make their own decisions, even if you disagree.</td></tr>
                                <tr><td><strong>Beneficence</strong></td><td>Commit to acting in the best interest of the client ("doing good"). Always ask: "Is this helping the person?"</td></tr>
                                <tr><td><strong>Non-maleficence</strong></td><td>Commit to avoiding harm ("do no harm") by staying strictly within your scope of practice. Don't attempt interventions beyond your training.</td></tr>
                                <tr><td><strong>Justice</strong></td><td>Ensure fairness and equal access to support, irrespective of background, identity, or ability to pay.</td></tr>
                            </tbody>
                        </table>
                        <h3>Applying Ethical Principles: Real Scenarios</h3>
                        <h4>Scenario 1: Autonomy vs. Beneficence</h4>
                        <p>A client refuses to seek professional help despite severe symptoms.</p>
                        <blockquote><strong>Ethical Response:</strong> Respect their autonomy while clearly explaining the benefits of professional care. Provide information and stay supportive without forcing them.</blockquote>
                        <h4>Scenario 2: Non-maleficence</h4>
                        <p>A client asks you to diagnose their condition based on symptoms they describe.</p>
                        <blockquote><strong>Ethical Response:</strong> Politely decline and explain that diagnosis requires professional training. Refer them to a licensed professional.</blockquote>
                        <h4>Scenario 3: Justice</h4>
                        <p>You have limited time and multiple clients seeking support.</p>
                        <blockquote><strong>Ethical Response:</strong> Provide fair access based on need and urgency, not personal preference. Ensure equitable distribution of your time and resources.</blockquote>
                    `
                },
                {
                    title: '2.2 The Data Privacy Act and Digital Confidentiality',
                    content: `
                        <h2>The Data Privacy Act (RA 10173) and Digital Confidentiality</h2>
                        <p>The <strong>Data Privacy Act of 2012 (RA 10173)</strong> strictly regulates the collection, processing, and storage of personal information, especially <strong>Sensitive Personal Information (SPI)</strong>, which includes all mental health disclosures.</p>
                        <h3>What is Sensitive Personal Information (SPI)?</h3>
                        <p>SPI includes information about an individual's:</p>
                        <ul>
                            <li>Mental health status</li>
                            <li>Medical history</li>
                            <li>Religious beliefs</li>
                            <li>Sexual orientation</li>
                            <li>Political affiliations</li>
                        </ul>
                        <h3>Mandatory Actions Under RA 10173</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Area</th>
                                    <th>Mandatory Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Digital Conversations</strong></td><td>Use <strong>end-to-end encrypted platforms</strong> (e.g., Signal). Never use personal social media (e.g., Facebook Messenger, personal email) for formal support.</td></tr>
                                <tr><td><strong>Data Storage</strong></td><td>Store all documentation (e.g., case logs, notes) in a <strong>password-protected</strong> or encrypted system.</td></tr>
                                <tr><td><strong>Informed Consent</strong></td><td>Explicitly inform the client how their data will be collected, used, and protected before the support session begins.</td></tr>
                                <tr><td><strong>Data Retention</strong></td><td>Keep records only as long as necessary. Securely delete or anonymize data when no longer needed.</td></tr>
                            </tbody>
                        </table>
                        <h3>Digital Confidentiality Checklist</h3>
                        <ul>
                            <li>✓ Use secure platform (e.g., Signal)</li>
                            <li>✓ Obtain informed consent</li>
                            <li>✓ Ensure data is anonymized or encrypted</li>
                            <li>✓ Avoid public discussion of cases</li>
                            <li>✓ Use strong passwords</li>
                            <li>✓ Log out of accounts after sessions</li>
                            <li>✓ Don't save personal information on unsecured devices</li>
                        </ul>
                        <h3>Consequences of Violations</h3>
                        <p>Violating RA 10173 can result in:</p>
                        <ul>
                            <li>Imprisonment of 1-6 years</li>
                            <li>Fines of ₱500,000 to ₱5,000,000</li>
                            <li>Loss of certification</li>
                            <li>Legal liability</li>
                        </ul>
                    `
                },
                {
                    title: '2.3 Informed Consent and Professional Boundaries',
                    content: `
                        <h2>Informed Consent and Professional Boundaries</h2>
                        <h3>Informed Consent</h3>
                        <p>Informed consent must be <strong>Voluntary, Informed, and Specific (VIS)</strong>. The client must understand:</p>
                        <ul>
                            <li>The limits of your role</li>
                            <li>The limits of confidentiality</li>
                            <li>How their information will be used</li>
                            <li>Their right to refuse or withdraw</li>
                        </ul>
                        <h3>Sample Consent Script</h3>
                        <blockquote>"Hi, I'm [Name], a trained peer supporter. Our conversation is private, but I can't keep it secret if you're in danger of harming yourself or others. Everything we discuss is confidential unless there's a safety concern. You can stop our conversation at any time. Do you feel okay talking with me today?"</blockquote>
                        <h3>Limits of Confidentiality (Duty to Warn)</h3>
                        <p>You <strong>must</strong> breach confidentiality when:</p>
                        <ol>
                            <li><strong>Imminent risk of harm:</strong> Client expresses intent to harm themselves or others</li>
                            <li><strong>Child abuse:</strong> You suspect abuse or neglect of a minor</li>
                            <li><strong>Court order:</strong> Legal mandate to disclose information</li>
                            <li><strong>Elder abuse:</strong> You suspect abuse of an elderly person</li>
                        </ol>
                        <h3>Professional Boundaries</h3>
                        <p>Boundaries define your role and protect both you and the client.</p>
                        <h4>Boundary Violations to AVOID:</h4>
                        <ul>
                            <li>❌ Social media friendships with clients</li>
                            <li>❌ Over-sharing your own trauma or personal life</li>
                            <li>❌ Responding to clients at all hours without limits</li>
                            <li>❌ Making unrealistic promises ("I'll fix this")</li>
                            <li>❌ Accepting large gifts or money</li>
                            <li>❌ Meeting clients in inappropriate settings</li>
                            <li>❌ Romantic or sexual relationships with clients</li>
                            <li>❌ Taking on too many clients beyond your capacity</li>
                        </ul>
                        <h4>Healthy Boundaries:</h4>
                        <ul>
                            <li>✓ Set clear working hours</li>
                            <li>✓ Maintain professional distance</li>
                            <li>✓ Refer complex cases appropriately</li>
                            <li>✓ Practice self-care</li>
                            <li>✓ Seek supervision when unsure</li>
                        </ul>
                        <h3>What to Do If Boundaries Are Crossed</h3>
                        <ol>
                            <li>Acknowledge the boundary violation</li>
                            <li>Discuss it with your supervisor</li>
                            <li>Restore appropriate boundaries</li>
                            <li>If necessary, refer the client to another professional</li>
                            <li>Document the incident</li>
                        </ol>
                    `
                }
            ]
        },
        {
            id: 'module3',
            title: 'Module 3: Psychological First Aid (PFA) and Scope',
            duration: '3 hours',
            lessons: [
                {
                    title: '3.1 The Basics of PFA',
                    content: `
                        <h2>Video: The Basics of PFA</h2>
                        <p>Psychological First Aid (PFA) is a human, supportive, and practical response to serious stress, promoting immediate well-being and preventing long-term harm.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/sGooy-cS9G4" allowfullscreen></iframe>
                        </div>
                        <section id="module-0-pfa" style="padding:40px; background-color:#f4f8fb;">
                          <h2>PFA CCHeSS Framework: The Five Core Principles</h2>
                          <p>The course philosophy applies <strong>Psychological First Aid (PFA)</strong> principles—<em>Look, Listen, Link</em>—to build foundational competencies in immediate support, communication, and safe referral.</p>
                          <ul>
                            <li><strong>C - Promote Calmness:</strong> Helping individuals manage anxiety and stress.</li>
                            <li><strong>C - Promote Connectedness:</strong> Fostering relationships and social support.</li>
                            <li><strong>H - Promote Hope:</strong> Instilling optimism and belief in positive outcomes.</li>
                            <li><strong>S - Promote Self-Efficacy:</strong> Enhancing confidence in coping with challenges.</li>
                            <li><strong>S - Promote Safety:</strong> Ensuring individuals feel secure and protected.</li>
                          </ul>
                        </section>
                    `
                },
                {
                    title: '3.2 Applying the PFA Action Model: LOOK, LISTEN, LINK',
                    content: `
                        <h2>Applying the PFA Action Model</h2>
                        <p>The PFA action model provides a simple, practical framework for responding to people in distress.</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>PFA Action</th>
                                    <th>Focus</th>
                                    <th>Paraprofessional Goal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>LOOK 👀</strong></td><td>Observation and Assessment of Needs</td><td>Identify urgent basic needs (water, shelter, medical) and immediate safety concerns (signs of severe distress or danger)</td></tr>
                                <tr><td><strong>LISTEN 👂</strong></td><td>Engagement and Active Listening</td><td>Establish rapport, accept the person's story without pressure, and validate their feelings</td></tr>
                                <tr><td><strong>LINK 🔗</strong></td><td>Connecting to Resources</td><td>Provide practical help, connect them to social supports, and facilitate referral to appropriate professional services</td></tr>
                            </tbody>
                        </table>
                        <h3>LOOK: What to Observe</h3>
                        <ul>
                            <li><strong>Safety concerns:</strong> Is the person in immediate danger?</li>
                            <li><strong>Basic needs:</strong> Do they need water, food, shelter, medical attention?</li>
                            <li><strong>Distress cues:</strong> Body language, facial expressions, tone of voice</li>
                            <li><strong>People who need urgent help:</strong> Those with serious injuries, severe distress, or special needs</li>
                        </ul>
                        <h3>LISTEN: How to Engage</h3>
                        <ul>
                            <li><strong>Approach respectfully:</strong> Introduce yourself</li>
                            <li><strong>Ask about needs:</strong> "How can I help you right now?"</li>
                            <li><strong>Listen actively:</strong> Full attention, no judgment</li>
                            <li><strong>Accept their story:</strong> Don't pressure them to talk</li>
                            <li><strong>Validate feelings:</strong> "It makes sense that you feel this way"</li>
                            <li><strong>Offer comfort:</strong> Calm presence and reassurance</li>
                        </ul>
                        <h3>LINK: How to Connect</h3>
                        <ul>
                            <li><strong>Address immediate needs:</strong> Help with practical problems</li>
                            <li><strong>Connect to support:</strong> Family, friends, community</li>
                            <li><strong>Provide information:</strong> About available services</li>
                            <li><strong>Facilitate referrals:</strong> To professional help when needed</li>
                            <li><strong>Follow up:</strong> Check in on their well-being</li>
                        </ul>
                    `
                },
                {
                    title: '3.3 What PFA is NOT',
                    content: `
                        <h2>What PFA is NOT</h2>
                        <p>Understanding what PFA is <em>not</em> is just as important as knowing what it is.</p>
                        <h3>❌ Not Professional Counseling</h3>
                        <p>PFA is <strong>immediate, temporary, and non-clinical</strong>. It's not:</p>
                        <ul>
                            <li>Psychotherapy or counseling</li>
                            <li>Long-term treatment</li>
                            <li>A substitute for professional mental health care</li>
                        </ul>
                        <h3>❌ Not Forced Debriefing</h3>
                        <p><strong>Never pressure a person to tell their story.</strong></p>
                        <ul>
                            <li>Let them share at their own pace</li>
                            <li>Respect if they don't want to talk</li>
                            <li>Forced disclosure can cause more harm</li>
                        </ul>
                        <h3>❌ Not Diagnosis</h3>
                        <p><strong>Never label the person with a mental health condition.</strong></p>
                        <ul>
                            <li>Don't say "You have PTSD" or "This is anxiety"</li>
                            <li>Focus on supporting them, not diagnosing them</li>
                            <li>Diagnosis requires professional training</li>
                        </ul>
                        <h3>❌ Not For Everyone</h3>
                        <p>Some people may not want or need PFA:</p>
                        <ul>
                            <li>Those who want to be alone</li>
                            <li>Those already receiving adequate support</li>
                            <li>Those who are coping well on their own</li>
                        </ul>
                        <h3>❌ Not A One-Size-Fits-All Approach</h3>
                        <ul>
                            <li>Adapt to individual needs and cultural context</li>
                            <li>Be flexible in your approach</li>
                            <li>Consider age, gender, culture, and circumstances</li>
                        </ul>
                        <h3>✓ What PFA IS</h3>
                        <p>To summarize, PFA is:</p>
                        <ul>
                            <li>✓ Immediate, practical support</li>
                            <li>✓ Non-intrusive and respectful</li>
                            <li>✓ Focused on safety and basic needs</li>
                            <li>✓ Empowering and hopeful</li>
                            <li>✓ A bridge to professional care when needed</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'module4',
            title: 'Module 4: Core Communication and Basic Coping Skills',
            duration: '4 hours',
            lessons: [
                {
                    title: '4.1 Core Support Skills (Part 1)',
                    content: `
                        <h2>Core Support Skills: The LISTEN Phase</h2>
                        <p>Effective listening and communication form the bedrock of rapport and trust. These eight core skills guide the <strong>LISTEN</strong> phase of PFA.</p>
                        <h3>1. Building Rapport</h3>
                        <p>Establishing trust and comfort through authentic presence and non-verbal cues.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/TpPGddb93Kg" allowfullscreen></iframe>
                        </div>
                        <p><strong>Key Techniques:</strong></p>
                        <ul>
                            <li>Introduce yourself warmly</li>
                            <li>Use appropriate eye contact</li>
                            <li>Mirror body language subtly</li>
                            <li>Show genuine interest</li>
                            <li>Be present and attentive</li>
                        </ul>
                        <h3>2. Showing Empathy</h3>
                        <p>Connecting to the feelings and experiences of the client to communicate understanding.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/Jkg-1kLhTT4" allowfullscreen></iframe>
                        </div>
                        <p><strong>Empathy vs. Sympathy:</strong></p>
                        <ul>
                            <li><strong>Empathy:</strong> "I can see this is really hard for you"</li>
                            <li><strong>Sympathy:</strong> "I feel sorry for you"</li>
                        </ul>
                        <p>Empathy connects, sympathy can create distance.</p>
                    `
                },
                {
                    title: '4.2 Core Support Skills (Part 2)',
                    content: `
                        <h2>Core Support Skills (Continued)</h2>
                        <h3>3. Reflecting</h3>
                        <p>Paraphrasing the client's statements to confirm understanding and deepen the conversation.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/ZhRTvXN_tJ8" allowfullscreen></iframe>
                        </div>
                        <p><strong>Example:</strong></p>
                        <blockquote>
                        <strong>Client:</strong> "I can't handle all this pressure from work and home."<br>
                        <strong>You:</strong> "It sounds like you're feeling overwhelmed by demands from multiple areas of your life."
                        </blockquote>
                        <h3>4. Labeling Emotions</h3>
                        <p>Helping the client accurately name and articulate their internal feelings.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/WCWtnChOdqI" allowfullscreen></iframe>
                        </div>
                        <p><strong>Why it matters:</strong> Naming emotions reduces their intensity and helps process them.</p>
                        <p><strong>Example:</strong></p>
                        <blockquote>"It seems like you're feeling frustrated and disappointed about what happened."</blockquote>
                    `
                },
                {
                    title: '4.3 Core Support Skills (Part 3)',
                    content: `
                        <h2>Core Support Skills (Continued)</h2>
                        <h3>5. Asking the Right Questions</h3>
                        <p>Using open-ended questions that encourage detailed sharing and reflection.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/8Ow64RjY5zc" allowfullscreen></iframe>
                        </div>
                        <p><strong>Open-ended questions:</strong></p>
                        <ul>
                            <li>"Tell me more about that"</li>
                            <li>"How did that make you feel?"</li>
                            <li>"What has been most difficult for you?"</li>
                            <li>"What would be helpful right now?"</li>
                        </ul>
                        <p><strong>Avoid closed questions:</strong></p>
                        <ul>
                            <li>"Are you okay?" (Yes/No)</li>
                            <li>"Did that upset you?" (Yes/No)</li>
                        </ul>
                        <h3>6. Giving No Advice</h3>
                        <p>Guiding the client to their own solutions rather than telling them what to do.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/7OReldWvjds" allowfullscreen></iframe>
                        </div>
                        <p><strong>Why avoid giving advice:</strong></p>
                        <ul>
                            <li>It undermines their autonomy</li>
                            <li>They know their situation best</li>
                            <li>It creates dependency</li>
                            <li>Your advice might not fit their values</li>
                        </ul>
                        <p><strong>Instead, ask:</strong></p>
                        <ul>
                            <li>"What do you think might help?"</li>
                            <li>"What have you tried before that worked?"</li>
                            <li>"What feels right to you?"</li>
                        </ul>
                    `
                },
                {
                    title: '4.4 Core Support Skills (Part 4) & Generative Listening',
                    content: `
                        <h2>Core Support Skills (Continued)</h2>
                        <h3>7. Identifying Strengths</h3>
                        <p>Pointing out the client's inherent resilience and coping abilities to promote self-efficacy.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/znVeC6cdAVE" allowfullscreen></iframe>
                        </div>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>"You've gotten through difficult times before"</li>
                            <li>"It takes courage to reach out for help"</li>
                            <li>"You're showing strength by talking about this"</li>
                        </ul>
                        <h3>8. Generative Listening</h3>
                        <p>The deepest level of listening, focused on suspending judgment and co-creating new possibilities for the future.</p>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/lxuYFw85hvw" allowfullscreen></iframe>
                        </div>
                        <h3>Otto Scharmer's 4 Levels of Listening</h3>
                        <ol>
                            <li><strong>Downloading (Level 1):</strong> Listening only to confirm what we already know</li>
                            <li><strong>Factual Listening (Level 2):</strong> Paying attention to new data</li>
                            <li><strong>Empathic Listening (Level 3):</strong> Listening with an open heart</li>
                            <li><strong>Generative Listening (Level 4):</strong> Listening with an open will, creating space for a new future to emerge</li>
                        </ol>
                        <h3>What Generative Listening Means in Practice</h3>
                        <ul>
                            <li><strong>Listening from the Emerging Future:</strong> Tune into what is becoming possible</li>
                            <li><strong>Co-creation:</strong> Generate new ideas and solutions together</li>
                            <li><strong>Transformation:</strong> Help shift the client's perception toward empowerment</li>
                        </ul>
                    `
                },
                {
                    title: '4.5 Teaching Basic Stabilizing Techniques',
                    content: `
                        <h2>Teaching Basic Stabilizing Techniques</h2>
                        <p>You can teach simple, evidence-based coping skills to promote immediate calmness.</p>
                        <h3>1. Diaphragmatic (Belly) Breathing</h3>
                        <p>Slowing the breath to engage the parasympathetic nervous system (the body's natural calming response).</p>
                        <p><strong>How to Teach It:</strong></p>
                        <ol>
                            <li>Have them place one hand on their chest and one on their belly</li>
                            <li>Inhale slowly through the nose for a count of 4</li>
                            <li>Hold for a count of 2</li>
                            <li>Exhale slowly through the mouth for a count of 6</li>
                            <li>The belly hand should rise more than the chest hand</li>
                            <li>Repeat 5-10 times</li>
                        </ol>
                        <h3>2. 5-4-3-2-1 Grounding Technique</h3>
                        <p>A technique to shift focus away from distressing thoughts by engaging the five senses.</p>
                        <p><strong>How to Guide It:</strong></p>
                        <ul>
                            <li><strong>5:</strong> Name 5 things you can SEE around you</li>
                            <li><strong>4:</strong> Name 4 things you can TOUCH (and touch them)</li>
                            <li><strong>3:</strong> Name 3 things you can HEAR</li>
                            <li><strong>2:</strong> Name 2 things you can SMELL</li>
                            <li><strong>1:</strong> Name 1 thing you can TASTE</li>
                        </ul>
                        <p><strong>When to Use These Techniques:</strong></p>
                        <ul>
                            <li>Panic attacks</li>
                            <li>High anxiety</li>
                            <li>Overwhelming emotions</li>
                            <li>Dissociation or feeling "unreal"</li>
                            <li>Before difficult conversations</li>
                        </ul>
                        <h3>3. Progressive Muscle Relaxation</h3>
                        <p>Tensing and releasing muscle groups to reduce physical tension.</p>
                        <ol>
                            <li>Start with your feet, tense for 5 seconds</li>
                            <li>Release and notice the relaxation</li>
                            <li>Move up through legs, abdomen, hands, arms, shoulders, neck, face</li>
                            <li>Takes about 10-15 minutes</li>
                        </ol>
                    `
                }
            ]
        },
        {
            id: 'module5',
            title: 'Module 5: Crisis Intervention and Safe Referral',
            duration: '4 hours',
            lessons: [
                {
                    title: '5.1 Crisis Recognition',
                    content: `
                        <h2>Crisis Recognition and Immediate Safety Checklist</h2>
                        <p>A crisis requires immediate linkage to professional help (Level 3 Care).</p>
                        <h3>Warning Signs: Acute Distress & Suicide Risk</h3>
                        <h4>Verbal Warning Signs</h4>
                        <ul>
                            <li>"I want to disappear"</li>
                            <li>"Everyone would be better off without me"</li>
                            <li>"I can't take this anymore"</li>
                            <li>"There's no point in going on"</li>
                            <li>"I just want the pain to stop"</li>
                        </ul>
                        <h4>Behavioral Warning Signs</h4>
                        <ul>
                            <li>Giving away possessions</li>
                            <li>Sudden withdrawal from relationships</li>
                            <li>Self-harm (cutting, burning)</li>
                            <li>Reckless behavior</li>
                            <li>Saying goodbye to people</li>
                            <li>Searching for methods online</li>
                            <li>Acquiring means (pills, weapons)</li>
                        </ul>
                        <h4>Emotional Warning Signs</h4>
                        <ul>
                            <li>Sudden calm after a period of severe distress (may indicate a decision has been made)</li>
                            <li>Extreme hopelessness</li>
                            <li>Intense guilt or shame</li>
                            <li>Feeling trapped</li>
                        </ul>
                        <h3>Crisis Indicators Requiring Immediate Action</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Crisis Indicator</th>
                                    <th>Action Protocol</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Imminent Suicide Risk</strong></td><td>Ask directly ("Are you thinking of killing yourself?"), stay with them, and remove means of harm</td></tr>
                                <tr><td><strong>Psychotic Symptoms</strong></td><td>Clear delusions (fixed false beliefs) or hallucinations (seeing/hearing things others do not)</td></tr>
                                <tr><td><strong>Acute Violence/Aggression</strong></td><td>Imminent threat of harm to others</td></tr>
                                <tr><td><strong>Severe Substance Withdrawal/Overdose</strong></td><td>Signs requiring immediate medical intervention</td></tr>
                            </tbody>
                        </table>
                        <!-- Embed Module 5 Slide Presentation -->
                        <div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
                            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAG4hWXo5B0/IQJY1nTSET7nBnMQC08Bvg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
                        </div>
                        <a href="https://www.canva.com/design/DAG4hWXo5B0/IQJY1nTSET7nBnMQC08Bvg/view?utm_content=DAG4hWXo5B0&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">View Full Presentation</a>
                    `
                },
                {
                    title: '5.2 4-Step Crisis Response Protocol',
                    content: `
                        <h2>4-Step Crisis Response Protocol</h2>
                        <h3>Step 1: Stay Calm & Ensure Safety</h3>
                        <ul>
                            <li>Maintain a non-anxious presence</li>
                            <li>Speak in a calm, steady voice</li>
                            <li>Assess the immediate environment for safety</li>
                            <li>Remove any immediate dangers if possible</li>
                            <li>Don't leave the person alone</li>
                        </ul>
                        <h3>Step 2: Listen Without Judgment</h3>
                        <ul>
                            <li>Ask direct questions: "Are you thinking of killing yourself?"</li>
                            <li>Don't be afraid to ask—asking doesn't plant the idea</li>
                            <li>Listen to their pain without minimizing</li>
                            <li>Avoid saying "You have so much to live for"</li>
                            <li>Acknowledge their suffering: "This must be incredibly painful"</li>
                        </ul>
                        <h3>Step 3: Remove Access to Means (if possible)</h3>
                        <ul>
                            <li>Ask about items that could cause harm</li>
                            <li>"Do you have access to pills, weapons, or other means?"</li>
                            <li>If safe, ask them to hand over dangerous items</li>
                            <li>Involve trusted family/friends if appropriate</li>
                            <li>Don't physically struggle—prioritize your safety</li>
                        </ul>
                        <h3>Step 4: Connect to Help IMMEDIATELY</h3>
                        <p><strong>Philippine Crisis Hotlines:</strong></p>
                        <ul>
                            <li><strong>National Center for Mental Health (NCMH): 1553</strong></li>
                            <li><strong>Hopeline PH:</strong> (02) 804-HOPE (4673) or 0917-558-HOPE (4673)</li>
                            <li><strong>Emergency Services: 911</strong></li>
                            <li><strong>Hospital Emergency Room</strong></li>
                        </ul>
                        <h3>What NOT to Do in a Crisis</h3>
                        <ul>
                            <li>❌ Leave the person alone</li>
                            <li>❌ Promise to keep suicide plans secret</li>
                            <li>❌ Act shocked or judgmental</li>
                            <li>❌ Try to talk them out of their feelings</li>
                            <li>❌ Minimize their pain ("It's not that bad")</li>
                            <li>❌ Handle it alone—always seek professional help</li>
                        </ul>
                    `
                },
                {
                    title: '5.3 Safe Referrals within the Philippine System',
                    content: `
                        <h2>Safe Referrals within the Philippine System</h2>
                        <p>Referrals must be targeted to the appropriate level of care:</p>
                        <h3>Level 1: Community/Primary Care</h3>
                        <p><strong>When to Refer:</strong> Non-crisis support, ongoing psychosocial needs, psychoeducation</p>
                        <p><strong>Refer to:</strong></p>
                        <ul>
                            <li>Barangay Health Workers (BHWs)</li>
                            <li>Rural Health Units (RHUs)</li>
                            <li>LGU MHPSS Desks</li>
                            <li>Community mental health volunteers</li>
                        </ul>
                        <h3>Level 2: Specialized Care</h3>
                        <p><strong>When to Refer:</strong> Persistent symptoms, need for formal assessment, moderate to severe conditions</p>
                        <p><strong>Refer to:</strong></p>
                        <ul>
                            <li>Licensed Psychologists</li>
                            <li>Psychiatrists</li>
                            <li>Licensed Professional Counselors</li>
                            <li>Mental health clinics</li>
                        </ul>
                        <h3>Level 3: Tertiary/Emergency Care</h3>
                        <p><strong>When to Refer:</strong> Acute crisis, imminent safety risk, severe symptoms</p>
                        <p><strong>Refer to:</strong></p>
                        <ul>
                            <li><strong>National Center for Mental Health (NCMH): 1553</strong></li>
                            <li><strong>Hopeline PH:</strong> (02) 804-HOPE (4673) / 0917-558-HOPE (4673)</li>
                            <li><strong>Emergency Services: 911</strong></li>
                            <li>Hospital Emergency Room</li>
                            <li>Crisis intervention centers</li>
                        </ul>
                        <h3>Crisis Escalation Matrix</h3>
                        <p>If you cannot manage the risk, immediately escalate:</p>
                        <p><strong>Self → Supervisor → DOH/Professional → Emergency Services</strong></p>
                    `
                },
                {
                    title: '5.4 The Seamless Care Process and Warm Handoff',
                    content: `
                        <h2>The Seamless Care Process and Warm Handoff</h2>
                        <p>To ensure ethical and effective continuity of care (Beneficence), you must master the <strong>seamless care</strong> process.</p>
                        <h3>What is a Warm Handoff?</h3>
                        <p>A <strong>warm handoff</strong> is when you call the referral resource (e.g., a hotline, clinic) <em>while the client is present</em> and briefly introduce the client to the intake officer to ensure a smooth transition of care.</p>
                        <h3>Why Warm Handoffs Matter</h3>
                        <ul>
                            <li>Increases likelihood client will follow through</li>
                            <li>Reduces anxiety about reaching out</li>
                            <li>Ensures information is accurately transferred</li>
                            <li>Shows you care about their well-being</li>
                            <li>Upholds the ethical principle of Beneficence</li>
                        </ul>
                        <h3>Steps for a Warm Handoff</h3>
                        <ol>
                            <li><strong>Explain the referral:</strong> "I'd like to connect you with [resource] who can provide specialized support"</li>
                            <li><strong>Get consent:</strong> "Is it okay if I call them now while you're here?"</li>
                            <li><strong>Make the call:</strong> Call the resource with the client present</li>
                            <li><strong>Brief the professional:</strong> Share relevant information (with client's consent)</li>
                            <li><strong>Hand over:</strong> Let the client speak directly with the professional</li>
                            <li><strong>Document:</strong> Record the referral details</li>
                            <li><strong>Follow up:</strong> Check in later to ensure connection was made</li>
                        </ol>
                        <h3>Documentation Best Practices</h3>
                        <p><strong>Record only facts, not assumptions:</strong></p>
                        <blockquote>"Client presented with chronic worry about finances and difficulty sleeping for the past 3 weeks. Discussed grounding techniques. Referred to LGU MHPSS Desk (Contact: Maria Santos, 0912-345-6789) on December 4, 2024. Client agreed to follow up within one week."</blockquote>
                        <h3>Resources</h3>
                        <p><strong>Seamless Care Guidebook:</strong> <a href="https://cognitioplus.aiwaapp.live/seamless-care" target="_blank">cognitioplus.aiwaapp.live/seamless-care</a></p>
                    `
                }
            ]
        },
        {
            id: 'module6',
            title: 'Module 6: Cultural Sensitivity and Inclusive Practice',
            duration: '3 hours',
            lessons: [
                {
                    title: '6.1 Cultural Humility',
                    content: `
                        <h2>Cultural Humility</h2>
                        <p><strong>Cultural humility</strong> is the continuous process of self-reflection and learning about a client's cultural background without assuming expertise.</p>
                        <!-- Module 6: Presentation -->
                        <section id="module-6" style="padding:40px; background-color:#ffffff;">
                          <h2>Slide Presentation: Cultural Sensitivity</h2>
                          <p>This module consolidates the knowledge and skills learned throughout the course, providing practical applications and case-based learning for paraprofessionals.</p>
                          <!-- Embed Module 6 Slide Presentation -->
                          <div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
                            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAG4htSUDUE/v72-JsOfYY-kObohRljxKQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
                          </div>
                          <a href="https://www.canva.com/design/DAG4htSUDUE/v72-JsOfYY-kObohRljxKQ/view?utm_content=DAG4htSUDUE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">View Full Module 6 Presentation</a>
                        </section>
                        <h3>Key Principles of Cultural Humility</h3>
                        <ul>
                            <li><strong>Lifelong Learning:</strong> Recognize that cultural learning never ends</li>
                            <li><strong>Self-Reflection:</strong> Acknowledge your own cultural biases and assumptions</li>
                            <li><strong>Power Imbalance:</strong> Address the inherent power dynamics in helping relationships</li>
                            <li><strong>Client as Expert:</strong> The client is the expert on their own culture</li>
                        </ul>
                        <h3>Cultural Humility vs. Cultural Competence</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Cultural Competence</th>
                                    <th>Cultural Humility</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>"I know about your culture"</td><td>"I'm learning about your culture from you"</td></tr>
                                <tr><td>Assumes mastery is achievable</td><td>Recognizes learning is ongoing</td></tr>
                                <tr><td>Expert-centered</td><td>Client-centered</td></tr>
                            </tbody>
                        </table>
                        <h3>Practicing Cultural Humility</h3>
                        <ul>
                            <li>Ask, don't assume: "Can you help me understand...?"</li>
                            <li>Acknowledge when you don't know something</li>
                            <li>Be open to correction</li>
                            <li>Recognize your own cultural lens</li>
                            <li>Avoid stereotyping based on cultural identity</li>
                        </ul>
                    `
                },
                {
                    title: '6.2 Key Filipino Cultural Values in MHPSS',
                    content: `
                        <h2>Key Filipino Cultural Values in MHPSS</h2>
                        <h3>Hiya (Shame/Modesty)</h3>
                        <p>Often prevents individuals from admitting distress or seeking help outside the family.</p>
                        <p><strong>How it affects help-seeking:</strong></p>
                        <ul>
                            <li>Reluctance to share personal problems</li>
                            <li>Fear of bringing shame to the family</li>
                            <li>Preference for handling issues privately</li>
                        </ul>
                        <p><strong>Your response:</strong> Emphasize confidentiality and normalize seeking help</p>
                        <h3>Pakikisama (Harmony/Group Solidarity)</h3>
                        <p>Pressure to maintain peace may lead individuals to suppress personal distress.</p>
                        <p><strong>How it manifests:</strong></p>
                        <ul>
                            <li>Avoiding conflict even at personal cost</li>
                            <li>Prioritizing group needs over individual needs</li>
                            <li>Difficulty expressing disagreement</li>
                        </ul>
                        <p><strong>Your response:</strong> Validate their feelings while gently empowering them to prioritize self-care</p>
                        <h3>Utang na Loob (Debt of Gratitude)</h3>
                        <p>Deep sense of obligation to repay kindness.</p>
                        <p><strong>In mental health context:</strong></p>
                        <ul>
                            <li>May feel obligated to "repay" support</li>
                            <li>Difficulty setting boundaries with helpful people</li>
                        </ul>
                        <p><strong>Your response:</strong> Clarify that support is freely given with no strings attached</p>
                        <h3>Family-Centered Healing</h3>
                        <p>The family is the primary source of support and decision-making.</p>
                        <p><strong>Your response:</strong></p>
                        <ul>
                            <li>In non-crisis situations, explore how family can be safely included</li>
                            <li>Respect family input while maintaining client autonomy</li>
                            <li>Understand family dynamics before making recommendations</li>
                        </ul>
                        <h3>Bahala Na (Fatalistic Acceptance)</h3>
                        <p>"Leave it to fate" or "God will provide"</p>
                        <p><strong>Your response:</strong></p>
                        <ul>
                            <li>Respect religious/spiritual beliefs</li>
                            <li>Balance acceptance with empowerment</li>
                            <li>Collaborate with faith leaders when appropriate</li>
                        </ul>
                    `
                },
                {
                    title: '6.3 Inclusive Practice',
                    content: `
                        <h2>Inclusive Practice</h2>
                        <p>Always adapt your language and approach to be inclusive of all groups.</p>
                        <h3>LGBTQIA+ Individuals</h3>
                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li>Ask about and use preferred pronouns</li>
                            <li>Don't assume gender identity or sexual orientation</li>
                            <li>Use inclusive language ("partner" instead of "boyfriend/girlfriend")</li>
                            <li>Understand unique mental health challenges (minority stress, discrimination)</li>
                            <li>Know LGBTQIA+-affirming resources</li>
                        </ul>
                        <h3>Persons With Disabilities (PWDs)</h3>
                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li>Ensure physical accessibility of services</li>
                            <li>Ask about accommodations needed</li>
                            <li>Don't make assumptions about capabilities</li>
                            <li>Use person-first language: "person with a disability"</li>
                            <li>Provide materials in accessible formats (large print, braille, audio)</li>
                        </ul>
                        <h3>Indigenous Communities</h3>
                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li>Respect traditional healing practices</li>
                            <li>Involve community elders when appropriate</li>
                            <li>Understand historical trauma and colonial impact</li>
                            <li>Learn about specific cultural protocols</li>
                            <li>Collaborate with indigenous healers</li>
                        </ul>
                        <h3>Muslim Communities</h3>
                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li>Respect prayer times and Ramadan fasting</li>
                            <li>Understand gender-related considerations</li>
                            <li>Be aware of Islamic perspectives on mental health</li>
                            <li>Consider gender matching for support sessions</li>
                            <li>Respect dietary restrictions in any group settings</li>
                        </ul>
                        <h3>Elderly Individuals</h3>
                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li>Allow extra time for communication</li>
                            <li>Respect intergenerational values</li>
                            <li>Address physical health considerations</li>
                            <li>Honor their life experience and wisdom</li>
                        </ul>
                        <h3>General Principles for Inclusive Practice</h3>
                        <ol>
                            <li><strong>Ask, don't assume</strong></li>
                            <li><strong>Listen to lived experience</strong></li>
                            <li><strong>Adapt your approach</strong></li>
                            <li><strong>Challenge your own biases</strong></li>
                            <li><strong>Create safe spaces for all</strong></li>
                        </ol>
                    `
                }
            ]
        },
        {
            id: 'module7',
            title: 'Module 7: Self-Care and Resilience',
            duration: '3 hours',
            lessons: [
                {
                    title: '7.1 Paraprofessional Self-Care',
                    content: `
                        <h2>Paraprofessional Self-Care</h2>
                        <!-- Module 7: Self Care -->
                        <section id="module-7" style="padding:40px; background-color:#ffffff;">
                          <h2>Video on Self Care</h2>
                          <!-- Embed Module 7 Video -->
                          <div style="text-align:center; margin:30px 0;">
                            <iframe width="901" height="507" src="https://www.youtube.com/embed/bMh8MSV9qLU" title="Self Care" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                          </div>
                        </section>
                        <h3>Understanding Compassion Fatigue</h3>
                        <p><strong>Compassion Fatigue</strong> is the emotional and physical exhaustion experienced when repeatedly helping others in distress. It impairs your ability to provide safe and ethical support (Non-maleficence).</p>
                        <h4>Signs of Compassion Fatigue</h4>
                        <ul>
                            <li><strong>Emotional:</strong> Numbness, irritability, anxiety, depression</li>
                            <li><strong>Physical:</strong> Fatigue, headaches, sleep problems</li>
                            <li><strong>Behavioral:</strong> Avoidance, isolation, substance use</li>
                            <li><strong>Cognitive:</strong> Difficulty concentrating, cynicism, reduced empathy</li>
                        </ul>
                        <h4>Compassion Fatigue vs. Burnout</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Compassion Fatigue</th>
                                    <th>Burnout</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Sudden onset</td><td>Gradual onset</td></tr>
                                <tr><td>From absorbing others' trauma</td><td>From workplace stress</td></tr>
                                <tr><td>Can recover relatively quickly</td><td>Longer recovery period</td></tr>
                            </tbody>
                        </table>
                        <h3>Self-Care Dimensions</h3>
                        <p>Develop sustainable habits across four domains:</p>
                        <h4>1. Physical Self-Care</h4>
                        <ul>
                            <li>Regular exercise (even 20 minutes daily)</li>
                            <li>Adequate sleep (7-9 hours)</li>
                            <li>Balanced nutrition</li>
                            <li>Regular health check-ups</li>
                        </ul>
                        <h4>2. Emotional Self-Care</h4>
                        <ul>
                            <li>Journaling</li>
                            <li>Therapy or counseling</li>
                            <li>Emotional processing</li>
                            <li>Setting boundaries</li>
                        </ul>
                        <h4>3. Social Self-Care</h4>
                        <ul>
                            <li>Maintaining meaningful relationships</li>
                            <li>Peer support groups</li>
                            <li>Work-life separation</li>
                            <li>Saying no when needed</li>
                        </ul>
                        <h4>4. Spiritual Self-Care</h4>
                        <ul>
                            <li>Meaning-making activities</li>
                            <li>Values alignment</li>
                            <li>Meditation or prayer</li>
                            <li>Connection to something larger</li>
                        </ul>
                        <h3>The Importance of Supervision</h3>
                        <p>Participate actively in peer supervision circles to:</p>
                        <ul>
                            <li>Process challenging cases</li>
                            <li>Maintain boundaries</li>
                            <li>Obtain ethical guidance</li>
                            <li>Receive support and validation</li>
                            <li>Continue learning</li>
                        </ul>
                    `
                },
                {
                    title: '7.2 Cognitio+ Digital Resilience Tools',
                    content: `
                        <h2>Cognitio+ Digital Resilience Tools</h2>
                        <p>Utilize these tools for ongoing self-monitoring and support:</p>
                        <h3>1. Well-Be</h3>
                        <p>Assess stress levels using heart rate variability (HRV) and other physiological indicators to understand your body's stress response.</p>
                        <p><strong>How to use it:</strong></p>
                        <ul>
                            <li>Check in daily to track stress patterns</li>
                            <li>Identify triggers that increase stress</li>
                            <li>Monitor recovery after stressful events</li>
                        </ul>
                        <p><a href="https://cognitioplus.aiwaapp.live/well-be/" target="_blank" class="btn btn-primary" style="display: inline-block; margin: 10px 0;">Access Well-Be →</a></p>
                        <h3>2. Smart Emotion Tracker</h3>
                        <p>Log and analyze your emotional experiences to recognize patterns and triggers over time.</p>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li>Identify emotional patterns</li>
                            <li>Recognize warning signs early</li>
                            <li>Track effectiveness of coping strategies</li>
                        </ul>
                        <p><a href="https://cognitioplus.aiwaapp.live/smart-emotion-tracker/" target="_blank" class="btn btn-primary" style="display: inline-block; margin: 10px 0;">Access Smart Emotion Tracker →</a></p>
                        <h3>3. Habit Design Studio</h3>
                        <p>A resource for designing and sustaining positive self-care habits aligned with your personal well-being goals.</p>
                        <p><strong>Use it to:</strong></p>
                        <ul>
                            <li>Build new healthy habits</li>
                            <li>Track habit consistency</li>
                            <li>Break unhelpful patterns</li>
                        </ul>
                        <p><a href="https://cognitioplus.aiwaapp.live/habit-design-studio" target="_blank" class="btn btn-primary" style="display: inline-block; margin: 10px 0;">Access Habit Design Studio →</a></p>
                        <h3>4. Oasis</h3>
                        <p>Provides resources and guided exercises for mindfulness, grounding, and instant relaxation to promote calm.</p>
                        <p><strong>Perfect for:</strong></p>
                        <ul>
                            <li>Quick stress relief between sessions</li>
                            <li>Guided breathing exercises</li>
                            <li>Mindfulness practices</li>
                        </ul>
                        <p><a href="https://cognitioplus.aiwaapp.live/oasis" target="_blank" class="btn btn-primary" style="display: inline-block; margin: 10px 0;">Access Oasis →</a></p>
                        <h3>5. Resilience Navigator</h3>
                        <p>A tool to help you identify and strengthen your personal resources for coping with adversity and building long-term resilience.</p>
                        <p><strong>Features:</strong></p>
                        <ul>
                            <li>Assess your resilience factors</li>
                            <li>Identify areas for growth</li>
                            <li>Build long-term coping capacity</li>
                        </ul>
                        <p><a href="https://cognitioplus.aiwaapp.live/resilience-navigator/" target="_blank" class="btn btn-primary" style="display: inline-block; margin: 10px 0;">Access Resilience Navigator →</a></p>
                        <h3>Creating Your Personal Self-Care Plan</h3>
                        <ol>
                            <li>Assess your current self-care across all four dimensions</li>
                            <li>Identify gaps and areas needing attention</li>
                            <li>Set specific, achievable goals</li>
                            <li>Use Cognitio+ tools to track progress</li>
                            <li>Review and adjust monthly</li>
                        </ol>
                    `
                }
            ]
        },
        {
            id: 'module8',
            title: 'Module 8: Practicum Preparation and Professional Development',
            duration: '4 hours',
            lessons: [
                {
                    title: '8.1 The Practicum Component',
                    content: `
                        <h2>The Practicum Component</h2>
                        <p>The 16-hour practicum requires <strong>10 guided support sessions</strong> under the supervision of a licensed mentor.</p>
                        <h3>Practicum Objectives</h3>
                        <p>This phase is designed to:</p>
                        <ul>
                            <li>Translate theoretical knowledge into safe practice</li>
                            <li>Refine communication and boundary skills</li>
                            <li>Apply the <em>Look-Listen-Link</em> model in real or simulated scenarios</li>
                            <li>Document cases ethically and professionally</li>
                            <li>Receive feedback and supervision</li>
                        </ul>
                        <h3>What to Expect</h3>
                        <h4>Session Types</h4>
                        <ul>
                            <li><strong>Role-plays:</strong> Practice with simulated clients</li>
                            <li><strong>Observed sessions:</strong> Real sessions with mentor observation</li>
                            <li><strong>Case presentations:</strong> Present and discuss cases</li>
                            <li><strong>Reflection sessions:</strong> Process experiences with mentor</li>
                        </ul>
                        <h4>Mentor Evaluation Criteria</h4>
                        <ul>
                            <li>Application of PFA principles (Look, Listen, Link)</li>
                            <li>Communication skills (empathy, active listening)</li>
                            <li>Ethical practice and boundary maintenance</li>
                            <li>Appropriate referral and documentation</li>
                            <li>Self-awareness and reflection</li>
                        </ul>
                        <h3>Preparing for Your Practicum</h3>
                        <ol>
                            <li><strong>Review all modules</strong> before starting</li>
                            <li><strong>Practice skills</strong> with peers or family</li>
                            <li><strong>Prepare questions</strong> for your mentor</li>
                            <li><strong>Set learning goals</strong> for each session</li>
                            <li><strong>Maintain a reflection journal</strong></li>
                        </ol>
                    `
                },
                {
                    title: '8.2 Documentation Best Practices',
                    content: `
                        <h2>Documentation Best Practices</h2>
                        <p>Documentation should be factual, professional, and secured under RA 10173.</p>
                        <h3>Key Principles</h3>
                        <ul>
                            <li><strong>Factual only:</strong> Record only what was said and done, not assumptions or diagnoses</li>
                            <li><strong>Objective language:</strong> Avoid judgmental terms</li>
                            <li><strong>Specific details:</strong> Include dates, times, and concrete information</li>
                            <li><strong>Rationale:</strong> Explain why you made certain decisions</li>
                            <li><strong>Secure storage:</strong> Password-protected and encrypted</li>
                        </ul>
                        <h3>What to Document</h3>
                        <ul>
                            <li>Date, time, and duration of session</li>
                            <li>Presenting concerns</li>
                            <li>Observations (what you saw and heard)</li>
                            <li>Interventions provided (e.g., breathing exercises)</li>
                            <li>Referrals made (include contact details)</li>
                            <li>Safety concerns identified</li>
                            <li>Follow-up plans</li>
                        </ul>
                        <h3>Documentation Template</h3>
                        <blockquote>
                        <strong>Date:</strong> December 4, 2024<br>
                        <strong>Time:</strong> 2:00 PM - 2:45 PM<br>
                        <strong>Session Type:</strong> Online support<br>
                        <strong>Presenting Concerns:</strong> Client reported chronic worry about finances and difficulty sleeping for the past 3 weeks<br>
                        <strong>Observations:</strong> Client appeared tired, spoke softly, but maintained good eye contact<br>
                        <strong>Interventions:</strong> Discussed 5-4-3-2-1 grounding technique; practiced diaphragmatic breathing<br>
                        <strong>Referral:</strong> Referred to LGU MHPSS Desk (Contact: Maria Santos, 0912-345-6789) for ongoing support<br>
                        <strong>Safety Concerns:</strong> None identified<br>
                        <strong>Follow-up:</strong> Client agreed to contact referral within one week; I will check in via message in 3 days
                        </blockquote>
                        <h3>What NOT to Document</h3>
                        <ul>
                            <li>❌ Diagnoses ("Client has depression")</li>
                            <li>❌ Judgments ("Client is lazy")</li>
                            <li>❌ Assumptions ("Client probably...")</li>
                            <li>❌ Irrelevant personal details</li>
                            <li>❌ Information without consent</li>
                        </ul>
                        <h3>Data Security Checklist</h3>
                        <ul>
                            <li>✓ Use password-protected files</li>
                            <li>✓ Encrypt sensitive documents</li>
                            <li>✓ Store in secure location</li>
                            <li>✓ Use anonymized identifiers when possible</li>
                            <li>✓ Delete or archive per data retention policy</li>
                            <li>✓ Never discuss cases in public spaces</li>
                        </ul>
                    `
                },
                {
                    title: '8.3 Post-Certification Roadmap',
                    content: `
                        <h2>Post-Certification Roadmap</h2>
                        <p>Your professional journey continues after certification. Here's how to grow and sustain your practice:</p>
                        <h3>Immediate Next Steps</h3>
                        <ol>
                            <li><strong>Download your certificate</strong> and keep your verification code safe</li>
                            <li><strong>Join a paraprofessional network</strong> for ongoing support</li>
                            <li><strong>Connect with your mentor</strong> for post-certification supervision</li>
                            <li><strong>Identify your practice setting</strong> (online, community, both)</li>
                        </ol>
                        <h3>Continuing Professional Development</h3>
                        <h4>1. Join a Paraprofessional Network</h4>
                        <ul>
                            <li>Connect with fellow paraprofessionals</li>
                            <li>Share experiences and resources</li>
                            <li>Stay updated on best practices</li>
                        </ul>
                        <h4>2. Volunteer Opportunities</h4>
                        <ul>
                            <li>Barangay MHPSS desks</li>
                            <li>Community health centers</li>
                            <li>Crisis hotlines</li>
                            <li>Online peer support platforms</li>
                        </ul>
                        <h4>3. Ongoing Supervision</h4>
                        <ul>
                            <li>Participate in quarterly peer supervision circles</li>
                            <li>Seek individual supervision for complex cases</li>
                            <li>Engage in case consultation</li>
                        </ul>
                        <h4>4. Additional Training</h4>
                        <ul>
                            <li>Specialized workshops (trauma, substance use, youth)</li>
                            <li>Advanced communication skills</li>
                            <li>Cultural competency training</li>
                            <li>Digital mental health tools</li>
                        </ul>
                        <h3>Career Pathways</h3>
                        <p>As a certified paraprofessional, you can:</p>
                        <ul>
                            <li>Provide peer support in community settings</li>
                            <li>Work with NGOs and mental health organizations</li>
                            <li>Support online mental health platforms</li>
                            <li>Serve as a bridge between communities and professionals</li>
                            <li>Train other paraprofessionals</li>
                            <li>Advocate for mental health policy</li>
                        </ul>
                        <h3>Setting Up Your Practice</h3>
                        <ol>
                            <li><strong>Define your scope:</strong> What populations will you serve?</li>
                            <li><strong>Establish boundaries:</strong> Working hours, availability, limits</li>
                            <li><strong>Build your network:</strong> Referral resources and supervisors</li>
                            <li><strong>Create systems:</strong> Documentation, scheduling, self-care</li>
                            <li><strong>Stay connected:</strong> Join professional communities</li>
                        </ol>
                    `
                }
            ]
        },
        {
            id: 'module9',
            title: 'Module 9: Certification and Renewal',
            duration: '2 hours',
            lessons: [
                {
                    title: '9.1 Final Assessment',
                    content: `
                        <h2>Final Assessment</h2>
                        <p>The final certification requires an overall passing grade of <strong>75%</strong>, incorporating all knowledge and practical components.</p>
                        <h3>Assessment Components</h3>
              {
    id: 'module9',
    title: 'Module 9: Certification and Renewal',
    duration: '2 hours',
    lessons: [
        {
            title: 'Final Assessment / Post-Test (15 Items)',
            content: `
                <h2>Final Assessment / Post-Test</h2>
                <p><strong>Instructions:</strong> Select the best answer for each question.</p>
                <ol>
                    <li><strong>Which principle of PFA is demonstrated when you connect a disaster survivor to food, water, and temporary shelter?</strong><br>
                        a) Promote Calmness<br>
                        b) Promote Safety<br>
                        c) Promote Hope<br>
                        d) Promote Self-Efficacy
                    </li>
                    <li><strong>The highest level of listening, Generative Listening, requires the listener to suspend:</strong><br>
                        a) Their hearing.<br>
                        b) Their judgment and cynicism.<br>
                        c) Their notes.<br>
                        d) Their compassion.
                    </li>
                    <li><strong>A paraprofessional is NOT authorized to:</strong><br>
                        a) Teach a client the 5-4-3-2-1 Grounding technique.<br>
                        b) Conduct formal, long-term psychotherapy.<br>
                        c) Refer a client to a psychiatrist.<br>
                        d) Validate a client's feelings of sadness.
                    </li>
                    <li><strong>If a client refuses to provide consent for their data to be stored digitally, what must the paraprofessional do?</strong><br>
                        a) Insist on storage for liability.<br>
                        b) Respect their autonomy and only take analog (paper) notes, ensuring secure physical storage.<br>
                        c) Refuse to provide support.<br>
                        d) Store the data secretly.
                    </li>
                    <li><strong>Which action is considered a boundary violation for a paraprofessional?</strong><br>
                        a) Documenting a crisis intervention.<br>
                        b) Accepting a large financial gift from a client.<br>
                        c) Working in a supervised setting.<br>
                        d) Referring a client to a licensed professional.
                    </li>
                    <li><strong>The Non-maleficence principle is most directly applied by:</strong><br>
                        a) Staying within the non-clinical scope of practice.<br>
                        b) Giving personalized financial advice.<br>
                        c) Discussing the client's case on social media.<br>
                        d) Promising the client guaranteed recovery.
                    </li>
                    <li><strong>The NCMH Crisis Hotline (1553) is considered which level of the Philippine mental health care system?</strong><br>
                        a) Level 1 (Primary)<br>
                        b) Level 2 (Specialized)<br>
                        c) Level 3 (Tertiary/Emergency)<br>
                        d) Level 0 (Informal)
                    </li>
                    <li><strong>Which communication technique is essential for confirming you understood the client's emotional state?</strong><br>
                        a) Giving advice.<br>
                        b) Asking complex rhetorical questions.<br>
                        c) Reflecting and Labeling Emotions.<br>
                        d) Asking them about their job history.
                    </li>
                    <li><strong>Compassion Fatigue is best managed through:</strong><br>
                        a) Ignoring its symptoms.<br>
                        b) Professional self-care, peer supervision, and active rest.<br>
                        c) Working longer hours without breaks.<br>
                        d) Increasing workload to distract from stress.
                    </li>
                    <li><strong>The Seamless Care Guidebook is used primarily to:</strong><br>
                        a) Teach meditation.<br>
                        b) Ensure safe, documented, and effective transitions of care during a referral.<br>
                        c) Help paraprofessionals find a job.<br>
                        d) Market the course to others.
                    </li>
                    <li><strong>Which Filipino cultural value often acts as a barrier to seeking formal mental health support?</strong><br>
                        a) Bayanihan (communal unity)<br>
                        b) Pakikipagkapwa-tao (shared identity)<br>
                        c) Hiya (shame or embarrassment)<br>
                        d) Utang na Loob (debt of gratitude)
                    </li>
                    <li><strong>Why must a paraprofessional secure their client notes with a password?</strong><br>
                        a) To hide them from the supervisor.<br>
                        b) To comply with the Data Privacy Act (RA 10173).<br>
                        c) To save paper.<br>
                        d) To make the notes look professional.
                    </li>
                    <li><strong>When providing support, the best question type to encourage a client to share detailed feelings and experiences is:</strong><br>
                        a) Closed-ended questions (Yes/No).<br>
                        b) Leading questions.<br>
                        c) Open-ended questions (How, What, Tell me more).<br>
                        d) Rhetorical questions.
                    </li>
                    <li><strong>If a client is experiencing high anxiety, the goal of teaching Diaphragmatic Breathing is to:</strong><br>
                        a) Increase their heart rate.<br>
                        b) Activate the body’s calming parasympathetic nervous system.<br>
                        c) Help them run away.<br>
                        d) Solve their long-term problems.
                    </li>
                    <li><strong>If a client has already received help from an LGU counselor (Level 1) but their symptoms persist, the most appropriate LINK action is a referral to:</strong><br>
                        a) A peer support group.<br>
                        b) A licensed psychologist or psychiatrist (Level 2).<br>
                        c) A self-help book.<br>
                        d) Another BHW.
                    </li>
                </ol>
                <p style="margin-top: 20px; font-style: italic; color: var(--text-light);">
                    This post-test helps you evaluate your learning. A passing score of 75% or higher is required for certification when combined with your practicum and reflections.
                </p>
            `
        },
    
                        <table>
                            <thead>
                                <tr>
                                    <th>Assessment Type</th>
                                    <th>Description</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Knowledge Quizzes</strong></td><td>Online quizzes for Modules 0-8</td><td>20%</td></tr>
                                <tr><td><strong>Skills Assessment</strong></td><td>Role-plays and simulations</td><td>30%</td></tr>
                                <tr><td><strong>Practicum</strong></td><td>Mentor evaluation of 10 sessions</td><td>35%</td></tr>
                                <tr><td><strong>Reflection</strong></td><td>Journal and peer discussion</td><td>15%</td></tr>
                            </tbody>
                        </table>
                        <h3>Passing Requirements</h3>
                        <ul>
                            <li>Overall grade of <strong>75% or higher</strong></li>
                            <li>Completion of all 9 modules</li>
                            <li>Completion of 10 supervised practicum sessions</li>
                            <li>Mentor endorsement</li>
                            <li>Submission of reflection journal</li>
                        </ul>
                        <h3>Upon Successful Completion</h3>
                        <p>You will receive:</p>
                        <ul>
                            <li>Digital Certificate of Completion</li>
                            <li>Unique verification code</li>
                            <li>Recognition as a Certified Mental Health and Well-Being Paraprofessional</li>
                            <li>Access to alumni network</li>
                        </ul>
                    `
                },
                {
                    title: '9.2 Renewal Requirements',
                    content: `
                        <h2>Certification Renewal</h2>
                        <p>The certification is valid for <strong>two years</strong>. Maintaining your credential requires ongoing commitment to professional standards.</p>
                        <h3>Renewal Requirements</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Requirement</th>
                                    <th>Details</th>
                                    <th>Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Refresher Course</strong></td><td>Minimum 6-hour DOH-recognized refresher course</td><td>Every 2 years</td></tr>
                                <tr><td><strong>Case Reflections</strong></td><td>Submission of 3 new, supervised case reflections</td><td>Every 2 years</td></tr>
                                <tr><td><strong>Mentor Endorsement</strong></td><td>Confirmation of continued ethical practice</td><td>Every 2 years</td></tr>
                                <tr><td><strong>Continuing Education</strong></td><td>12 hours of approved CPD activities</td><td>Every 2 years</td></tr>
                            </tbody>
                        </table>
                        <h3>Approved CPD Activities</h3>
                        <ul>
                            <li>Workshops and seminars on mental health</li>
                            <li>Participation in supervision groups</li>
                            <li>Conference attendance</li>
                            <li>Advanced training courses</li>
                            <li>Case consultation sessions</li>
                            <li>Mental health advocacy activities</li>
                        </ul>
                        <h3>Renewal Process</h3>
                        <ol>
                            <li><strong>6 months before expiry:</strong> Receive renewal reminder</li>
                            <li><strong>3 months before expiry:</strong> Submit renewal application</li>
                            <li><strong>Include:</strong> Proof of CPD, case reflections, mentor endorsement</li>
                            <li><strong>Review:</strong> Application reviewed by certification board</li>
                            <li><strong>Approval:</strong> New certificate issued for 2 years</li>
                        </ol>
                        <h3>Maintaining Your Certification</h3>
                        <p><strong>Tips for staying current:</strong></p>
                        <ul>
                            <li>Keep a CPD log throughout the 2-year period</li>
                            <li>Maintain regular supervision</li>
                            <li>Stay connected to professional networks</li>
                            <li>Document your practice consistently</li>
                            <li>Engage in ongoing self-reflection</li>
                        </ul>
                    `
                },
                {
                    title: '9.3 Course Completion & Next Steps',
                    content: `
                        <h2>Congratulations on Completing the Course!</h2>
                        <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, rgba(180, 37, 170, 0.1) 0%, rgba(200, 14, 201, 0.1) 100%); border-radius: 12px; margin: 30px 0;">
                            <p style="font-size: 1.4rem; font-style: italic; color: var(--primary); margin-bottom: 20px;">
                                <em>"You came to learn how to support others.<br>You leave knowing you are already part of the healing."</em>
                            </p>
                        </div>
                        <h3>What You've Accomplished</h3>
                        <ul>
                            <li>✓ Completed 40 hours of comprehensive training</li>
                            <li>✓ Mastered Psychological First Aid principles (Look, Listen, Link)</li>
                            <li>✓ Learned ethical and legal foundations (RA 11036, RA 10173)</li>
                            <li>✓ Developed core communication skills</li>
                            <li>✓ Prepared for crisis intervention and safe referral</li>
                            <li>✓ Embraced cultural sensitivity and inclusive practice</li>
                            <li>✓ Committed to self-care and resilience</li>
                            <li>✓ Ready for practicum and professional practice</li>
                        </ul>
                        <h3>Your Impact</h3>
                        <p>As a certified Mental Health and Well-Being Paraprofessional, you are now equipped to:</p>
                        <ul>
                            <li><strong>Bridge the treatment gap</strong> in Philippine mental health services</li>
                            <li><strong>Provide immediate support</strong> to those in distress</li>
                            <li><strong>Combat stigma</strong> through compassionate, person-first practice</li>
                            <li><strong>Connect people</strong> to appropriate professional care</li>
                            <li><strong>Promote recovery</strong> and hope in your community</li>
                        </ul>
                        <h3>Stay Connected</h3>
                        <p>Join our community of certified paraprofessionals:</p>
                        <ul>
                            <li>Access to alumni network</li>
                            <li>Ongoing professional development opportunities</li>
                            <li>Quarterly supervision circles</li>
                            <li>Updates on mental health policies and practices</li>
                        </ul>
                        <h3>Resources for Your Practice</h3>
                        <ul>
                            <li><strong>Seamless Care Guidebook:</strong> <a href="https://cognitioplus.aiwaapp.live/seamless-care" target="_blank">cognitioplus.aiwaapp.live/seamless-care</a></li>
                            <li><strong>Digital Resilience Tools:</strong> Well-Be, Smart Emotion Tracker, Habit Design Studio, Oasis, Resilience Navigator</li>
                            <li><strong>Crisis Hotlines:</strong> NCMH (1553), Hopeline PH (804-HOPE / 0917-558-HOPE)</li>
                        </ul>
                        <div style="text-align: center; margin-top: 50px; padding: 30px; background: var(--bg-light); border-radius: 12px;">
                            <h3 style="color: var(--primary); margin-bottom: 15px;">Thank You for Your Commitment</h3>
                            <p>Your dedication to mental health and well-being makes a difference in people's lives.</p>
                            <p><strong>You are part of the solution.</strong></p>
                        </div>
                    `
                }
            ]
        }
    ]
};

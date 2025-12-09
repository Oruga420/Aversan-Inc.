'use client';

import WebGLEffect from '../components/WebGLEffect';

const resume = {
  name: 'Alejandro De La Mora',
  role: 'AI Solutions Architect and Governance Specialist',
  summary:
    'AI Solutions Architect and Governance Specialist with extensive experience implementing secure, auditable GenAI workflows in regulated environments. Proven track record of bridging the gap between engineering innovation and compliance standards, achieving 97% AI adoption and saving over 20,000 man-hours annually. Expert in cloud infrastructure (GCP, AWS, Vercel), open-source component evaluation, and leading technical training for diverse engineering and business communities.',
  contact: {
    phone: '+1 437 243 3693',
    email: 'alex@seshwithfriends.org',
    linkedin: 'https://www.linkedin.com/in/amorac/',
    website: 'https://www.eloruga.com/about/index.html',
    github: 'https://github.com/Oruga420',
  },
  expertise: [
    'AI Governance',
    'Compliance Frameworks',
    'Open Source Licensing',
    'Agentic Workflows',
    'Google Cloud Platform (GCP)',
    'AWS',
    'Vercel',
    'Next.js',
    'Salesforce (Administrator, Developer, AI Associate)',
    'Zapier',
    'English (Native/Bilingual)',
    'Spanish (Full Professional)',
  ],
  experience: [
    {
      title: 'AI Solutions Architect',
      company: 'Assent',
      location: 'Canada',
      dates: 'Feb 2025 - Present',
      bullets: [
        'Architected auditable GenAI systems within a regulated compliance platform, ensuring all open-source and AI components met strict security and governance standards.',
        'Established governance frameworks, documentation, and safety protocols to allow admins and developers to deploy AI tools without losing control of security, cost, or quality.',
        'Drove internal AI adoption from 47% to 97%, resulting in over $1M in savings and 20,000 man-hours reclaimed annually through Agentic Workflows and custom MCP tools.',
        'Designed and deployed internal tools using GCP, Vercel, and AWS to replace repetitive operational tasks.',
      ],
    },
    {
      title: 'AI Solutions Architect',
      company: 'Sesh f", Ai Solutions',
      location: 'Toronto, Ontario',
      dates: 'Nov 2021 - Present',
      bullets: [
        'Designed the architecture for over 120 GenAI applications across 30+ clients, evaluating open-source components and ensuring IP safety.',
        'Built and deployed more than 90 chatbots to solve day-to-day operational problems using secure RAG implementations.',
        'Lead technical training and guidance for a community of 100+ members, translating complex AI concepts into practical, compliant workflows.',
        'Delivered webinars and educational sessions for organizations like "Latinas in Tech" and "Somos Latinos in Tech Ottawa."',
      ],
    },
    {
      title: 'Salesforce Consultant',
      company: 'Online Business Systems',
      location: 'Toronto, Ontario',
      dates: 'June 2024 - Nov 2024',
      bullets: [
        'Configured Agentforce AI assistants, defining safe data access protocols and wiring actions to fit existing governance workflows.',
        'Developed reusable patterns for Salesforce and Marketing Cloud Account Engagement to streamline client onboarding while maintaining compliance.',
      ],
    },
    {
      title: 'Salesforce Manager',
      company: 'Globalization Partners',
      location: 'Ontario, Canada',
      dates: 'Nov 2018 - Nov 2023',
      bullets: [
        'Managed a large Salesforce org (1,000+ licenses) ensuring data security and compliance across international regions.',
        'Pioneered early GenAI initiatives (GIA chatbot) and AI-assisted development, aligning "vibe coding" patterns with corporate governance and compliance requirements.',
        'Oversaw integrations and automation strategies, maintaining platform stability during rapid global expansion.',
      ],
    },
    {
      title: 'Project Manager',
      company: 'Amstar DMC',
      location: 'Mexico',
      dates: 'May 2016 - Nov 2018',
      bullets: [
        'Managed complex web and integration projects with budgets up to $700,000 USD, ensuring alignment between technical constraints and business goals.',
        'Led teams of up to 18 people, applying quality assurance and risk management practices to protect IP and project scope.',
      ],
    },
  ],
  education: [
    {
      degree: 'Ingenieria en Sistemas (Systems Engineering)',
      school: 'Universidad Marista de MAcrida',
      dates: '2004 - 2007',
    },
  ],
};

export default function Page() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main>
      <div className="container">
        <div className="paper">
          <section className="hero">
            <WebGLEffect />
            <div className="doodle small one" aria-hidden="true" />
            <div className="doodle medium two" aria-hidden="true" />
            <div className="hero-content">
              <div className="title-row">
                <h1 className="name">{resume.name}</h1>
                <button className="download-button" onClick={handlePrint} type="button">
                  Download PDF
                </button>
              </div>
              <span className="role">{resume.role}</span>
              <div className="intro-grid">
                <div className="summary">
                  <p>{resume.summary}</p>
                </div>
                <div className="contact-card">
                  <p className="contact-title">Contact</p>
                  <span className="contact-item">{resume.contact.phone}</span>
                  <a className="contact-item" href={`mailto:${resume.contact.email}`}>
                    {resume.contact.email}
                  </a>
                  <a
                    className="contact-item"
                    href={resume.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="contact-item"
                    href={resume.contact.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                  <a
                    className="contact-item"
                    href={resume.contact.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Areas of Expertise</h2>
            <div className="tags">
              {resume.expertise.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-list">
              {resume.experience.map((job) => (
                <div className="experience-card" key={`${job.title}-${job.company}`}>
                  <div className="experience-header">
                    <h3 className="experience-title">
                      {job.title} · {job.company}
                    </h3>
                    <span className="experience-meta">{job.dates}</span>
                  </div>
                  <div className="experience-meta">{job.location}</div>
                  <ul className="bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              {resume.education.map((edu) => (
                <div className="edu-card" key={edu.degree}>
                  <p className="edu-title">{edu.degree}</p>
                  <p className="edu-meta">
                    {edu.school} · {edu.dates}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

import { useState } from 'react';
import './App.css';
import { Mail, Phone, MapPin, Linkedin, Download, FileText, Calendar, Award, Briefcase, GraduationCap, Code, ChevronDown, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const experiences = [
    {
      title: 'Student Assistant',
      company: 'Bauhaus University Weimar, Germany',
      period: 'Jan 2025 – Apr 2025',
      responsibilities: [
        'Verification & validation of mechanical and composite components using FEA',
        'Support with technical testing of mechanical components',
        'Documentation of test results including traceability & data consistency'
      ]
    },
    {
      title: 'Design Engineer',
      company: 'Cyient Ltd., Hyderabad, India',
      period: 'May 2021 – Mar 2023',
      responsibilities: [
        'Independent handling and coordination of non-conformances in an aerospace environment, taking into account technical drawings and GD&T requirements',
        'Creation of structured 8D reports, Root Cause analysis (5 Whys, Ishikawa) and derivation and monitoring of CAPA measures',
        'Quality assurance in the development and production process through systematic deviation assessment and corrective action tracking',
        'Participation in the preparation of internal and external audits within the framework of an ISO-based quality management system (ISO 9001 & EN 9100 environment)',
        'Coordination with internal departments and external partners to ensure quality and safety requirements',
        'Creation and evaluation of quality-relevant key performance indicators (NCR rate, lead times, corrective action status) to support data-driven decisions',
        'Application of FMEA and Lean/Six Sigma methods for error prevention and process stabilization'
      ]
    },
    {
      title: 'Chassis & Brake System Engineer - Development Team',
      company: 'CMR College of Engineering & Technology, Hyderabad, India',
      period: 'Jan 2018 – Mar 2019',
      responsibilities: [
        'Design of tubular frame chassis including load assumptions and GD&T',
        'Brake system design taking safety requirements into account',
        'Solving fitting problems during the assembly phase through design adjustments'
      ]
    }
  ];

  const projects = [
    {
      title: 'Statistical Process Control & Error Trend Analysis',
      tools: 'Microsoft Power BI | Manufacturing Quality',
      description: [
        'Development of an SPC-based quality monitoring dashboard in Power BI to monitor 7 critical quality characteristics using control charts and trend analysis',
        'Conducting defect trend analysis and identifying 3 special causes, including tool wear, setup deviation, and material deviation, through root cause analysis'
      ]
    },
    {
      title: 'SAP S/4HANA – Quality Management',
      tools: 'SAP QM',
      description: [
        'Processing quality alerts and reporting',
        'Digital tracking of CAPA measures'
      ]
    },
    {
      title: 'Design of a Rotating Test Bench',
      tools: 'SolidWorks',
      description: [
        'Parametric 3D design of disk, sample holder, and crucible',
        'Definition of constraints, fits, and connecting elements'
      ]
    }
  ];

  const skills = {
    qualityManagement: ['ISO 9001', 'QMS Documentation', 'Audit Support', 'Corrective Action Tracking', 'KPI Monitoring', 'Process Standardization'],
    methods: ['8D', '5 Whys', 'Ishikawa', 'SPC', 'Cp/Cpk', 'PDCA'],
    tools: ['MS Excel', 'Power BI', 'SAP QM', 'MS Office', 'SolidWorks'],
    production: ['Quality Projects', 'Process Deviations Analysis', 'Documentation']
  };

  const certifications = [
    { name: 'Internal Auditor (ISO 9001:2015)', issuer: 'TÜV SÜD', year: '2026' },
    { name: 'Lean Six Sigma Green Belt', issuer: 'Council for Six Sigma Certification', year: '2025' },
    { name: 'Exploring End-to-End Business Processes', issuer: 'SAP', year: '2025' }
  ];

  const documents = [
    { name: 'Work Reference', filename: 'Arbeitsreferenz.pdf', url: 'https://customer-assets.emergentagent.com/job_fd1a426a-9037-4dcf-8fd7-3627bf6e0dd3/artifacts/v05w5ve1_Arbeitsreferenz.pdf' },
    { name: 'Enrollment Certificate', filename: 'Immatrikulationsbescheinigung.pdf', url: 'https://customer-assets.emergentagent.com/job_fd1a426a-9037-4dcf-8fd7-3627bf6e0dd3/artifacts/f6u9tt0g_Immatrikulationsbescheinigung.pdf' },
    { name: 'Transcript', filename: 'Transkript.pdf', url: 'https://customer-assets.emergentagent.com/job_fd1a426a-9037-4dcf-8fd7-3627bf6e0dd3/artifacts/723mo8pj_Transkript.pdf' },
    { name: 'Certificates', filename: 'Zertifikate.pdf', url: 'https://customer-assets.emergentagent.com/job_fd1a426a-9037-4dcf-8fd7-3627bf6e0dd3/artifacts/uwyu6330_Zertifikate.pdf' },
    { name: 'Service Letter', filename: 'Service_Letter.pdf', url: 'https://customer-assets.emergentagent.com/job_fd1a426a-9037-4dcf-8fd7-3627bf6e0dd3/artifacts/3e8s2265_Service_Letter.pdf' }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">Shivakiran Nandala</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
            <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
            <button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_fd1a426a-9037-4dcf-8fd7-3627bf6e0dd3/artifacts/bgxt02vl_Photo.jpg" 
              alt="Shivakiran Nandala" 
              className="profile-image"
            />
          </div>
          <h1 className="hero-title">Shivakiran Nandala</h1>
          <h2 className="hero-subtitle">Quality Management Professional | Data Analysis Expert</h2>
          <p className="hero-description">
            Student Assistant in Non-Conformance Management | ISO 9001 | 8D | CAPA | SPC | KPI Reporting | SAP QM
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Get In Touch
            </button>
            <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); alert('Resume download functionality - Link your PDF resume here'); }}>
              <Download size={20} /> Download Resume
            </a>
          </div>
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                Results-driven Quality Management Professional with extensive experience in non-conformance management, 
                quality assurance, and data analysis. Currently pursuing a Master's in Digital Engineering (Industry 4.0) 
                at Bauhaus University Weimar while working as a Student Assistant.
              </p>
              <p className="about-description">
                Proven track record in aerospace quality management, ISO 9001 & EN 9100 compliance, and implementing 
                data-driven quality improvements using tools like SAP QM, Power BI, and statistical process control methods.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Certifications</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Major Projects</div>
                </div>
              </div>
            </div>
            <div className="about-info">
              <div className="info-card">
                <h3 className="info-title">Contact Information</h3>
                <div className="info-items">
                  <div className="info-item">
                    <Mail size={20} />
                    <a href="mailto:shivakirannandala@gmail.com">shivakirannandala@gmail.com</a>
                  </div>
                  <div className="info-item">
                    <Phone size={20} />
                    <a href="tel:+491635312765">+49 163 5312765</a>
                  </div>
                  <div className="info-item">
                    <MapPin size={20} />
                    <span>99427 Weimar, Thuringia, Germany</span>
                  </div>
                  <div className="info-item">
                    <Linkedin size={20} />
                    <a href="https://www.linkedin.com/in/n-shivakiran/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/n-shivakiran
                    </a>
                  </div>
                </div>
              </div>
              <div className="info-card">
                <h3 className="info-title">Languages</h3>
                <div className="language-items">
                  <div className="language-item">
                    <span className="language-name">German</span>
                    <span className="language-level">B2.1</span>
                  </div>
                  <div className="language-item">
                    <span className="language-name">English</span>
                    <span className="language-level">C1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-period">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <GraduationCap size={32} />
              </div>
              <h3 className="education-degree">Master of Science - Digital Engineering (Industry 4.0)</h3>
              <p className="education-school">Bauhaus University Weimar, Germany</p>
              <p className="education-status">Present</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <GraduationCap size={32} />
              </div>
              <h3 className="education-degree">Bachelor of Technology - Mechanical Engineering</h3>
              <p className="education-school">CMR College of Engineering & Technology, India</p>
              <p className="education-status">Graduated: September 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-icon">
                  <Code size={28} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tools">{project.tools}</p>
                <ul className="project-description">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Quality Management</h3>
              <div className="skill-tags">
                {skills.qualityManagement.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Methods</h3>
              <div className="skill-tags">
                {skills.methods.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Tools & Software</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Production & Projects</h3>
              <div className="skill-tags">
                {skills.production.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="certification-icon">
                  <Award size={32} />
                </div>
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-year">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="documents-section">
        <div className="container">
          <h2 className="section-title">Documents & References</h2>
          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <div className="document-icon">
                  <FileText size={32} />
                </div>
                <h3 className="document-name">{doc.name}</h3>
                <p className="document-filename">{doc.filename}</p>
                <div className="document-actions">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="btn-document-view">
                    <ExternalLink size={16} /> Preview
                  </a>
                  <a href={doc.url} download className="btn-document-download">
                    <Download size={16} /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p className="contact-description">
                I'm currently open to new opportunities in Quality Management, Data Analysis, and Engineering roles. 
                Feel free to reach out if you'd like to discuss potential collaborations or job opportunities.
              </p>
            </div>
            <div className="contact-cards">
              <a href="mailto:shivakirannandala@gmail.com" className="contact-card">
                <Mail size={32} />
                <h3>Email</h3>
                <p>shivakirannandala@gmail.com</p>
              </a>
              <a href="tel:+491635312765" className="contact-card">
                <Phone size={32} />
                <h3>Phone</h3>
                <p>+49 163 5312765</p>
              </a>
              <a href="https://www.linkedin.com/in/n-shivakiran/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <Linkedin size={32} />
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Shivakiran Nandala. All rights reserved.</p>
          <p className="footer-date">Weimar, February 17, 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
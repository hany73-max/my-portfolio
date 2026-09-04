import React, { useState } from 'react';

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Exoplanet Transit Classifier ('Sky Spy')",
      tag: "Deep Learning & Astrophysics",
      problem: "Identifying weak planetary transit dips in noisy light-curve time-series sets.",
      solution: "Engineered automated feature extraction and custom signal processing for high-precision celestial classification.",
      metrics: "NASA Space Apps 3rd Place | High-availability cloud deployment",
      tech: ["Python", "PyTorch", "Signal Processing", "Docker"]
    },
    {
      id: 2,
      title: "The ML Blueprint",
      tag: "First-Principles Machine Learning",
      problem: "Black-box framework failures, opacity in loss functions, and unexplainable data drift.",
      solution: "Derived and vectorized fundamental ML algorithms from scratch using mathematical foundations.",
      metrics: "Zero external ML dependencies | 100% auditable NumPy implementations",
      tech: ["NumPy", "Linear Algebra", "Vectorization", "Optimization"]
    },
    {
      id: 3,
      title: "Sensor Fusion & State Estimation Pipeline",
      tag: "Guidance, Navigation & Control",
      problem: "Noisy IMU and GPS telemetry causing sensor drift in physical environments.",
      solution: "Engineered real-time Kalman filtering and FFT signal processing for smooth state-vector updates.",
      metrics: ">40% variance reduction | Sub-millisecond state estimation latency",
      tech: ["C++", "Python", "Kalman Filtering", "FFT"]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.brand}>Hany Ehab</div>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#contact" style={styles.ctaSmall}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <span style={styles.badge}>Algorithmic Rigor • Production Ready</span>
        <h1 style={styles.heroTitle}>
          Building High-Precision Machine Learning & Data Pipelines from First Principles.
        </h1>
        <p style={styles.heroSubtitle}>
          I help fintech teams, deep-tech startups, and engineering groups turn complex raw signals 
          into dependable predictive systems through mathematical precision and robust architecture.
        </p>
        <div style={styles.heroActions}>
          <a href="#projects" style={styles.btnPrimary}>View Case Studies</a>
          <a href="#contact" style={styles.btnSecondary}>Book Technical Call</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>Engineered for Reliability</h2>
        <div style={styles.aboutCard}>
          <p style={styles.aboutText}>
            Rather than relying on opaque, off-the-shelf models, I approach predictive engineering 
            with deep mathematical foundations derived from navigation and spatial systems. 
            From end-to-end classification systems to real-time telemetry noise filtering, my focus 
            is on eliminating data bottlenecks, verifying edge cases, and delivering auditable model performance.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.grid}>
          {projects.map((proj) => (
            <div key={proj.id} style={styles.projectCard}>
              <div style={styles.projectTag}>{proj.tag}</div>
              <h3 style={styles.projectTitle}>{proj.title}</h3>
              <p style={styles.projectDetail}><strong>Problem:</strong> {proj.problem}</p>
              <p style={styles.projectDetail}><strong>Solution:</strong> {proj.solution}</p>
              <div style={styles.metricBox}>{proj.metrics}</div>
              <div style={styles.techWrapper}>
                {proj.tech.map((t, idx) => (
                  <span key={idx} style={styles.techBadge}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Stack</h2>
        <div style={styles.skillsGrid}>
          <div style={styles.skillBox}>
            <h4 style={styles.skillCategory}>Machine Learning & Math</h4>
            <p style={styles.skillItems}>NumPy • PyTorch • Scikit-learn • Pandas • Mathematical Vectorization • Optimization</p>
          </div>
          <div style={styles.skillBox}>
            <h4 style={styles.skillCategory}>Systems & Deployment</h4>
            <p style={styles.skillItems}>Python • C++ • Next.js • PostgreSQL • SQLAlchemy • Docker • REST APIs • Railway</p>
          </div>
          <div style={styles.skillBox}>
            <h4 style={styles.skillCategory}>Specialized Analytics</h4>
            <p style={styles.skillItems}>Kalman Filtering • FFT Signal Processing • Time-Series Modeling • Telemetry Fusion</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Start a Technical Consultation</h2>
        <div style={styles.contactContainer}>
          {submitted ? (
            <div style={styles.successMessage}>
              Thank you for reaching out. I will review your requirements and respond within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  style={styles.input} 
                  placeholder="Your Name or Company"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  style={styles.input} 
                  placeholder="work-email@domain.com"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Project Scope / Requirements</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  style={styles.textarea} 
                  placeholder="Outline your data challenges, modeling tasks, or performance goals..."
                />
              </div>
              <button type="submit" style={styles.btnSubmit}>Send Inquiry</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© {new Date().getFullYear()} • Machine Learning & Signal Systems</p>
      </footer>
    </div>
  );
};

// CSS-in-JS Styles for drop-in responsiveness and zero setup
const styles = {
  container: {
    backgroundColor: '#0a0d12',
    color: '#e2e8f0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    minHeight: '100vh',
    padding: '0 1.5rem',
    boxSizing: 'border-box'
  },
  navbar: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
    borderBottom: '1px solid #1e293b'
  },
  brand: {
    fontWeight: '700',
    letterSpacing: '1px',
    fontSize: '1.1rem',
    color: '#f8fafc'
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center'
  },
  navLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s'
  },
  ctaSmall: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '0.4rem 0.9rem',
    borderRadius: '4px',
    fontSize: '0.85rem',
    fontWeight: '600'
  },
  hero: {
    maxWidth: '1100px',
    margin: '4rem auto 3rem auto',
    textAlign: 'left'
  },
  badge: {
    display: 'inline-block',
    fontSize: '0.75rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#60a5fa',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    padding: '0.3rem 0.7rem',
    borderRadius: '4px',
    marginBottom: '1rem'
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
    lineHeight: '1.2',
    color: '#f8fafc',
    marginBottom: '1.5rem',
    maxWidth: '900px'
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    lineHeight: '1.6',
    maxWidth: '700px',
    marginBottom: '2rem'
  },
  heroActions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem'
  },
  btnSecondary: {
    border: '1px solid #334155',
    color: '#cbd5e1',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem'
  },
  section: {
    maxWidth: '1100px',
    margin: '4rem auto'
  },
  sectionTitle: {
    fontSize: '1.6rem',
    color: '#f8fafc',
    marginBottom: '1.5rem',
    borderLeft: '3px solid #3b82f6',
    paddingLeft: '0.8rem'
  },
  aboutCard: {
    backgroundColor: '#111827',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '1.8rem'
  },
  aboutText: {
    color: '#94a3b8',
    lineHeight: '1.8',
    fontSize: '1.05rem',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem'
  },
  projectCard: {
    backgroundColor: '#111827',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column'
  },
  projectTag: {
    fontSize: '0.75rem',
    color: '#38bdf8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.5rem'
  },
  projectTitle: {
    fontSize: '1.25rem',
    color: '#f8fafc',
    marginBottom: '0.8rem'
  },
  projectDetail: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    lineHeight: '1.5',
    margin: '0.3rem 0'
  },
  metricBox: {
    margin: '1rem 0',
    padding: '0.6rem 0.8rem',
    backgroundColor: '#1e293b',
    borderRadius: '4px',
    color: '#f1f5f9',
    fontSize: '0.85rem',
    fontWeight: '500'
  },
  techWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginTop: 'auto',
    paddingTop: '0.5rem'
  },
  techBadge: {
    fontSize: '0.75rem',
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    color: '#cbd5e1',
    padding: '0.2rem 0.5rem',
    borderRadius: '3px'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  skillBox: {
    backgroundColor: '#111827',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '1.5rem'
  },
  skillCategory: {
    fontSize: '1rem',
    color: '#60a5fa',
    marginBottom: '0.8rem'
  },
  skillItems: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    margin: 0
  },
  contactContainer: {
    backgroundColor: '#111827',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '650px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  },
  label: {
    fontSize: '0.85rem',
    color: '#cbd5e1',
    fontWeight: '500'
  },
  input: {
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '6px',
    padding: '0.75rem',
    color: '#f8fafc',
    fontSize: '0.95rem',
    outline: 'none'
  },
  textarea: {
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '6px',
    padding: '0.75rem',
    color: '#f8fafc',
    fontSize: '0.95rem',
    outline: 'none',
    resize: 'vertical'
  },
  btnSubmit: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '0.8rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    marginTop: '0.5rem'
  },
  successMessage: {
    padding: '1.2rem',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid #22c55e',
    color: '#4ade80',
    borderRadius: '6px',
    fontSize: '0.95rem'
  },
  footer: {
    maxWidth: '1100px',
    margin: '4rem auto 2rem auto',
    textAlign: 'center',
    borderTop: '1px solid #1e293b',
    paddingTop: '2rem'
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#64748b'
  }
};

export default Portfolio;
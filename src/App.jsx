import React from 'react';
import {
  ArrowDownRight, ArrowUpRight, Mail, MapPin,
  Database, BrainCircuit, ChartNoAxesCombined, Code2, Menu, X,
  ExternalLink, Activity, Layers, Lock, CheckCircle2, RotateCw,
  ChevronDown, ChevronUp, Send, Copy, Check, Award, ShieldCheck,
  Sparkles, Atom
} from 'lucide-react';

// Safe, accessible SVG icons for brand marks (eliminating lucide export errors)
function GithubIcon({ size = 17, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ size = 17, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.97 0 1.75.78 1.75 1.75s-.78 1.76-1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

const PROFILE = {
  name: 'Deb Prasad Gabur',
  shortName: 'DEB',
  role: 'Data Analyst',
  descriptor: 'Machine Learning Enthusiast',
  location: 'West Bengal, India',
  github: 'https://github.com/prasadgaburdeb-prog',
  linkedin: 'https://www.linkedin.com/in/deb-prasad-gabur-5a9374374',
  email: 'prasadgaburdeb@gmail.com', // Verified connected Gmail
  resume: '/resume.pdf' // Add your PDF to the public folder
};

// Verified Accreditations & Technical Certifications
const CERTIFICATES = [
  {
    id: 'fcc-data-analysis',
    code: 'CERT // 01',
    title: 'Data Analysis with Python Developer Certification',
    issuer: 'freeCodeCamp.org',
    date: 'August 24, 2026',
    hours: '~300 Hours Applied Engineering',
    credentialId: 'deb_prasad_gabur/data-analysis-with-python-v7',
    verifyUrl: 'https://freecodecamp.org/certification/deb_prasad_gabur/data-analysis-with-python-v7',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Data Pipelines']
  },
  {
    id: 'fcc-python-v9',
    code: 'CERT // 02',
    title: 'Python Developer Certification',
    issuer: 'freeCodeCamp.org',
    date: 'November 8, 2026',
    hours: '~300 Hours Algorithmic Engineering',
    credentialId: 'fcc-10cab757-cc92-4783-9207-4d75d657ef7b-pyv9',
    verifyUrl: 'https://freecodecamp.org/certification/fcc-10cab757-cc92-4783-9207-4d75d657ef7b/python-v9',
    skills: ['Python 3', 'OOP', 'Data Structures', 'Algorithms', 'Automation']
  },
  {
    id: 'sql-data-analytics',
    code: 'CERT // 03',
    title: 'Intermediate SQL for Data Analytics',
    issuer: 'Luke Barousse · Data Nerd Analytics',
    date: '2026',
    hours: 'Comprehensive Query Benchmark',
    credentialId: 'SQL-ADV-QUERY-2026',
    verifyUrl: 'https://lukebarousse.com/sql',
    skills: ['PostgreSQL', 'CTEs', 'Window Functions', 'Subqueries', 'Relational Schemas']
  },
  {
    id: 'ml-python-foundations',
    code: 'CERT // 04',
    title: 'Machine Learning Foundations with Python',
    issuer: 'Intellipaat Academy',
    date: '2026',
    hours: 'Verified Industry Curriculum',
    credentialId: 'IP-ML-ACADEMY-2026',
    verifyUrl: 'https://intellipaat.com/academy/course/machine-learning-free-course/',
    skills: ['Scikit-Learn', 'Supervised ML', 'Classification', 'Regression', 'Predictive AI']
  }
];

// V2 Organized Skills Taxonomy
const skillCategories = [
  {
    code: 'DA // 01',
    group: 'Data Analytics',
    description: 'Transforming raw data and relational tables into clean, structured analytical insights.',
    icon: Database,
    items: [
      { name: 'Python', role: 'Data Analysis' },
      { name: 'SQL', role: 'Query Optimization' },
      { name: 'MySQL', role: 'Relational DB' },
      { name: 'Pandas', role: 'Data Wrangling' },
      { name: 'Exploratory Data Analysis', role: 'Pattern Discovery' },
      { name: 'Data Cleaning', role: 'Data Preprocessing' }
    ]
  },
  {
    code: 'ML // 02',
    group: 'Machine Learning',
    description: 'Applying algorithmic foundations, hypothesis evaluation, and statistical reasoning.',
    icon: BrainCircuit,
    items: [
      { name: 'Machine Learning Fundamentals', role: 'Modeling Concepts' },
      { name: 'Statistical Analysis', role: 'Distributions & Tests' },
      { name: 'Model Evaluation', role: 'Metrics & Validation' }
    ]
  },
  {
    code: 'DEV // 03',
    group: 'Development & Tools',
    description: 'Version control workflows, reproducible research notebooks, and web fundamentals.',
    icon: Code2,
    items: [
      { name: 'Git & GitHub', role: 'Version Control' },
      { name: 'Jupyter Notebook', role: 'Interactive Analysis' },
      { name: 'HTML', role: 'Semantic Structure' },
      { name: 'CSS', role: 'Layouts & Styling' },
      { name: 'JavaScript', role: 'Frontend Logic' }
    ]
  }
];

// V2 Refined Project Showcase Data
const projects = [
  {
    id: 'classpulse-ai',
    number: '01',
    featured: true,
    name: 'ClassPulse AI',
    type: 'AI & DATA PROJECT',
    badge: 'FEATURED PROJECT',
    statusTag: 'Active Exploration',
    statusClass: 'status-featured',
    description: 'An AI-focused project exploring how classroom-related data and intelligent features can support and optimize academic workflows.',
    stack: ['Python', 'AI', 'Data Analysis'],
    github: 'https://github.com/prasadgaburdeb-prog/ClassPulse-Ai',
    demo: '', // Optional live demo link
    screenshot: '', // Path to screenshot if available e.g. /projects/classpulse.png
    highlights: [
      'Exploration of educational interaction workflows',
      'Data-driven feature development in Python',
      'Structured insights modeling'
    ]
  },
  {
    id: 'wellness-app',
    number: '02',
    featured: false,
    name: 'Wellness App',
    type: 'STUDENT WELLNESS · TEAM PROJECT',
    badge: 'PROJECT ON HOLD',
    statusTag: 'Concept / Research Phase',
    statusClass: 'status-hold',
    description: 'A student-focused wellness application concept. My contributions included frontend interface development and user data analysis.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Supabase'],
    github: '', // Add public repository link when published
    demo: '',
    screenshot: '',
    highlights: [
      'Frontend component architecture',
      'Preliminary user activity data schema',
      'Collaborative team sprint execution'
    ]
  },
  {
    id: 'medzrya',
    number: '03',
    featured: false,
    name: 'MedZrya',
    type: 'HEALTHCARE · TEAM PROJECT',
    badge: 'IN PROGRESS',
    statusTag: 'Active Development',
    statusClass: 'status-active',
    description: 'A collaborative healthcare application focused on improving the patient OPD queue and appointment experience. My primary contribution is on the frontend.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Supabase'],
    github: '', // Add public repository link when published
    demo: '',
    screenshot: '',
    highlights: [
      'OPD patient journey interface design',
      'Responsive appointment workflow styling',
      'Cross-functional team coordination'
    ]
  }
];

// Pre-computed pixel matrix (18 cols x 8 rows = 144 blocks) for fast 21st.dev pixel synthesis
const PIXEL_MATRIX = Array.from({ length: 144 }, (_, i) => {
  const col = i % 18;
  const row = Math.floor(i / 18);
  const jitter = ((col * 7 + row * 13) % 9) * 4;
  const delayMs = col * 18 + jitter;
  return { id: i, col, row, delayMs };
});

function PixelGenerationOverlay({ label }) {
  return (
    <div className="pixel-generation-overlay" aria-hidden="true">
      <div className="pixel-raster-sweep" />
      <div className="pixel-grid-container">
        {PIXEL_MATRIX.map((px) => (
          <span
            key={px.id}
            className="pixel-cell"
            style={{
              '--px-col': px.col,
              '--px-row': px.row,
              '--px-delay': `${px.delayMs}ms`
            }}
          />
        ))}
      </div>
      <div className="pixel-telemetry-badge">
        <span className="pixel-rec-dot" />
        <span>SYNTHESIS // {label}</span>
      </div>
    </div>
  );
}

function UnravelWordSpan({ text, startIndex = 0, className = 'timeline-word', accentWords = [] }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isAccent = accentWords.includes(word) || accentWords.includes(cleanWord);
        return (
          <React.Fragment key={idx}>
            <span
              className={`${className} ${isAccent ? 'accent' : ''}`}
              style={{ '--tword-idx': startIndex + idx }}
            >
              {word}
            </span>
            {idx < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState('#home');
  const [avatarFlipped, setAvatarFlipped] = React.useState(false);
  const [expandedSkills, setExpandedSkills] = React.useState({});
  const [selectedProjectId, setSelectedProjectId] = React.useState('classpulse-ai');
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const toggleSkillCard = (code) => {
    setExpandedSkills((prev) => ({
      ...prev,
      [code]: !prev[code]
    }));
  };

  const allSkillsExpanded = skillCategories.every((cat) => Boolean(expandedSkills[cat.code]));

  const toggleAllSkills = () => {
    if (allSkillsExpanded) {
      setExpandedSkills({});
    } else {
      const next = {};
      skillCategories.forEach((cat) => {
        next[cat.code] = true;
      });
      setExpandedSkills(next);
    }
  };

  const aboutRef = React.useRef(null);
  const aboutPercentRef = React.useRef(null);

  const journeyRef = React.useRef(null);
  const journeyPercentRef = React.useRef(null);

  // Functional Contact Terminal State
  const [contactEmail, setContactEmail] = React.useState('');
  const [contactName, setContactName] = React.useState('');
  const [contactTopic, setContactTopic] = React.useState('Data Analytics Internship');
  const [contactMessage, setContactMessage] = React.useState('');
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');

  // 21st.dev Vacuum Emergence State for Certifications
  const [certsRevealed, setCertsRevealed] = React.useState(false);
  const [vacuumBurst, setVacuumBurst] = React.useState(false);
  const [sonarRipples, setSonarRipples] = React.useState([]);

  const handleVacuumTrigger = (e) => {
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX ? e.clientX - rect.left : rect.width / 2,
        y: e.clientY ? e.clientY - rect.top : rect.height / 2
      };
      setSonarRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setSonarRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 900);
    }

    setVacuumBurst(true);
    setTimeout(() => setVacuumBurst(false), 900);
    setCertsRevealed((prev) => !prev);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('prasadgaburdeb@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactEmail || !emailRegex.test(contactEmail.trim())) {
      setEmailError('Please enter a valid email address so I can respond.');
      return;
    }
    setEmailError('');
    setFormSubmitted(true);

    const subject = `[Portfolio Inquiry] ${contactTopic} - from ${contactName || contactEmail}`;
    const body = `Sender Email: ${contactEmail}\nSender Name: ${contactName || 'Not specified'}\nTopic: ${contactTopic}\n\nMessage:\n${contactMessage || 'Hi Deb Prasad, I came across your portfolio and would like to connect.'}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=prasadgaburdeb@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const nav = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Journey', '#journey'],
    ['Contact', '#contact']
  ];
  const closeMenu = () => setMenuOpen(false);

  // Single ultra-high performance RAF-throttled scroll handler (ZERO React re-renders on scroll)
  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const start = windowHeight * 0.9;
          const end = windowHeight * 0.15;
          const scrollY = window.scrollY;

          // Header state (only updates state if changed)
          setScrolled(scrollY > 25);

          // Dynamic active section tracking when scrolling down or up
          const sections = ['contact', 'journey', 'projects', 'skills', 'about', 'home'];
          const triggerLine = scrollY + 140;
          for (const sId of sections) {
            const el = document.getElementById(sId);
            if (el && el.offsetTop <= triggerLine) {
              setActiveNav(`#${sId}`);
              break;
            }
          }

          // Direct CSS custom property update for About section
          if (aboutRef.current) {
            const rect = aboutRef.current.getBoundingClientRect();
            const p = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
            aboutRef.current.style.setProperty('--about-unravel', p.toFixed(3));
            if (aboutPercentRef.current) {
              aboutPercentRef.current.textContent = `${Math.round(p * 100)}%`;
            }
          }

          // Direct CSS custom property update for Journey section
          if (journeyRef.current) {
            const rect = journeyRef.current.getBoundingClientRect();
            const p = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
            journeyRef.current.style.setProperty('--journey-unravel', p.toFixed(3));
            if (journeyPercentRef.current) {
              journeyPercentRef.current.textContent = `${Math.round(p * 100)}%`;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: close mobile menu on Escape
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Section entrance reveal observer
  React.useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-revealed'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (entry.target.id) {
              setActiveNav(`#${entry.target.id}`);
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 21st.dev inspired dynamic spotlight pointer tracking
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="site-shell">
      {/* Topline Telemetry Status Bar */}
      <div className="topline">
        <span className="topline-item">
          <span className="topline-tag">SYS // 2026.V2</span>
          <span className="topline-label">DATA ANALYST &amp; ML SPECIALIZATION</span>
        </span>
        <span className="topline-item topline-status">
          <span className="availability-badge">
            <i className="availability-dot" />
            <span>OPEN TO INTERNSHIPS</span>
          </span>
        </span>
      </div>

      {/* Main Header / Navigation with sticky positioning on scroll */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Deb Prasad Gabur Home">
            <span className="brand-mark">
              D<span className="brand-dot">.</span>
            </span>
            <span className="brand-details">
              <span className="brand-name">{PROFILE.shortName}</span>
              <small className="brand-role">DATA · ANALYTICS · MACHINE LEARNING</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {menuOpen && <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true" />}

          <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main Navigation">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className={`nav-link ${activeNav === href ? 'nav-link-active' : ''}`}
              >
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              <span>Let's talk</span>
              <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* V2 Hero Section */}
        <section className="hero section-wrap reveal-on-scroll" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-accent-badge">TELEMETRY // 01</span>
              <span className="eyebrow-line" aria-hidden="true" />
              <span className="eyebrow-text">HELLO, I'M {PROFILE.name.toUpperCase()}</span>
            </div>

            <h1 className="hero-title" id="hero-title">
              Turning raw data<br />
              into <span className="accent-glow">strategic direction.</span>
            </h1>

            {/* Interactive Two-Sided Coin Avatar (Portrait & Pixel Motorsport Persona) */}
            <div className="hero-avatar-wrapper">
              <button
                type="button"
                className={`avatar-coin-container ${avatarFlipped ? 'is-flipped' : ''}`}
                onClick={() => setAvatarFlipped(!avatarFlipped)}
                aria-label={avatarFlipped ? "Flip back to real portrait" : "Flip to pixel motorsport avatar"}
              >
                <div className="avatar-coin">
                  {/* Front Face: Human Portrait */}
                  <div className="avatar-face avatar-front">
                    <img
                      src="/profile.jpg"
                      alt="Deb Prasad Gabur Portrait"
                      className="avatar-img"
                    />
                    <div className="avatar-ring-glow" aria-hidden="true" />
                  </div>

                  {/* Back Face: Pixel Motorsport Avatar */}
                  <div className="avatar-face avatar-back">
                    <img
                      src="/avatar-pixel.jpg"
                      alt="Deb Prasad Gabur Pixel Motorsport Avatar"
                      className="avatar-img"
                    />
                    <div className="avatar-ring-glow avatar-ring-glow-red" aria-hidden="true" />
                  </div>
                </div>

                {/* Pop-up Tooltip on Hover */}
                <div className="avatar-tooltip" role="tooltip">
                  <span className="tooltip-tag">
                    <RotateCw size={11} className="tooltip-icon" aria-hidden="true" />
                    <span>{avatarFlipped ? "CLICK TO FLIP // REAL PORTRAIT" : "CLICK TO FLIP // RACING ALTER-EGO"}</span>
                  </span>
                  <span className="tooltip-arrow" aria-hidden="true" />
                </div>

                {/* Side Indicator Badge */}
                <div className="avatar-side-tag">
                  <span>{avatarFlipped ? "SIDE B // PIXEL DRIVER" : "SIDE A // PORTRAIT"}</span>
                </div>
              </button>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <span>Explore Selected Work</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#about">
                <span>About &amp; Philosophy</span>
                <ArrowDownRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-meta">
              <div className="meta-item">
                <MapPin size={14} className="meta-icon" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="meta-item">
                <span className="telemetry-chip">STACK</span>
                <span>Python · SQL · Pandas · Scikit-Learn</span>
              </div>
              <div className="meta-item meta-status">
                <i className="availability-dot" aria-hidden="true" />
                <span>Ready for Internship Opportunities</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="gauge-radial-lines" />
            <div className="orbit orbit-one" />

            {/* Central Analytical Data Core (The Sun / Nucleus) */}
            <div className="data-core">
              <div className="core-top">
                <Activity size={10} className="core-activity-icon" />
                <span>TELEMETRY // ID: 001</span>
              </div>
              <div className="core-symbol">
                <ChartNoAxesCombined size={54} strokeWidth={1.2} />
              </div>
              <div className="core-bottom">
                <span>OBSERVE · MODEL · DEPLOY</span>
              </div>
            </div>

            {/* 21st.dev Solar System Planetary Orbit Tracks */}
            <div className="solar-orbit-system">
              {/* Inner Orbit Track: Primary Focus (Data Analytics) */}
              <div className="orbit-track orbit-track-inner">
                <div className="orbit-anchor anchor-planet-one">
                  <div className="float-card orbit-card-counter orbit-card-inner">
                    <div className="float-header">
                      <span className="mini-label">PRIMARY FOCUS</span>
                      <span className="float-accent">01 / 02</span>
                    </div>
                    <strong>Data Analytics</strong>
                    <div className="float-meta">EDA · SQL Pipelines · Insights</div>
                  </div>
                </div>
              </div>

              {/* Outer Orbit Track: Active Pursuit (Machine Learning) */}
              <div className="orbit-track orbit-track-outer">
                <div className="orbit-anchor anchor-planet-two">
                  <div className="float-card orbit-card-counter orbit-card-outer orbit-card-ml">
                    <div className="float-header">
                      <span className="mini-label">ACTIVE PURSUIT</span>
                      <span className="float-accent-neutral">02 / 02</span>
                    </div>
                    <strong>Machine Learning</strong>
                    <div className="float-meta">Patterns · Statistics · Models</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="visual-index">
              <span className="index-pulse" />
              FIG. 01 — ANALYTICAL TELEMETRY CORE
            </div>
          </div>

          <a className="scroll-cue" href="#about" aria-label="Scroll down to explore about section">
            <span className="scroll-line" />
            <span>SCROLL TO INSPECT</span>
          </a>
        </section>

        {/* Technical Ticker Strip */}
        <section className="intro-strip" aria-label="Portfolio Philosophy Banner">
          <div className="section-wrap strip-inner">
            <span className="strip-tag">[ APPLIED ANALYTICS ]</span>
            <p>From raw variables to predictive clarity — engineering insight from data entropy.</p>
            <span className="strip-index">SYS // 01 — 05</span>
          </div>
        </section>

        {/* About Section with Scroll-Driven Circular Unravel Effect */}
        <section
          ref={aboutRef}
          className="content-section section-wrap reveal-on-scroll about-unravel-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / ABOUT</span>
              <h2 id="about-title" className="circular-unravel-heading">
                <span className="unravel-word heading-unravel-word" style={{ '--head-idx': 0 }}>Analytical</span>{' '}
                <span className="unravel-word heading-unravel-word" style={{ '--head-idx': 1 }}>thinking.</span>
                <br />
                <span className="muted">
                  <span className="unravel-word heading-unravel-word" style={{ '--head-idx': 2 }}>Practical</span>{' '}
                  <span className="unravel-word heading-unravel-word" style={{ '--head-idx': 3 }}>building.</span>
                </span>
              </h2>
            </div>
            <div className="heading-side about-scan-indicator">
              <span className="scan-compass-arc" aria-hidden="true" />
              <span>UNRAVEL // <span ref={aboutPercentRef}>0%</span></span>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy circular-unravel-text">
                <span className="unravel-word" style={{ '--word-idx': 0 }}>I’m</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 1 }}>a</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 2 }}>BCA</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 3 }}>student</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 4 }}>building</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 5 }}>my</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 6 }}>path</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 7 }}>in</span>{' '}
                <span className="unravel-word accent" style={{ '--word-idx': 8 }}>data analytics</span>{' '}
                <span className="unravel-word" style={{ '--word-idx': 9 }}>and</span>{' '}
                <span className="unravel-word accent" style={{ '--word-idx': 10 }}>machine learning.</span>
              </p>
            </div>

            <div className="about-body circular-unravel-body">
              <div className="circular-reveal-wrapper">
                <p>
                  I enjoy working with data, asking better questions, and translating analysis into clear findings. I’m building my foundations in Python, SQL, Pandas, Excel, and basic statistics while learning how machine learning can uncover patterns and support better decisions.
                </p>
                <p>
                  Alongside analytics, I bring hands-on exposure to web technologies and collaborative software projects. I’m currently looking for an opportunity to learn, contribute, and grow in a real-world team.
                </p>
              </div>

              <div className="about-facts">
                <div><span>EDUCATION</span><strong>Bachelor of Computer Applications</strong></div>
                <div><span>CAREER FOCUS</span><strong>Data Analytics &amp; ML</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* V2 Skills Section */}
        <section className="content-section skills-section reveal-on-scroll" id="skills" aria-labelledby="skills-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <span className="section-kicker">02 / TECHNICAL TOOLKIT</span>
                <h2 id="skills-title">Tools I work<br/><span className="muted">and learn with.</span></h2>
              </div>
              <div className="skills-heading-actions">
                <p className="heading-description">
                  A structured overview of core competencies and active learning domains. Click any card to inspect its technical stack.
                </p>
                <button
                  type="button"
                  className="skills-toggle-all-btn"
                  onClick={toggleAllSkills}
                  aria-label={allSkillsExpanded ? 'Collapse all skill modules' : 'Expand all skill modules'}
                >
                  <span className={`toggle-all-indicator ${allSkillsExpanded ? 'is-active' : ''}`} aria-hidden="true" />
                  <span>{allSkillsExpanded ? 'COLLAPSE ALL MODULES' : 'EXPAND ALL MODULES'}</span>
                </button>
              </div>
            </div>

            <div className="skills-grid">
              {skillCategories.map((cat) => {
                const CategoryIcon = cat.icon;
                const isExpanded = Boolean(expandedSkills[cat.code]);
                return (
                  <article
                    className={`skill-card spotlight-card ${isExpanded ? 'skill-card-expanded' : ''}`}
                    key={cat.code}
                    onMouseMove={handleCardMouseMove}
                    onClick={() => toggleSkillCard(cat.code)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleSkillCard(cat.code);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`${cat.group} skill module, ${isExpanded ? 'expanded' : 'collapsed'}. Click to toggle details.`}
                  >
                    <div className="skill-card-top">
                      <span className="skill-code">{cat.code}</span>
                      <span className="skill-icon-wrapper">
                        <CategoryIcon size={20} aria-hidden="true" />
                      </span>
                    </div>

                    <h3 className="skill-group-title">{cat.group}</h3>
                    <p className="skill-group-desc">{cat.description}</p>

                    <div className="skill-expand-bar">
                      <span className="expand-status-tag">
                        <span className={`expand-pulse-dot ${isExpanded ? 'is-active' : ''}`} aria-hidden="true" />
                        <span>{isExpanded ? 'MODULE DECRYPTED' : 'CLICK TO REVEAL SKILLS'}</span>
                      </span>
                      <span className="expand-meta">
                        <span className="expand-count">{cat.items.length} SKILLS</span>
                        <span className="expand-chevron" aria-hidden="true">
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </span>
                      </span>
                    </div>

                    <div className="skill-expand-collapse" aria-hidden={!isExpanded}>
                      <div className="skill-expand-inner">
                        <div className="skill-tags">
                          {cat.items.map((item, idx) => (
                            <div
                              className="skill-chip"
                              key={item.name}
                              style={{ '--item-idx': idx }}
                            >
                              <span className="chip-indicator" aria-hidden="true" />
                              <div className="chip-content">
                                <span className="chip-name">{item.name}</span>
                                <span className="chip-role">{item.role}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="skill-footer-note">
              <span className="red-square" aria-hidden="true" />
              <span>
                All skills accurately represent current coursework, personal projects, and active study. Zero fabricated proficiencies.
              </span>
            </div>
          </div>
        </section>

        {/* V2 Projects Section - Planetary Orbit & Interactive Inspector */}
        <section className="content-section section-wrap reveal-on-scroll" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">03 / SELECTED WORK</span>
              <h2 id="projects-title">Projects with<br/><span className="muted">a purpose.</span></h2>
            </div>
            <div className="heading-side projects-orbit-telemetry">
              <span className="telemetry-radar-dot" aria-hidden="true" />
              <span>ORBITAL REVOLUTION // SELECT TO INSPECT</span>
            </div>
          </div>

          <div className="projects-showcase-layout">
            {/* Left: Solar System Orbital Array (No Center Star) */}
            <div className="projects-orbit-stage" aria-label="Projects Planetary Orbit System">
              {/* Radar Orbit Guidelines */}
              <div className="project-orbit-guideline ring-outer" aria-hidden="true" />
              <div className="project-orbit-guideline ring-mid" aria-hidden="true" />
              <div className="project-orbit-guideline ring-inner" aria-hidden="true" />

              {/* Center Coordinate Target (No Center Star) */}
              <div className="project-orbit-center-null" aria-hidden="true">
                <span className="null-cross-h" />
                <span className="null-cross-v" />
                <span className="null-core-tag">SYS // ZERO CORE</span>
              </div>

              {/* The Three Rotating Project Cards */}
              {projects.map((p, idx) => {
                const isSelected = selectedProjectId === p.id;
                return (
                  <div
                    key={p.id}
                    className={`project-orbit-anchor project-orbit-anchor-${idx + 1}`}
                  >
                    <button
                      type="button"
                      className={`project-orbit-card ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedProjectId(p.id)}
                      aria-pressed={isSelected}
                      aria-label={`Select project ${p.name}`}
                    >
                      <div className="orbit-card-badge-row">
                        <span className="orbit-card-num">{p.number}</span>
                        <span className={`orbit-pulse-dot ${isSelected ? 'is-active' : ''}`} aria-hidden="true" />
                      </div>
                      <span className="orbit-card-name">{p.name}</span>
                      <span className="orbit-card-cue">{isSelected ? 'INSPECTING' : 'CLICK'}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right: Selected Project Detail Inspector Panel with Left-to-Right Pixel Generation */}
            <div
              key={selectedProject.id}
              className="project-detail-panel spotlight-card"
              onMouseMove={handleCardMouseMove}
              aria-live="polite"
            >
              {/* Fast Left-to-Right Pixel Synthesis Matrix */}
              <PixelGenerationOverlay label={selectedProject.id.toUpperCase()} />

              <div className="project-detail-content">
                {/* Card Header */}
                <div className="project-card-top">
                  <div className="project-id-block">
                    <span className="project-num">PRJ // {selectedProject.number}</span>
                    <span className="project-type-tag">{selectedProject.type}</span>
                  </div>
                  <span className={`project-badge ${selectedProject.statusClass}`}>
                    <i className="badge-dot" aria-hidden="true" />
                    {selectedProject.badge}
                  </span>
                </div>

                {/* Visual Preview / Schematic Frame */}
                <div className="project-preview-frame">
                  {selectedProject.screenshot ? (
                    <img src={selectedProject.screenshot} alt={`${selectedProject.name} preview`} className="project-img" />
                  ) : (
                    <div className="project-schematic" aria-hidden="true">
                      <div className="schematic-grid" />
                      <div className="schematic-content">
                        <span className="schematic-code">SYSTEM ID: {selectedProject.id.toUpperCase()}</span>
                        <span className="schematic-status">{selectedProject.statusTag}</span>
                      </div>
                      <div className="schematic-graphic">
                        {selectedProject.id === 'classpulse-ai' ? (
                          <BrainCircuit size={44} strokeWidth={1.2} />
                        ) : selectedProject.id === 'wellness-app' ? (
                          <Activity size={44} strokeWidth={1.2} />
                        ) : (
                          <Layers size={44} strokeWidth={1.2} />
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Main Info */}
                <div className="project-card-body">
                  <div className="project-title-row">
                    <h3 className="project-title">{selectedProject.name}</h3>
                    {selectedProject.featured && <span className="featured-flag">FLAGSHIP</span>}
                  </div>
                  <p className="project-desc">{selectedProject.description}</p>

                  {/* Highlights bullet points */}
                  <div className="detail-meta-label">KEY ARCHITECTURAL HIGHLIGHTS</div>
                  <ul className="project-highlights">
                    {selectedProject.highlights.map((h, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={12} className="highlight-icon" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="detail-meta-label">APPLIED TOOLING &amp; STACK</div>
                  <div className="project-stack">
                    {selectedProject.stack.map((t) => (
                      <span key={t} className="stack-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="project-card-footer">
                  <div className="project-links">
                    {selectedProject.github ? (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-btn primary-action"
                        aria-label={`View ${selectedProject.name} source code on GitHub`}
                      >
                        <GithubIcon size={15} />
                        <span>Repository</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="project-action-btn disabled-action" title="Repository is currently private or in active team development">
                        <Lock size={13} aria-hidden="true" />
                        <span>Private Codebase</span>
                      </span>
                    )}

                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-btn secondary-action"
                        aria-label={`Open ${selectedProject.name} live demo`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Quick Switcher Orbit Pager */}
                  <div className="project-orbit-pager" role="tablist" aria-label="Select active project">
                    {projects.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        role="tab"
                        aria-selected={selectedProjectId === p.id}
                        className={`orbit-pager-btn ${selectedProjectId === p.id ? 'is-active' : ''}`}
                        onClick={() => setSelectedProjectId(p.id)}
                        title={`Switch to ${p.name}`}
                      >
                        <span>{p.number}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-footer-note">
            <span className="red-square" aria-hidden="true" />
            <p>
              Project descriptions and statuses accurately reflect their current development stage. Code repositories and live links are provided strictly when public and verified.
            </p>
          </div>
        </section>

        {/* Journey Section with Mouse Scroll Circular Unravel Effect */}
        <section
          ref={journeyRef}
          className="content-section journey-section reveal-on-scroll journey-unravel-section"
          id="journey"
          aria-labelledby="journey-title"
        >
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <span className="section-kicker">04 / THE JOURNEY</span>
                <h2 id="journey-title" className="circular-unravel-heading">
                  <span className="unravel-word journey-head-word" style={{ '--head-idx': 0 }}>Learning</span>{' '}
                  <span className="unravel-word journey-head-word" style={{ '--head-idx': 1 }}>in</span>
                  <br />
                  <span className="muted">
                    <span className="unravel-word journey-head-word" style={{ '--head-idx': 2 }}>progress.</span>
                  </span>
                </h2>
              </div>
              <div className="heading-side journey-scan-indicator">
                <span className="scan-compass-arc" aria-hidden="true" />
                <span>UNRAVEL // <span ref={journeyPercentRef}>0%</span></span>
              </div>
            </div>

            <div className="journey-lead-wrap">
              <p className="large-copy circular-unravel-text journey-lead-copy">
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 0 }}>Building</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 1 }}>a</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 2 }}>strong</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 3 }}>foundation</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 4 }}>through</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 5 }}>coursework,</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 6 }}>independent</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 7 }}>practice,</span>{' '}
                <span className="unravel-word journey-sub-word" style={{ '--word-idx': 8 }}>and</span>{' '}
                <span className="unravel-word journey-sub-word accent" style={{ '--word-idx': 9 }}>project work.</span>
              </p>
            </div>

            <div className="journey-circular-reveal">
              <div className="timeline">
                {/* Item 1: CURRENT */}
                <div className="timeline-item" style={{ '--box-idx': 0 }}>
                  <span className="timeline-pin" aria-hidden="true" />
                  <span className="timeline-date">CURRENT</span>
                  <div className="timeline-content">
                    <h3>
                      <UnravelWordSpan text="Bachelor of Computer Applications (BCA)" startIndex={0} />
                    </h3>
                    <p>
                      <UnravelWordSpan text="Second-year student · West Bengal, India" startIndex={5} />
                    </p>
                    <span className="timeline-detail">
                      <UnravelWordSpan
                        text="Developing foundations in computer applications, programming, and data-focused problem solving."
                        startIndex={11}
                      />
                    </span>
                  </div>
                </div>

                {/* Item 2: ONGOING */}
                <div className="timeline-item" style={{ '--box-idx': 1 }}>
                  <span className="timeline-pin" aria-hidden="true" />
                  <span className="timeline-date">ONGOING</span>
                  <div className="timeline-content">
                    <h3>
                      <UnravelWordSpan text="Independent learning & projects" startIndex={0} />
                    </h3>
                    <p>
                      <UnravelWordSpan
                        text="Data Analytics · Python · SQL · Machine Learning"
                        startIndex={4}
                        accentWords={['Analytics', 'Python', 'SQL', 'Learning']}
                      />
                    </p>
                    <span className="timeline-detail">
                      <UnravelWordSpan
                        text="Applying concepts through practical projects and continuously improving technical skills."
                        startIndex={13}
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications Showcase with 21st.dev Vacuum Emergence */}
              <div className="cert-section-container" style={{ '--box-idx': 2 }}>
                <div className="cert-section-header">
                  <div>
                    <span className="section-kicker">
                      <UnravelWordSpan text="ACCREDITATIONS // 04 VERIFIED CREDENTIALS" startIndex={0} />
                    </span>
                    <h3 className="cert-section-title">
                      <UnravelWordSpan text="Credentials that support the journey." startIndex={1} />
                    </h3>
                    <p className="cert-section-sub">
                      <UnravelWordSpan
                        text="Applied engineering, relational query benchmarks, and machine learning foundations."
                        startIndex={6}
                      />
                    </p>
                  </div>
                  <div className="cert-header-actions">
                    <button
                      type="button"
                      onClick={handleVacuumTrigger}
                      className={`vacuum-status-pill ${certsRevealed ? 'is-active' : ''}`}
                      aria-label={certsRevealed ? "Collapse certificates into vacuum" : "Deploy certificates from vacuum"}
                      title="Toggle vacuum emergence"
                    >
                      <span className="vacuum-pill-dot" />
                      <span>{certsRevealed ? 'VACUUM DEPLOYED // COLLAPSE' : 'VACUUM STANDBY // 04 READY'}</span>
                    </button>
                    <div className="cert-counter-badge">
                      <ShieldCheck size={16} className="cert-shield-icon" aria-hidden="true" />
                      <span>4 VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Main Vacuum Containment Stage */}
                <div className={`cert-vacuum-stage ${certsRevealed ? 'stage-emerged' : 'stage-idle'} ${vacuumBurst ? 'vacuum-bursting' : ''}`}>
                  {/* Ambient Gravitational Grid / Vacuum Singularity Aura */}
                  <div className="vacuum-portal-ambient" aria-hidden="true">
                    <div className="vacuum-radial-singularity" />
                    <div className="vacuum-grid-lines" />
                    {vacuumBurst && <div className="vacuum-shockwave-ring" />}
                  </div>

                  {!certsRevealed ? (
                    /* Closed State: Center 21st.dev Red Circle Reactor Button */
                    <div className="vacuum-trigger-chamber">
                      <div className="vacuum-orb-pedestal">
                        <button
                          type="button"
                          className="vacuum-red-circle-btn"
                          onClick={handleVacuumTrigger}
                          aria-label="Click red circle button to materialize certificates from vacuum space"
                        >
                          {/* 21st.dev Conic Glow & Radar Pulse Rings */}
                          <span className="vacuum-pulse-ring ring-1" aria-hidden="true" />
                          <span className="vacuum-pulse-ring ring-2" aria-hidden="true" />
                          <span className="vacuum-pulse-ring ring-3" aria-hidden="true" />
                          <span className="vacuum-conic-glow" aria-hidden="true" />

                          {/* Click-triggered 21st.dev Sonar Ripple Waves */}
                          {sonarRipples.map((r) => (
                            <span
                              key={r.id}
                              className="vacuum-click-ripple"
                              style={{ left: r.x, top: r.y }}
                              aria-hidden="true"
                            />
                          ))}

                          {/* Red Circle Center Core */}
                          <span className="vacuum-core-disc">
                            <span className="vacuum-orbital-ring" aria-hidden="true" />
                            <Sparkles size={24} className="vacuum-spark-icon" aria-hidden="true" />
                            <span className="vacuum-inner-glow" aria-hidden="true" />
                          </span>
                        </button>
                      </div>

                      <div className="vacuum-trigger-caption">
                        <div className="vacuum-caption-tag">
                          <Atom size={13} className="spin-slow" aria-hidden="true" />
                          <span>QUANTUM VACUUM CORE // 21ST DEV</span>
                        </div>
                        <h4 className="vacuum-caption-title">Click the Red Orb to Materialize Credentials</h4>
                        <p className="vacuum-caption-sub">
                          Spawns 4 verified technical accreditations directly out of the vacuum singularity with live telemetry verification.
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Emerged State: 4 Certificates Emerging Out of Vacuum */
                    <div className="vacuum-emerged-container">
                      {/* Floating Mini Collapse Trigger at top */}
                      <div className="vacuum-emerged-bar">
                        <div className="vacuum-emerged-tag">
                          <span className="vacuum-live-pulse" />
                          <span>VACUUM EMERGENCE ACTIVE // 04 CREDENTIALS ONLINE</span>
                        </div>
                        <button
                          type="button"
                          className="vacuum-collapse-btn"
                          onClick={handleVacuumTrigger}
                          title="Suck certificates back into the vacuum space"
                        >
                          <span className="vacuum-collapse-orb" aria-hidden="true" />
                          <span>COLLAPSE TO VACUUM</span>
                          <RotateCw size={13} aria-hidden="true" />
                        </button>
                      </div>

                      <div className="cert-cards-grid vacuum-cards-grid">
                        {CERTIFICATES.map((cert, cIdx) => (
                          <div
                            key={cert.id}
                            className="cert-card spotlight-card cert-card-vacuum-in"
                            style={{
                              '--emerge-delay': `${cIdx * 90}ms`,
                              '--vacuum-tx': cIdx % 2 === 0 ? '-40px' : '40px',
                              '--vacuum-ty': cIdx < 2 ? '-35px' : '35px',
                              '--vacuum-rot': cIdx % 2 === 0 ? '-5deg' : '5deg'
                            }}
                            onMouseMove={handleCardMouseMove}
                          >
                            <div className="cert-card-top">
                              <span className="cert-idx-tag">{cert.code}</span>
                              <span className="cert-status-badge">
                                <CheckCircle2 size={12} aria-hidden="true" />
                                <span>VERIFIED</span>
                              </span>
                            </div>

                            <div className="cert-issuer-row">
                              <Award size={15} className="cert-award-icon" aria-hidden="true" />
                              <span className="cert-issuer">{cert.issuer}</span>
                              <span className="cert-dot">•</span>
                              <span className="cert-date">{cert.date}</span>
                            </div>

                            <h4 className="cert-card-title">{cert.title}</h4>
                            <p className="cert-hours">{cert.hours}</p>

                            <div className="cert-skills-list">
                              {cert.skills.map((skill) => (
                                <span key={skill} className="cert-skill-pill">
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <div className="cert-card-footer">
                              <span className="cert-id-label">ID: {cert.credentialId.split('/')[0]}</span>
                              <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="cert-verify-link"
                                aria-label={`Verify ${cert.title}`}
                              >
                                <span>Verify</span>
                                <ArrowUpRight size={13} aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Connected Gmail Uplink */}
        <section className="contact-section section-wrap reveal-on-scroll" id="contact" aria-labelledby="contact-title">
          <div className="contact-top">
            <span className="section-kicker">05 / CONTACT</span>
            <span className="contact-index">HAVE AN OPPORTUNITY? // DIRECT UPLINK</span>
          </div>

          <div className="contact-layout">
            {/* Left Column: Direct Info & Social Hub */}
            <div className="contact-info-col">
              <h2 id="contact-title">Let’s make<br/><span className="accent">data matter.</span></h2>
              <p className="contact-copy">
                I’m actively looking for data analytics and machine learning internship opportunities, collaborative projects, and discussions on applied data problems.
              </p>

              {/* Connected Gmail Badge with One-Click Copy */}
              <div className="connected-gmail-box">
                <div className="gmail-box-header">
                  <span className="gmail-pulse-beacon" aria-hidden="true" />
                  <span className="gmail-label">CONNECTED GMAIL UPLINK</span>
                </div>
                <div className="gmail-box-content">
                  <span className="gmail-address">prasadgaburdeb@gmail.com</span>
                  <button
                    type="button"
                    className="gmail-copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy Gmail address"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              {/* Connected LinkedIn Profile Uplink */}
              <div className="connected-linkedin-box">
                <div className="linkedin-box-header">
                  <span className="linkedin-pulse-beacon" aria-hidden="true" />
                  <span className="linkedin-label">CONNECTED LINKEDIN PROFILE</span>
                </div>
                <div className="linkedin-box-content">
                  <span className="linkedin-address">deb-prasad-gabur-5a9374374</span>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin-connect-btn"
                    aria-label="Visit Deb Prasad's LinkedIn profile"
                  >
                    <LinkedinIcon size={14} />
                    <span>CONNECT</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="contact-meta-links">
                <a className="button button-outline" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="Visit Deb Prasad's GitHub profile">
                  <GithubIcon size={15} /> <span>GitHub Profile</span> <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                {PROFILE.linkedin && (
                  <a className="button button-outline" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="Visit Deb Prasad's LinkedIn profile">
                    <LinkedinIcon size={15} /> <span>LinkedIn</span> <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Dispatch Terminal */}
            <div className="contact-form-panel spotlight-card" onMouseMove={handleCardMouseMove}>
              {formSubmitted ? (
                <div className="form-success-state" role="status" aria-live="polite">
                  <div className="success-badge">
                    <CheckCircle2 size={36} className="success-icon" />
                  </div>
                  <h3>Transmission Dispatched</h3>
                  <p>
                    Your message draft has been routed to <strong>prasadgaburdeb@gmail.com</strong> from <strong>{contactEmail}</strong>.
                  </p>
                  <div className="success-actions">
                    <a
                      className="button button-primary"
                      href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${contactTopic} - from ${contactName || contactEmail}`)}&body=${encodeURIComponent(`Sender Email: ${contactEmail}\nSender Name: ${contactName || 'Not specified'}\nTopic: ${contactTopic}\n\nMessage:\n${contactMessage}`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Open in Native Email App</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      className="button button-ghost"
                      onClick={() => {
                        setFormSubmitted(false);
                        setContactEmail('');
                        setContactMessage('');
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form className="contact-terminal-form" onSubmit={handleContactSubmit} noValidate>
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="terminal-dot red-dot" />
                      <span className="terminal-dot yellow-dot" />
                      <span className="terminal-dot green-dot" />
                    </div>
                    <span className="terminal-title">TERMINAL // TRANSMIT MESSAGE</span>
                  </div>

                  {/* Required Email Field */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      YOUR EMAIL ADDRESS <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      placeholder="e.g. yourname@domain.com"
                      className={`form-input ${emailError ? 'input-error' : ''}`}
                      autoComplete="email"
                    />
                    {emailError && <span className="error-hint" role="alert">{emailError}</span>}
                  </div>

                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      YOUR NAME OR ORGANIZATION
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Hiring Team / Company Name"
                      className="form-input"
                      autoComplete="name"
                    />
                  </div>

                  {/* Topic Selector */}
                  <div className="form-group">
                    <label className="form-label">OPPORTUNITY TYPE</label>
                    <div className="topic-pills">
                      {[
                        'Data Analytics Internship',
                        'Machine Learning Role',
                        'Project Collaboration',
                        'General Discussion'
                      ].map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          className={`topic-pill ${contactTopic === topic ? 'is-selected' : ''}`}
                          onClick={() => setContactTopic(topic)}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="contact-msg" className="form-label">
                      MESSAGE OR BRIEF
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Details on roles, project requirements, or questions..."
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="button button-primary form-submit-btn">
                    <span>Transmit to prasadgaburdeb@gmail.com</span>
                    <Send size={15} aria-hidden="true" />
                  </button>
                  <span className="submit-subtext">Requires your email address to establish contact.</span>
                </form>
              )}
            </div>
          </div>

          <div className="contact-bottom">
            <span><MapPin size={14} aria-hidden="true" />{PROFILE.location}</span>
            <span>OPEN TO LEARNING. READY TO CONTRIBUTE.</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home" aria-label="Deb Prasad Gabur Home">
          <span className="brand-mark">D<span className="brand-dot">.</span></span>
          <span className="brand-details">
            <span className="brand-name">{PROFILE.shortName}</span>
            <small className="brand-role">DATA · ANALYTICS · MACHINE LEARNING</small>
          </span>
        </a>
        <span>DESIGNED &amp; BUILT WITH INTENTION // V2</span>
        <a href="#home" aria-label="Scroll back to the top of the page">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;

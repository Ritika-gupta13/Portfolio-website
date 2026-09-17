import { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Mail, MoveRight } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import './App.css';

import purpleFluid from './assets/purple_fluid.png';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return null;
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RITIKA.</div>
      <div className="nav-links glass-panel">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>
      <div className="nav-action">
        <a href="mailto:ritika.g12019@gmail.com" className="btn-primary glass-panel">Contact Me</a>
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);
  const fluidOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <>
      <section id="hero" className="hero">
        <div className="fluid-wrapper">
          <motion.img 
            src={purpleFluid} 
            alt="Abstract Fluid" 
            className="hero-fluid-img" 
            style={{ y: y1, scale, opacity: fluidOpacity }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          style={{ opacity: contentOpacity }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        <div className="badge glass-panel">Full-Stack Developer</div>
        <h1 className="hero-title">
          <span>FUTURE OF</span><br/>
          <span className="text-outline">DEVELOPMENT</span>
        </h1>
        <p className="subtitle">
          I am Ritika Gupta, a B.Tech CSE student building highly scalable web applications 
          and immersive digital experiences.
        </p>
        
          <div className="scroll-indicator">
            <ArrowDown className="animate-bounce" />
            <span>Scroll to explore</span>
          </div>
        </motion.div>
      </section>
    </>
  );
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="bento-grid">
        <motion.div 
          className="bento-item glass-panel summary-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Who I Am</h3>
          <p>
            Second-year B.Tech Computer Science and Engineering student at VIT Bhopal University. 
            I have a strong foundation in Python and have built two complete Flask web applications. 
            I am currently exploring modern full-stack development to build highly interactive and immersive digital experiences.
          </p>
        </motion.div>
        
        <motion.div 
          className="bento-item glass-panel edu-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3>Education</h3>
          <div className="edu-list">
            <div className="edu-item">
              <h4>VIT Bhopal University</h4>
              <span>2025 - 2029</span>
              <p>B.Tech in Computer Science & Engineering</p>
            </div>
            <div className="edu-item">
              <h4>Delhi Public School, Faridabad</h4>
              <span>High School</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "OptiStock",
      desc: "Developed a full-stack inventory system to manage stock, products, and inventory workflows.",
      link: "https://optistock-c4j8.onrender.com/"
    },
    {
      title: "SehatPal",
      desc: "Built a web-based emergency healthcare platform enabling quick access to medical information.",
      link: "https://sehatpal-2.onrender.com/"
    },
    {
      title: "SavJal",
      desc: "built a prediction tool for the amount of money needed for RTRWH",
      link : "https://rtrhw-alternate.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">SELECTED <span className="text-outline">WORKS</span></h2>
      <div className="projects-list">
        {projects.map((proj, i) => (
          <motion.a 
            href={proj.link} 
            target="_blank" 
            rel="noreferrer" 
            className="project-card glass-panel"
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
            <div className="project-arrow">
              <MoveRight size={32} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Python Programming", "Web Application Design", "Database Management", "JavaScript Libraries", 
    "HTML5", "Deployment Pipelines"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">TECHNICAL <span className="text-outline">SKILLS</span></h2>
      <div className="skills-cloud">
        {skills.map((skill, i) => (
          <motion.div 
            className="skill-tag glass-panel" 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, borderColor: "var(--accent-purple)" }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section">
       <h2 className="section-title">EXPERIENCE & <span className="text-outline">ACHIEVEMENTS</span></h2>
       <div className="timeline">
          <motion.div 
            className="timeline-item glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>GSSoC'26 Contributor</h3>
            <p>Active contributor to open-source projects, collaborating with developers worldwide.</p>
          </motion.div>
          <motion.div 
            className="timeline-item glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>SSOC'26 Contributor</h3>
            <p>Contributed to impactful projects and gained hands-on experience in modern tech stacks.</p>
          </motion.div>
          <motion.div
            className="timeline-item glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="award-box">
              <div className="award-text">
                <h3>SVH WINNERS 2026 🏆</h3>
                <p>We created Surya—an AI-driven Virtual Power Plant (VPP) platform that aggregates hybrid renewable energy assets (Solar, Wind, and Battery Storage). It combines predictive forecasting, continuous digital twin simulations, and multi-objective optimization to route energy efficiently, cut carbon footprints, and reduce grid costs in real time.</p>
              </div>
              <div className="award-image-wrap">
                <img src="/winner.jpg" alt="SVH Winners 2026" className="award-image" />
              </div>
            </div>
          </motion.div>

       </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-title">LET'S <span className="text-outline">CONNECT</span></h2>
      <div className="social-links">
        <a href="https://github.com/Ritika-gupta13" target="_blank" rel="noreferrer" className="social-icon glass-panel">
          <GithubIcon />
        </a>
        <a href="https://linkedin.com/in/ritika-gupta-85b1a0232" target="_blank" rel="noreferrer" className="social-icon glass-panel">
          <LinkedinIcon />
        </a>
        <a href="mailto:ritika.g12019@gmail.com" className="social-icon glass-panel">
          <Mail />
        </a>
      </div>
      <p className="copyright">© 2026 Ritika Gupta. All rights reserved.</p>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="portfolio-container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </>
  );
}

export default App;

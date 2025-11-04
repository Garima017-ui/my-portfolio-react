import React from "react";
import "./project.css";

export default function Projects() {
  const projects = [
    {
      title: "🧭 AbleAid — Accessibility Assistant",
      desc: "An inclusive web app designed to assist visually and speech-impaired users through voice-guided navigation, speech-to-text, OCR-based document reading, and adaptive dark/light themes.",
      tech: ["React", "Tesseract.js", "Web Speech API", "CSS", "Accessibility Design"],
      link: "https://ableaid.netlify.app/", // Replace with your deployed AbleAid URL
      github: "https://github.com/Garima017-ui/ableaid", // Replace with your repo link
    },
    {
      title: "💼 Personal Portfolio Website",
      desc: "A dynamic and fully responsive portfolio built using React, showcasing professional projects, skills, and achievements with smooth animations, theme support, and modern UI/UX design principles.",
      tech: ["React", "AOS", "CSS", "TypewriterJS"],
      link: "https://garimaportfolio1.netlify.app/", // Your portfolio live link
      github: "https://github.com/Garima017-ui/my-portfolio-react",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Featured Projects 💻</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index} data-aos="fade-up">
            <div className="project-header">
              <h3>{proj.title}</h3>
            </div>
            <p className="project-desc">{proj.desc}</p>
            <div className="tech-stack">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.link} target="_blank" rel="noreferrer" className="view-btn">
                🌐 View Live
              </a>
              <a href={proj.github} target="_blank" rel="noreferrer" className="code-btn">
                💻 Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

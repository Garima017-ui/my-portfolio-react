import React from "react";
import "./project.css";

export default function Projects() {
  const projects = [
    {
      title: "🌐 Smart Grocery Comparator",
      desc: "A full-stack web app that compares grocery prices and nutrition data from multiple stores in real time using Angular, Flask, and MongoDB.",
      tech: ["Angular", "Flask", "MongoDB", "REST API"],
      link: "https://github.com/Garima017-ui/smart-grocery-comparator",
    },
    {
      title: "🧠 Real-Time Feedback Analyzer",
      desc: "An AI-powered system that performs sentiment analysis on live customer feedback using Flask, NLP, and D3.js visualizations.",
      tech: ["Python", "Flask", "NLP", "D3.js"],
      link: "https://github.com/Garima017-ui/feedback-analyzer",
    },
    {
      title: "📱 Ionic Fitness Tracker",
      desc: "A mobile app built with Ionic and Angular for tracking fitness goals, daily steps, and health insights with a clean UI.",
      tech: ["Ionic", "Angular", "TypeScript"],
      link: "https://github.com/Garima017-ui/fitness-tracker",
    },
    {
      title: "📚 Library Reservation System",
      desc: "A Spring Boot + Thymeleaf web app for managing library book reservations, edits, and deletions with H2 database.",
      tech: ["Spring Boot", "Thymeleaf", "H2"],
      link: "https://github.com/Garima017-ui/library-reservation",
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
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="view-btn"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

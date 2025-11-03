import React from "react";
import "./project.css";

export default function Projects() {
  const projects = [
    {
      title: "Smart Grocery Comparator",
      desc: "A web app comparing groceries based on prices and nutrition data using Angular and Flask API.",
      link: "https://github.com/Garima017-ui/grocery-comparator",
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React, featuring smooth animations and pastel gradients.",
      link: "https://garima017-ui.github.io/my-portfolio-react/",
    },
    {
      title: "Book Review System",
      desc: "A Spring Boot web app with authentication and dynamic reviews using Thymeleaf templates.",
      link: "https://github.com/Garima017-ui/bookreview",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-down">✨ My Projects ✨</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i} data-aos="zoom-in">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <button className="project-btn">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

const projects = [
  { title: "Angular Portfolio App", description: "A personal portfolio built with Angular & Material Design." },
  { title: "Smart Grocery Comparator", description: "Full-stack app comparing grocery prices & nutrition using Flask & Angular." },
  { title: "Book Review System", description: "Spring Boot + Thymeleaf app for managing book reviews." },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
 
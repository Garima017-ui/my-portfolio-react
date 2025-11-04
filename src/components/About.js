import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="about-section" id="about">
      <h2 className="section-title" data-aos="fade-up">
        About Me
      </h2>

      <div className="about-container" data-aos="fade-up">
        <div className="about-card">
          <h3>💫 Who I Am</h3>
          <p>
            I’m <b>Garima Verma</b>, a software developer passionate about
            creating accessible, user-friendly, and visually engaging web
            experiences. I love transforming complex ideas into simple,
            effective solutions.
          </p>
        </div>

        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>
            <b>Sheridan College</b> — Computer Programming (2023–2025)
            <br />
            Focused on Full-Stack Development, Databases, and Software Design.
          </p>
        </div>

        <div className="about-card">
          <h3>🧠 Skills</h3>
          <ul>
            <li>Frontend: React, Angular, TypeScript, HTML, CSS</li>
            <li>Backend: Java, Python, Spring Boot, Flask</li>
            <li>Database: MySQL, Oracle, MongoDB</li>
            <li>Tools: Git, Figma, VS Code, Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

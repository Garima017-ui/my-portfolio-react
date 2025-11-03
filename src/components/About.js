import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

export default function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.4 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      className={`about ${isVisible ? "spread" : "stack"}`}
      id="about"
    >
      <div className="about-container">
        <div className="about-card">
          <h3>💫 About Me</h3>
          <p>
            Hi, I’m <b>Garima Verma</b> — a creative and passionate developer
            who loves designing smooth, modern, and user-friendly experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>
            <b>Sheridan College</b> — Computer Programming Diploma (2023–2025)
            <br />
            Focused on full-stack web development, databases, and software
            design.
          </p>
        </div>

        <div className="about-card">
          <h3>🧠 Skills</h3>
          <ul>
            <li>Frontend: React, Angular, HTML, CSS, TypeScript</li>
            <li>Backend: Java, Python, Spring Boot, Flask</li>
            <li>Database: MySQL, Oracle, MongoDB</li>
            <li>Tools: Git, VS Code, Figma, Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>
      <p>I'm always open to collaboration, new ideas, and exciting projects!</p>

      <div className="contact-buttons">
        <a href="mailto:garima.verma@example.com" className="contact-btn email">
          ✉️ Email Me
        </a>
        <a href="https://linkedin.com/in/garima-verma" target="_blank" rel="noreferrer" className="contact-btn linkedin">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/Garima017-ui" target="_blank" rel="noreferrer" className="contact-btn github">
          💻 GitHub
        </a>
      </div>
    </section>
  );
}

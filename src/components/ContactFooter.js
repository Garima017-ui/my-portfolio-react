import React from "react";
import "./ContactFooter.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function ContactFooter() {
  return (
    <section className="contact-footer" id="contact">
      <div className="contact-container">
        <h2 className="contact-title" data-aos="fade-up">
          Let’s Connect 💬
        </h2>
        <p className="contact-text" data-aos="fade-up" data-aos-delay="100">
          I love collaborating on creative ideas and exciting projects!  
          Feel free to reach out for work inquiries, design discussions,  
          or just to say hello 👋.
        </p>

        {/* Contact Buttons */}
        <div className="contact-buttons" data-aos="zoom-in" data-aos-delay="200">
          <a href="mailto:garimaverma@gmail.com" className="contact-btn">
            <FaEnvelope /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/garima-verma"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/Garima017-ui"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Garima Verma | Made with 💖 using React</p>
      </footer>
    </section>
  );
}

import React from "react";
import "./ContactFooter.css";

export default function ContactFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <h2>Let’s Build Something Great Together 🚀</h2>
        <p>
          I’m always open to freelance opportunities, collaborations, and
          projects that create a real impact. If you’re a small business owner,
          startup founder, or creative professional — I’d love to help you bring
          your vision online with a modern, responsive website.
        </p>

        <p className="hire-text">
          💌 For project inquiries, reach me at{" "}
          <a href="mailto:garima2004verma@gmail.com" className="email-link">
            garima2004verma@gmail.com
          </a>
        </p>

        <div className="social-links">
          <a
            href="https://linkedin.com/in/garimaverma"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Garima017-ui"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Garima Verma | Web Developer & Designer
          | Empowering Small Businesses 🌍
        </p>
      </div>
    </footer>
  );
}

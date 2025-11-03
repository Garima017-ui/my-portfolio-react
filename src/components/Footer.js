import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Garima Verma</h3>
        <p className="footer-text">
          Creating digital experiences that inspire and empower.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Garima017-ui"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/garima-verma"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:garima.verma@example.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Garima Verma • All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

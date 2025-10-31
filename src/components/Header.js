import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Garima Verma</h1>
      <p>Software Developer | Web Designer | Tech Enthusiast</p>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

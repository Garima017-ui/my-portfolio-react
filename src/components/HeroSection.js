import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HerSection.css";
import garimaImage from "../assets/Garima1.jpeg";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="hero" id="home">
      {/* 🌟 Top Floating Cards */}
      <div className="corner-card left" data-aos="fade-down-right">
        <h4>💻 What I Build</h4>
        <p>Interactive web apps using React, Angular, and modern UI libraries.</p>
        <p>Transforming ideas into responsive, accessible experiences.</p>
      </div>

      <div className="corner-card right" data-aos="fade-down-left">
        <h4>🚀 What I Do</h4>
        <p>Design, code, and deploy full-stack apps using Java, Python, and APIs.</p>
        <p>Focus on usability, automation, and meaningful digital impact.</p>
      </div>

      {/* 👩🏻 Profile + Animation + Text */}
      <div className="hero-content" data-aos="fade-up">
        <img src={garimaImage} alt="Garima Verma" className="hero-image" />

        <div className="bunny" data-aos="zoom-in">
          <Lottie
            animationData={null}
            path="https://assets4.lottiefiles.com/packages/lf20_3vbOcw.json"
            loop
            autoplay
            style={{ width: "160px", height: "160px" }}
          />
        </div>

        <h1>
          Hi, I’m <span className="highlight">Garima Verma</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "Frontend Developer 💻",
              "Full-Stack Enthusiast 🌐",
              "UI/UX Designer 🎨",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h2>

        <p className="tagline" data-aos="fade-in">
          Creating smooth, modern, and inclusive digital experiences ✨
        </p>

        <div className="hero-buttons" data-aos="fade-up">
          <a href="#projects" className="button glow">
            See My Work
          </a>
          <a href="#contact" className="button outline">
            Let’s Connect
          </a>
        </div>
      </div>

      {/* 🎨 Animated Background Shapes */}
      <div className="floating-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HerSection.css";


import garimaImage from "../assets/Garima.jpeg";



//const bunnyAnimation = "https://assets4.lottiefiles.com/packages/lf20_3vbOcw.json";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="hero" id="home">
 
  {/* 🎯 Top Skill Posters */}
<div className="corner-poster left" data-aos="fade-down-right">
  <h4>💻 Frontend Developer</h4>
  <p>React • Angular • TypeScript • JavaScript</p>
  <p>HTML • CSS • Bootstrap • Tailwind</p>
</div>

<div className="corner-poster right" data-aos="fade-down-left">
  <h4>🎨 Creative Coder & Tech Enthusiast</h4>
  <p>UI/UX • Figma • Responsive Design</p>
  <p>Python • Java • SQL • REST APIs</p>
</div>

  {/* 👩🏻 Profile + Bunny + Text */}
  <div className="hero-content" data-aos="fade-up">
    <img
  src={garimaImage}
  alt="Garima Verma"
  className="hero-image"
/>

<div className="bunny" data-aos="zoom-in">
  <Lottie
    animationData={null}
    path="https://assets4.lottiefiles.com/packages/lf20_3vbOcw.json"
    loop={true}
    autoplay={true}
    style={{ width: "180px", height: "180px" }}
  />
</div>



    <h1>
      Hi, I’m <span className="highlight">Garima Verma</span>
    </h1>
    <h2>
      <Typewriter
        words={[
          "Software Developer 💻",
          "Web Designer 🎨",
          "Creative Problem Solver 💡",
        ]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>

    <p className="tagline">
      Crafting smooth, modern, and user-friendly digital experiences ✨
    </p>

    <a href="#projects">
      <button className="button glow">See My Work</button>
    </a>
  </div>

  {/* Floating pastel shapes */}
  <div className="floating-shapes">
    <div className="shape pink"></div>
    <div className="shape blue"></div>
    <div className="shape yellow"></div>
  </div>
</section>

    
  );
}

import React from "react";
import HeroSection from "./components/HeroSection.js";
import ContactFooter from "./components/ContactFooter.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";


import "./App.css";

function App() {
  return (
    <div className="App">
  
      <HeroSection />
      <About />
      <Projects />

      <ContactFooter/>
    </div>
  );
}

export default App;

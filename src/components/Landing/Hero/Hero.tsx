import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    // Hero Section
    <section className="hero-section">
      <div className="large-img">All about tech !</div>
      <div className="small-images">
        <div className="small-img" id="small-img-1"></div>
        <div className="small-img" id="small-img-2"></div>
        <div className="small-img" id="small-img-3"></div>
        <div className="small-img" id="small-img-4"></div>
      </div>
    </section>
  );
};

export default Hero;

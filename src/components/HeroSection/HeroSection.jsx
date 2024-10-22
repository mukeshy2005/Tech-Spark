import React from "react";
import "./HeroSection.css"; // Ensure you update this file with your styles
import CollegePic from '/collagepic.png'

const HeroSection = () => {
  return (
    <section className="creative-hero--section">
      <div className="bg-overlay ">
        <img
          src={CollegePic}
          alt="Your Custom Background"
          className="custom-img"
        />
      </div>
      <div className="auto-container">
        <div className="content-box">
          <h1 className="hero-title">Welcome to Tech Spark !!</h1>
          <div className="hero-desc" style={{fontFamily:"cursive"}}>
          Igniting Minds, Sparking Innovation – Join Tech Spark and shape the future of technology with creativity and collaboration.
          </div>
          <div className="btn-box">
            <a className="hero-cta" href="#">
              <span className="cta-title">
                Discover More <i className="fa fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default HeroSection;

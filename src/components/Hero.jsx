import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="img/photo1.jpg" 
          alt="Students"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Admissions Open 2024-25</div>
        <h1 className="hero-title">The pursuit of excellence begins here</h1>
        <p className="hero-subtitle">
          Empowering young minds through world-class education, character development, 
          and holistic growth since 2000. Where every student discovers their potential.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn-hero-primary">
            Start Your Journey
            <span>→</span>
          </a>
          <a href="#" className="btn-hero-secondary">Schedule a Visit</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

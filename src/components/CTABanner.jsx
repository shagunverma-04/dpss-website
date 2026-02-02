import React from 'react';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2>Begin Your Child's Journey to Excellence</h2>
        <p>
          Join a community dedicated to nurturing young minds and shaping future leaders. 
          Apply now for Academic Year 2024-25.
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn-hero-primary">Apply for Admission</a>
          <a href="#" className="btn-hero-secondary">Schedule Campus Tour</a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

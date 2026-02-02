import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description: 'Comprehensive CBSE curriculum delivered by 50+ highly qualified educators with proven track record of 100% results.'
    },
    {
      icon: '🌟',
      title: 'Holistic Development',
      description: 'Focus on character building, leadership skills, and values that shape responsible global citizens.'
    },
    {
      icon: '🏆',
      title: 'World-Class Facilities',
      description: 'State-of-the-art infrastructure including sports grounds, digital classrooms, and modern laboratories.'
    }
  ];

  return (
    <section className="welcome-section">
      <div className="section-container">
        <div className="welcome-grid">
          <div className="welcome-image">
            <img 
              src="img/photo2.jpg" 
              alt="School Building"
            />
            <div className="welcome-badge">
              <div className="badge-number">2000</div>
              <div className="badge-text">Established</div>
            </div>
          </div>
          <div className="welcome-content">
            <div className="section-label">Welcome to DPS</div>
            <h2 className="section-title">Delivering excellence in education since 2000</h2>
            <p className="section-description">
              Delhi Public Secondary School, Robertsganj is committed to providing world-class 
              education that prepares students for the challenges of tomorrow. Our unique approach 
              combines academic rigor with character development.
            </p>
            
            <div className="feature-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

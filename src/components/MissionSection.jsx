import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  const missions = [
    {
      number: '01',
      title: 'Academic Excellence',
      description: 'To achieve the highest standards of excellence in education, preparing students to succeed in an increasingly competitive global environment.'
    },
    {
      number: '02',
      title: 'Character & Values',
      description: 'To make our students capable and responsible citizens through cultivation of Indian ethos, values, and culture with passion.'
    },
    {
      number: '03',
      title: 'Global Competitiveness',
      description: 'To prepare students to be globally competitive while remaining rooted in their cultural heritage and national identity.'
    },
    {
      number: '04',
      title: 'Social Responsibility',
      description: 'To develop environmental consciousness and prepare students to serve others graciously and selflessly in their communities.'
    }
  ];

  return (
    <section className="mission-section">
      <div className="section-container">
        <div className="section-header-center">
          <div className="section-label">Our Mission</div>
          <h2 className="section-title">Guiding Principles That Drive Us</h2>
          <p className="section-description">
            Our mission is to create well-rounded individuals who excel academically and 
            contribute positively to society.
          </p>
        </div>

        <div className="mission-grid">
          {missions.map((mission, index) => (
            <div key={index} className="mission-card">
              <div className="mission-number">{mission.number}</div>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

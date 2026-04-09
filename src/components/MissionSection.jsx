import React from 'react';
import './MissionSection.css';
import useInView from '../hooks/useInView';

const missions = [
  {
    number: '01',
    title: 'Academic Excellence',
    description: 'Achieving the highest standards in education — preparing students to succeed in a competitive global environment through rigorous CBSE learning.'
  },
  {
    number: '02',
    title: 'Character & Values',
    description: 'Cultivating Indian ethos, values, and culture with passion — making our students capable, ethical, and responsible citizens.'
  },
  {
    number: '03',
    title: 'Global Competitiveness',
    description: 'Preparing students to compete globally while remaining rooted in their cultural heritage, national identity, and community.'
  },
  {
    number: '04',
    title: 'Social Responsibility',
    description: 'Developing environmental consciousness and the spirit to serve others graciously — building leaders who give back.'
  }
];

const MissionSection = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.08 });

  return (
    <section className="mission-section" ref={sectionRef}>
      {/* Background ghost text */}
      <div className="mission-ghost">MISSION</div>

      <div className="section-container mission-inner">
        {/* Top header */}
        <div className={`mission-header ${inView ? 'ms-reveal in-view' : 'ms-reveal'}`}>
          <span className="section-label section-label--light">Our Mission</span>
          <h2 className="section-title section-title--white">
            Four principles that<br />guide everything we do
          </h2>
        </div>

        {/* Mission cards */}
        <div className="mission-grid">
          {missions.map((m, i) => (
            <div
              key={i}
              className={`mission-card ${inView ? 'ms-reveal in-view' : 'ms-reveal'}`}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="mission-num">{m.number}</div>
              <div className="mission-divider" />
              <h3 className="mission-title">{m.title}</h3>
              <p className="mission-desc">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom accent bar */}
        <div className={`mission-accent-bar ${inView ? 'ms-reveal in-view delay-6' : 'ms-reveal'}`}>
          <div className="mission-accent-text">
            "Education is not the filling of a bucket, but the lighting of a fire."
          </div>
          <div className="mission-accent-logo">DPS Robertsganj · Est. 2000</div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

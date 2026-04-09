import React from 'react';
import './Marquee.css';

const items = [
  'Excellence Since 2000',
  'CBSE Affiliated',
  '100% Board Results',
  '1000+ Students',
  '50+ Expert Faculty',
  'Archery · Robotics · Swimming',
  'Admissions Open 2025–26',
  'Holistic Education',
  'Smart Classrooms',
  'Character · Courage · Creativity',
];

const Marquee = () => {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

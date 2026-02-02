import React from 'react';
import './QuickStats.css';

const QuickStats = () => {
  const stats = [
    { number: '50+', label: 'Expert Faculty' },
    { number: '1000+', label: 'Students' },
    { number: '100%', label: 'Board Results' },
    { number: '15+', label: 'Years of Excellence' }
  ];

  return (
    <section className="quick-stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;

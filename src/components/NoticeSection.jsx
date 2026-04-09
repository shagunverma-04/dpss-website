import React from 'react';
import './NoticeSection.css';
import useInView from '../hooks/useInView';

const notices = [
  {
    category: 'Admissions',
    emoji: '🏫',
    title: 'Admission Enquiry Open',
    description: 'Applications are now being accepted for the 2025–26 academic year. Limited seats available across all grades. Early enquiry recommended.',
    link: '#',
    accent: '#075133'
  },
  {
    category: 'Resources',
    emoji: '📄',
    title: 'Download Brochure',
    description: 'Get comprehensive information about our curriculum, facilities, fee structure, and the complete admission process.',
    link: '#',
    accent: '#D4A574'
  },
  {
    category: 'Achievement',
    emoji: '🏆',
    title: 'Class X Toppers 2024',
    description: 'Congratulations to all our students for achieving outstanding results with 100% pass percentage in CBSE Board Examinations.',
    link: '#',
    accent: '#1565C0'
  }
];

const NoticeSection = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="notice-section" ref={sectionRef}>
      <div className="section-container">

        {/* Header */}
        <div className={`notice-header ${inView ? 'ns-reveal in-view' : 'ns-reveal'}`}>
          <div className="notice-header-left">
            <span className="section-label">Latest Updates</span>
            <h2 className="section-title">Notice Board</h2>
          </div>
          <a href="#" className="notice-view-all">
            View all updates
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Cards */}
        <div className="notice-grid">
          {notices.map((n, i) => (
            <a
              href={n.link}
              key={i}
              className={`notice-card ${inView ? 'ns-reveal in-view' : 'ns-reveal'}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s`, '--notice-accent': n.accent }}
            >
              <div className="notice-card-top">
                <span className="notice-emoji">{n.emoji}</span>
                <span className="notice-category">{n.category}</span>
              </div>
              <h3 className="notice-title">{n.title}</h3>
              <p className="notice-desc">{n.description}</p>
              <div className="notice-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="notice-bar" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NoticeSection;

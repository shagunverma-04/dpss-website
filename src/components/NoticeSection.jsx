import React from 'react';
import './NoticeSection.css';

const NoticeSection = () => {
  const notices = [
    {
      date: 'Admissions 2024-25',
      title: 'Admission Enquiry Open',
      description: 'Applications are now being accepted for the upcoming academic year. Limited seats available across all grades.',
      link: '#'
    },
    {
      date: 'School Resources',
      title: 'Download Brochure',
      description: 'Get comprehensive information about our curriculum, facilities, fee structure, and admission process.',
      link: '#'
    },
    {
      date: 'Achievements',
      title: 'Class X Toppers 2024',
      description: 'Congratulations to our students for achieving outstanding results with 100% pass percentage in board examinations.',
      link: '#'
    }
  ];

  return (
    <section className="notice-section">
      <div className="section-container">
        <div className="section-header-center">
          <div className="section-label">Latest Updates</div>
          <h2 className="section-title">Notice Board</h2>
          <p className="section-description">
            Stay informed with our latest announcements, events, and important information.
          </p>
        </div>

        <div className="notice-grid">
          {notices.map((notice, index) => (
            <div key={index} className="notice-card">
              <div className="notice-date">{notice.date}</div>
              <h3 className="notice-title">{notice.title}</h3>
              <p className="notice-description">{notice.description}</p>
              <a href={notice.link} className="notice-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;

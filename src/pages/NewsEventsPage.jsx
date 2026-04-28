import React, { useState } from 'react';
import './NewsEventsPage.css';
import Icon from '../components/Icon';

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const announcements = [
    {
      category: 'admissions',
      tag: 'Admissions',
      date: 'January 2025',
      title: 'Admissions Open for Session 2025–26',
      text: 'Enquiries for the new academic session are now being accepted. Seats are limited — we encourage early registration. Visit the school office or contact us by phone or email to begin the process.',
      iconName: 'building'
    },
    {
      category: 'results',
      tag: 'Results',
      date: 'May 2024',
      title: 'Class X Board Results — Outstanding Performance',
      text: 'We are proud to share that our Class X students delivered an outstanding performance in the CBSE Board Examinations 2024. Congratulations to all students and their families on this achievement.',
      iconName: 'trophy'
    },
    {
      category: 'events',
      tag: 'Event',
      date: 'March 2025',
      title: 'Annual Day 2025 — Save the Date',
      text: 'Our much-anticipated Annual Day celebration will be held in March 2025. Students are already in rehearsals for a spectacular evening of performances. Details to be shared via the school diary.',
      iconName: 'star'
    },
    {
      category: 'notice',
      tag: 'Notice',
      date: 'February 2025',
      title: 'Parent-Teacher Meet — Term II',
      text: 'The Term II Parent-Teacher Meet is scheduled for February 2025. All parents and guardians are requested to attend and review their child\'s progress report with the respective class teacher.',
      iconName: 'clipboardList'
    },
    {
      category: 'events',
      tag: 'Event',
      date: 'January 2025',
      title: 'Republic Day Celebrations',
      text: 'Republic Day was celebrated with great pride and patriotic fervour at DPS Robertsganj. Students presented cultural programmes, patriotic songs, and a stirring flag-hoisting ceremony.',
      iconName: 'flag'
    },
    {
      category: 'notice',
      tag: 'Notice',
      date: 'December 2024',
      title: 'Winter Break Schedule 2024',
      text: 'The school will observe its winter break from 25th December 2024 to 1st January 2025. Classes will resume on 2nd January 2025. We wish all students and families a warm and joyful holiday season.',
      iconName: 'calendar'
    }
  ];

  const upcomingEvents = [
    { month: 'APR', date: '14', title: 'New Academic Session Begins', desc: 'Session 2025–26 commences for all classes.', type: 'Academic' },
    { month: 'APR', date: '25', title: 'Class I Orientation Day', desc: 'Welcome programme for new Class I students and their parents.', type: 'Event' },
    { month: 'MAY', date: '10', title: 'Inter-House Sports Competition', desc: 'Track and field events across all four houses.', type: 'Sports' },
    { month: 'JUN', date: '15', title: 'Science & Technology Fest', desc: 'Student-led project exhibition and inter-class quiz competition.', type: 'Academic' },
    { month: 'JUL', date: '26', title: 'Kargil Vijay Diwas Assembly', desc: 'Special assembly and cultural programme to honour our heroes.', type: 'Cultural' },
    { month: 'AUG', date: '15', title: 'Independence Day Celebration', desc: 'Flag hoisting, march-past, and patriotic performances.', type: 'Cultural' }
  ];

  const achievements = [
    { iconName: 'award',   title: 'District-Level Archery Champions',  text: '3 students from DPS Robertsganj won gold at the District Archery Championship 2024, bringing honour to the school.' },
    { iconName: 'cpu',     title: 'Robotics Showcase — State Level',   text: 'Our robotics team presented their project at the state-level innovation showcase, receiving commendation from the jury.' },
    { iconName: 'mic',     title: 'Debate Competition — Regional Winner', text: 'A Class X student won first place at the Regional Interschool Debate Competition, competing against 24 other schools.' },
    { iconName: 'palette', title: 'Art Exhibition Recognised',         text: 'The school\'s annual art exhibition was featured in the local press, with several student artworks selected for the district gallery.' }
  ];

  const tabs = [
    { key: 'all',        label: 'All' },
    { key: 'admissions', label: 'Admissions' },
    { key: 'results',    label: 'Results' },
    { key: 'events',     label: 'Events' },
    { key: 'notice',     label: 'Notices' }
  ];

  const filtered = activeTab === 'all'
    ? announcements
    : announcements.filter(a => a.category === activeTab);

  return (
    <div className="news-events-page">

      {/* Hero */}
      <div className="ne-hero">
        <img
          src="img/photo2.jpg"
          alt="DPS Robertsganj"
          className="ne-hero-bg-img"
        />
        <div className="ne-hero-overlay" />
        <div className="section-container ne-hero-content">
          <div className="section-label">News & Events</div>
          <h1 className="ne-hero-title">Stay Connected<br />With Our Community</h1>
          <p className="ne-hero-sub">
            From academic milestones to cultural celebrations, from important notices to
            student achievements — this is your window into the vibrant life of DPS Robertsganj.
          </p>
        </div>
      </div>

      {/* Section 1: Announcements */}
      <section className="ne-section bg-light">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">Latest Updates</div>
            <h2 className="section-title">Announcements & Notices</h2>
            <p className="section-description">
              Stay up to date with the latest news, notices, and announcements from the school.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="ne-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`ne-tab ${activeTab === tab.key ? 'ne-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="ne-announcements-grid">
            {filtered.map((item, i) => (
              <div key={i} className="ne-announcement-card">
                <div className="ne-card-header">
                  <div className="ne-card-icon">
                    <Icon name={item.iconName} size={22} />
                  </div>
                  <div>
                    <span className="ne-card-tag">{item.tag}</span>
                    <span className="ne-card-date">{item.date}</span>
                  </div>
                </div>
                <h3 className="ne-card-title">{item.title}</h3>
                <p className="ne-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Upcoming Events */}
      <section className="ne-section bg-white">
        <div className="section-container">
          <div className="section-header-center">
            <div className="section-label">School Calendar</div>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-description">
              Mark your calendars — here is a look at what is coming up in the months ahead.
              Detailed information for each event will be shared via the school diary.
            </p>
          </div>

          <div className="ne-events-list">
            {upcomingEvents.map((ev, i) => (
              <div key={i} className="ne-event-row">
                <div className="ne-event-date-block">
                  <div className="ne-event-month">{ev.month}</div>
                  <div className="ne-event-day">{ev.date}</div>
                </div>
                <div className="ne-event-divider" />
                <div className="ne-event-body">
                  <span className={`ne-event-type ne-event-type--${ev.type.toLowerCase()}`}>{ev.type}</span>
                  <h3 className="ne-event-title">{ev.title}</h3>
                  <p className="ne-event-desc">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Achievements */}
      <section className="ne-section bg-dots">
        <div className="section-container">
          <div className="section-header-center">
            <div className="section-label">Student Excellence</div>
            <h2 className="section-title">Recent Achievements</h2>
            <p className="section-description">
              Our students continue to make us proud — in competitions, on the sports field,
              and wherever they choose to shine. Here is a selection of recent highlights.
            </p>
          </div>

          <div className="ne-achievements-grid">
            {achievements.map((ach, i) => (
              <div key={i} className="ne-achievement-card">
                <div className="ne-ach-icon">
                  <Icon name={ach.iconName} size={32} />
                </div>
                <h3 className="ne-ach-title">{ach.title}</h3>
                <p className="ne-ach-text">{ach.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Notice Board CTA */}
      <section className="ne-section bg-green-tint">
        <div className="section-container">
          <div className="ne-notice-banner">
            <div className="ne-notice-left">
              <div className="section-label">Stay Informed</div>
              <h2 className="ne-notice-title">Never Miss an Update</h2>
              <p className="ne-notice-text">
                Important school notices and circulars are communicated through the school diary
                and at the notice board located near the school office. Parents are encouraged to
                check the school diary daily and attend Parent-Teacher Meets regularly.
              </p>
            </div>
            <div className="ne-notice-right">
              <div className="ne-contact-info-card">
                <div className="ne-contact-row">
                  <span className="ne-contact-icon"><Icon name="phone" size={18} /></span>
                  <div>
                    <div className="ne-contact-label">School Office</div>
                    <div className="ne-contact-value">+91 78391 83961</div>
                  </div>
                </div>
                <div className="ne-contact-row">
                  <span className="ne-contact-icon"><Icon name="mail" size={18} /></span>
                  <div>
                    <div className="ne-contact-label">Email Us</div>
                    <div className="ne-contact-value">delhipublicschoolrobertsganj@gmail.com</div>
                  </div>
                </div>
                <div className="ne-contact-row">
                  <span className="ne-contact-icon"><Icon name="clock" size={18} /></span>
                  <div>
                    <div className="ne-contact-label">Office Hours</div>
                    <div className="ne-contact-value">Mon–Sat, 8:00 AM – 3:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NewsEventsPage;

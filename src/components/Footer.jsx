import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const quickLinks = [
    { text: 'About Us', page: 'home' },
    { text: 'Academics', page: 'academics' },
    { text: 'Admissions', page: 'admissions' },
    { text: 'Student Life', page: 'student-life' },
    { text: 'News & Events', page: 'news-events' },
  ];

  const academics = [
    { text: 'Fee Structure', page: 'academics' },
    { text: 'Curriculum', page: 'academics' },
    { text: 'Student Guidelines', page: 'academics' },
    { text: 'Parent Guidelines', page: 'academics' },
    { text: 'Certificate Process', page: 'academics' },
  ];

  const handleNav = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
{/*)
      {/* Top accent stripe 
      <div className="footer-top-stripe">
        <div className="footer-stripe-inner">
          <div className="footer-stripe-stat">
            <span className="stripe-num">25+</span>
            <span className="stripe-label">Years of Excellence</span>
          </div>
          <div className="footer-stripe-divider" />
          <div className="footer-stripe-stat">
            <span className="stripe-num">2000+</span>
            <span className="stripe-label">Students Enrolled</span>
          </div>
          <div className="footer-stripe-divider" />
          <div className="footer-stripe-stat">
            <span className="stripe-num">100%</span>
            <span className="stripe-label">Board Results</span>
          </div>
          <div className="footer-stripe-divider" />
          <div className="footer-stripe-stat">
            <span className="stripe-num">50+</span>
            <span className="stripe-label">Expert Educators</span>
          </div>
        </div>
      </div>
*/}
      {/* Main footer body */}
      <div className="footer-body">
        <div className="footer-container">
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/img/dpss-logo.png" alt="DPS Robertsganj" className="footer-logo-img" />
                <div>
                  <div className="footer-logo-name">DPS Robertsganj</div>
                  <div className="footer-logo-tagline">Excellence Since 2000</div>
                </div>
              </div>
              <p className="footer-about-text">
                Delhi Public Secondary School, Robertsganj is committed to nurturing young minds
                through world-class academics, character-building, and holistic development —
                preparing students to lead with confidence and compassion.
              </p>

              {/* Social icons */}
              <div className="footer-social">
                <a href="https://www.facebook.com/share/1AfnPkUbdF/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.07a.75.75 0 0 0 .92.92l5.223-1.464A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.376l-.36-.214-3.724 1.044 1.053-3.645-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-heading">
                <span className="footer-col-accent" />
                Quick Links
              </h4>
              <ul className="footer-links">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href="#" onClick={(e) => handleNav(e, link.page)}>
                      <svg className="link-arrow" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div className="footer-col">
              <h4 className="footer-col-heading">
                <span className="footer-col-accent" />
                Academics
              </h4>
              <ul className="footer-links">
                {academics.map((link, i) => (
                  <li key={i}>
                    <a href="#" onClick={(e) => handleNav(e, link.page)}>
                      <svg className="link-arrow" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-heading">
                <span className="footer-col-accent" />
                Get In Touch
              </h4>
              <ul className="footer-contact-list">
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span>Village Bijauli, near railwway Crossing<br/>Sonbhadra, Uttar Pradesh</span>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.4 2 2 0 0 1 3.66 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                    </svg>
                  </span>
                  <a href="tel:+917839183961">+91 78391 83961</a>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <a href="mailto:delhipublicschoolrobertsganj@gmail.com">delhipublicschoolrobertsganj<br/>@gmail.com</a>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </span>
                  <span>Mon – Sat &nbsp;·&nbsp; 8:00 AM – 3:00 PM</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <div className="footer-bottom-left">
            © {new Date().getFullYear()} Delhi Public Secondary School, Robertsganj. All Rights Reserved.
          </div>
          <div className="footer-bottom-right">
            <span>CBSE Affiliated</span>
            <span className="bottom-dot" />
            <span>Est. 2017</span>
            <span className="bottom-dot" />
            <span>Robertsganj, UP</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

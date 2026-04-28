import React from 'react';
import './CTABanner.css';
import useInView from '../hooks/useInView';
import Icon from './Icon';

const CTABanner = ({ onNavigate }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section className="cta-section" ref={ref}>
      {/* Photo background */}
      {/*<img
        src="img/484810766_967083908881871_3601280579614317961_n.jpg"
        alt="DPS Robertsganj"
        className="cta-bg-img"
      />*/}
      <div className="cta-overlay" />

      <div className={`section-container cta-inner ${inView ? 'cta-reveal in-view' : 'cta-reveal'}`}>
        {/* Left: big text */}
        <div className="cta-text">
          <span className="cta-eyebrow">Session 2026–27</span>
          <h2 className="cta-title">
            Begin your child's<br />
            journey to <span className="cta-highlight">excellence</span>
          </h2>
          <p className="cta-sub">
            Join a community dedicated to nurturing young minds and shaping future leaders.
            Seats are filling fast — apply today.
          </p>
          <div className="cta-actions">
            <a
              href="#"
              className="cta-btn cta-btn--primary"
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Apply for Admission
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#"
              className="cta-btn cta-btn--ghost"
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Schedule a Campus Tour
            </a>
          </div>
        </div>

        {/* Right: contact card */}
        <div className="cta-card">
          <div className="cta-card-label">Reach Us Directly</div>
          <div className="cta-contact-row">
            <span className="cta-contact-icon"><Icon name="phone" size={18} /></span>
            <div>
              <div className="cta-contact-title">Call Us</div>
              <a href="tel:+9178391 83961" className="cta-contact-val">+91 78391 83961</a>
            </div>
          </div>
          <div className="cta-card-divider" />
          <div className="cta-contact-row">
            <span className="cta-contact-icon"><Icon name="mail" size={18} /></span>
            <div>
              <div className="cta-contact-title">Email Us</div>
              <a href="mailto:delhipublicschoolrobertsganj@gmail.com" className="cta-contact-val">delhipublicschoolrobertsganj<br />@gmail.com</a>
            </div>
          </div>
          <div className="cta-card-divider" />
          <div className="cta-contact-row">
            <span className="cta-contact-icon"><Icon name="clock" size={18} /></span>
            <div>
              <div className="cta-contact-title">Office Hours</div>
              <div className="cta-contact-val">Mon–Sat · 8:00 AM – 3:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

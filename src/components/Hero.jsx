import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ onNavigate }) => {
  const headingRef = useRef(null);

  /* Stagger in the headline words on mount */
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const words = el.querySelectorAll('.hw');
    requestAnimationFrame(() => {
      words.forEach((w, i) => {
        setTimeout(() => w.classList.add('hw--visible'), 200 + i * 80);
      });
    });
  }, []);

  return (
    <section className="hero">
lo
      {/* Full-bleed background */}
      <div className="hero-bg">
        <img src="img/photo1.jpg" alt="DPS Robertsganj" className="hero-bg-img" />
      </div>

      {/* Layered overlays */}
      <div className="hero-overlay hero-overlay--top"    />
      <div className="hero-overlay hero-overlay--bottom" />
      <div className="hero-overlay hero-overlay--mid"   />

      {/* ── Main content — centered ── */}
      <div className="hero-content">

        {/* Eyebrow pill */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Admissions Open · Session 2025–26
        </div>

        {/* Display heading — Cormorant */}
        <h1 className="hero-heading" ref={headingRef}>
          {['The', 'pursuit', 'of'].map((w, i) => (
            <span key={i} className="hw-wrap">
              <span className="hw">{w}</span>
              {' '}
            </span>
          ))}
          <br />
          {['excellence'].map((w, i) => (
            <span key={i} className="hw-wrap">
              <span className="hw hero-em">{w}</span>
              {' '}
            </span>
          ))}
          <br />
          {['begins', 'here'].map((w, i) => (
            <span key={i} className="hw-wrap">
              <span className="hw">{w}</span>
              {i === 0 ? ' ' : ''}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="hero-sub">
          Empowering young minds through world-class education,<br />
          character development, and holistic growth since 2000.
        </p>

        {/* Actions */}
        <div className="hero-actions">
          <a
            href="#"
            className="hero-btn hero-btn--primary"
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Start Your Journey
          </a>
          <a
            href="#"
            className="hero-btn hero-btn--ghost"
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="hero-btn-play">▷</span>
            Schedule a Visit
          </a>
        </div>
      </div>

      {/* ── Bottom strip — stats ── */}
      <div className="hero-bottom-strip">
        <div className="hero-stat">
          <span className="hero-stat-num">50+</span>
          <span className="hero-stat-label">Expert Faculty</span>
        </div>
        <div className="hero-strip-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">1,000+</span>
          <span className="hero-stat-label">Students</span>
        </div>
        <div className="hero-strip-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">100%</span>
          <span className="hero-stat-label">Board Results</span>
        </div>
        <div className="hero-strip-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">25+</span>
          <span className="hero-stat-label">Years of Excellence</span>
        </div>

        {/* Scroll cue — far right */}
        <div className="hero-scroll-cue">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-label">Scroll</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;

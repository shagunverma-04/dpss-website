import React from 'react';
import './WelcomeSection.css';
import useInView from '../hooks/useInView';

const WelcomeSection = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="welcome-section" ref={sectionRef}>
      <div className="welcome-layout">

        {/* ── Left: stacked image block ── */}
        <div className={`welcome-media ${inView ? 'reveal-left in-view' : 'reveal-left'}`}>
          <div className="welcome-img-main">
            <img src="img/photo2.jpg" alt="DPS Robertsganj Campus" />
          </div>
          <div className="welcome-img-secondary">
            <img src="img/477798227_941798504743745_5546827519590064483_n.jpg" alt="Smart Classrooms" />
          </div>
          {/* Floating card */}
          <div className="welcome-float-card">
            <div className="welcome-float-num">2000</div>
            <div className="welcome-float-sub">Year Established</div>
            <div className="welcome-float-bar" />
            <div className="welcome-float-desc">25+ years of shaping futures</div>
          </div>
        </div>

        {/* ── Right: text ── */}
        <div className={`welcome-text ${inView ? 'reveal-right in-view' : 'reveal-right'}`}>
          <span className="section-label">Welcome to DPS</span>
          <h2 className="section-title">
            Education that goes<br />
            <em className="welcome-em">beyond</em> the grade
          </h2>

          <p className="section-description">
            Delhi Public Secondary School, Robertsganj has been building futures since 2000.
            We combine rigorous CBSE academics with life skills, character education,
            and world-class infrastructure — because true excellence is about the whole child.
          </p>

          {/* Pull quote */}
          <blockquote className="welcome-quote">
            <span className="welcome-quote-mark">"</span>
            Education is not the filling of a bucket, but the lighting of a fire.
          </blockquote>

          {/* Feature pills */}
          <div className="welcome-pills">
            <span className="welcome-pill">🎓 CBSE Curriculum</span>
            <span className="welcome-pill">🏹 Archery & Shooting</span>
            <span className="welcome-pill">🤖 Robotics Lab</span>
            <span className="welcome-pill">🏊 Swimming Pool</span>
            <span className="welcome-pill">💻 Smart Classrooms</span>
            <span className="welcome-pill">📚 Modern Library</span>
          </div>

          <a href="#" className="welcome-cta">
            Explore Our School
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;

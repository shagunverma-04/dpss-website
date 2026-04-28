import React from 'react';
import './PrincipalSection.css';
import useInView from '../hooks/useInView';

const PrincipalSection = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="principal-section" ref={sectionRef}>
      <div className="principal-layout">

        {/* Left: image block */}
        <div className={`principal-media ${inView ? 'ps-reveal-left in-view' : 'ps-reveal-left'}`}>
          <div className="principal-img-wrap">
            <img src="img\principal.JPG" alt="Principal, DPS Robertsganj" className="principal-img" />
          </div>
          {/* Name card pinned to bottom */}
          <div className="principal-name-card">
            <div className="principal-name-role">Principal's Message</div>
            <div className="principal-name-school">DPS Robertsganj</div>
          </div>
          {/* Decorative accent */}
          <div className="principal-accent-block" />
        </div>

        {/* Right: text block */}
        <div className={`principal-content ${inView ? 'ps-reveal-right in-view' : 'ps-reveal-right'}`}>
          <span className="section-label">From the Principal</span>

          {/* Big pull quote */}
          <blockquote className="principal-pull-quote">
            <span className="principal-quote-mark">"</span>
            Children should not be forced, but guided — so we may discover the particular touch of genius in each one of them.
          </blockquote>

          <div className="principal-divider" />

          <div className="principal-body">
            <p>
              As we step into this new academic year, filled with hope and dreams of scaling new
              heights, the purpose of education is to teach our children to think and develop a
              capacity to reason out facts.
            </p>
            <p>
              Students should keep in mind the importance of planning and prioritizing their time.
              Think wisely, think systematically. Learn to enjoy hard work. Be very serious and
              attentive in class — always prepare yourself for next day's lesson.
            </p>
            <p>
              Together, we will continue to build a community of learners who are not only
              academically excellent but also compassionate, responsible, and prepared for the
              challenges of tomorrow.
            </p>
          </div>

          <div className="principal-signature">
            <div className="principal-sig-line" />
            <div>
              <div className="principal-sig-name">The Principal</div>
              <div className="principal-sig-school">Delhi Public Secondary School, Robertsganj</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrincipalSection;

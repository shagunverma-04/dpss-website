import React from 'react';
import './FacilitiesSection.css';
import useInView from '../hooks/useInView';

const facilities = [
  {
    image: 'img/476831564_941790714744524_1521817662912512543_n.jpg',
    title: 'Sports Complex',
    tag: 'Athletics',
    description: 'Cricket, Football, Hockey, Tennis & Athletic tracks — one of the most comprehensive sports facilities in the region.',
    size: 'large'
  },
  {
    image: 'img/559008640_1122708749986052_3011674443979693050_n.jpg',
    title: 'Smart Classrooms',
    tag: 'Technology',
    description: 'Wi-Fi campus with LCD monitors, multimedia desktops, and ICT-enabled learning in every room.',
    size: 'small'
  },
  {
    image: 'img/photo2.jpg',
    title: 'Science Labs',
    tag: 'Discovery',
    description: 'Fully equipped Physics, Chemistry, Biology and Computer labs that bring learning to life.',
    size: 'small'
  }
];

const FacilitiesSection = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="facilities-section" ref={sectionRef}>
      {/* Header */}
      <div className="facilities-header section-container">
        <div className={`fac-header-left ${inView ? 'reveal in-view' : 'reveal'}`}>
          <span className="section-label">Our Facilities</span>
          <h2 className="section-title">World-class<br />infrastructure</h2>
        </div>
        <div className={`fac-header-right ${inView ? 'reveal in-view delay-2' : 'reveal'}`}>
          <p className="section-description">
            State-of-the-art spaces designed to nurture academic excellence,
            physical development, and creative expression — all under one roof.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="facilities-bento section-container">
        {/* Large featured card */}
        <div className={`fac-card fac-card--large ${inView ? 'reveal in-view delay-1' : 'reveal'}`}>
          <img src={facilities[0].image} alt={facilities[0].title} className="fac-img" />
          <div className="fac-overlay">
            <span className="fac-tag">{facilities[0].tag}</span>
            <div className="fac-text">
              <h3 className="fac-title">{facilities[0].title}</h3>
              <p className="fac-desc">{facilities[0].description}</p>
            </div>
          </div>
        </div>

        {/* 2 small cards */}
        <div className="fac-small-col">
          {facilities.slice(1, 3).map((f, i) => (
            <div
              key={i}
              className={`fac-card fac-card--small ${inView ? 'reveal in-view' : 'reveal'}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <img src={f.image} alt={f.title} className="fac-img" />
              <div className="fac-overlay">
                <span className="fac-tag">{f.tag}</span>
                <div className="fac-text">
                  <h3 className="fac-title">{f.title}</h3>
                  <p className="fac-desc">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

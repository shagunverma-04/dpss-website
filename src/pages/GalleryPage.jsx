import React, { useState } from 'react';
import './GalleryPage.css';
import Icon from '../components/Icon';

const allPhotos = [
  {
    src: 'img/ChatGPT Image Apr 28, 2026, 01_51_08 PM.png',
    alt: 'DPS Robertsganj Campus',
    category: 'campus',
    caption: 'Main Campus',
    span: 'wide',
  },
  {
    src: 'img/474601760_931855822404680_2068134467244708243_n.jpg',
    alt: 'School building and grounds',
    category: 'events',
    caption:'Police Pathshala Event',
    span: 'normal',
  },
  {
    src: 'img/477577271_941798734743722_4134268364392919190_n.jpg',
    alt: 'Smart classroom in session',
    category: 'academics',
    caption: 'Smart Classrooms',
    span: 'normal',
  },
  {
    src: 'img/475115253_930957505827845_6878141670834896488_n.jpg',
    alt: 'Students on campus',
    category: 'students',
    caption: 'Independence Day Celebration',
    span: 'normal',
  },
  {
    src: 'img/476831564_941790714744524_1521817662912512543_n.jpg',
    alt: 'Co-curricular activities',
    category: 'activities',
    caption: 'Activities & Sports',
    span: 'normal',
  },
  {
    src: 'img/475277224_933220522268210_8488933039221279069_n.jpg',
    alt: 'Young learners at school',
    category: 'students',
    caption: 'Open House Exhibition',
    span: 'tall',
  },
  {
    src: 'img/475139124_931854325738163_5806462148287711903_n.jpg',
    alt: 'School infrastructure',
    category: 'students',
    caption: 'Classroom Discussions',
    span: 'normal',
  },
  {
    src: 'img/photo2.jpg',
    alt: 'School events and celebrations',
    category: 'academics',
    caption: 'Science Labs',
    span: 'normal',
  },
  {
    src: 'img/518023467_1050556680534593_8237108120491702926_n.jpg',
    alt: 'Academic achievements',
    category: 'academics',
    caption: 'Academic Excellence',
    span: 'normal',
  },
  {
    src: 'img/559008640_1122708749986052_3011674443979693050_n.jpg',
    alt: 'Sports and athletics',
    category: 'academics',
    caption: 'Smart Classrooms',
    span: 'normal',
  },
  {
    src: 'img/540500725_1089234760000118_7879177568426296812_n.jpg',
    alt: 'Annual day performance',
    category: 'activities',
    caption: 'NCC Training',
    span: 'wide',
  },
  {
    src: 'img/475300382_933242838932645_3520385552580284154_n.jpg',
    alt: 'Cultural event',
    category: 'activities',
    caption: 'Extracurriculars',
    span: 'tall',
  },
  {
    src: 'img/559129685_1125127213077539_7067563413473166471_n.jpg',
    alt: 'Smart classroom in session',
    category: 'academics',
    caption: 'Expert Faculty',
    span: 'wide',
  },
  {
    src: 'img/579048653_1149634103960183_7462979668234118698_n.jpg',
    alt: 'Smart classroom in session',
    category: 'activities',
    caption: 'Educational Visit',
    span: 'normal',
  },
  {
    src: 'img/d304befb-1a5c-48fe-b2ae-4e6587846bdf.JPG',
    alt: 'Students on campus',
    category: 'events',
    caption: 'Performance',
    span: 'normal',
  },
  {
    src: 'img/e0054e82-1b1d-4174-866f-cdb17fb304e8.JPG',
    alt: 'Students on campus',
    category: 'activities',
    caption: 'Science Projects Exhibition',
    span: 'tall',
  },
  {
    src: 'img/475810069_938536721736590_4303983570600596265_n.jpg',
    alt: 'Students on campus',
    category: 'activities',
    caption: 'Annual Day',
    span: 'wide',
  },
];

const tabs = [
  { key: 'all',        label: 'All' },
  { key: 'campus',     label: 'Campus' },
  { key: 'academics',  label: 'Academics' },
  { key: 'students',   label: 'Students' },
  { key: 'activities', label: 'Activities' },
  { key: 'events',     label: 'Events' },
];

const GalleryPage = () => {
  const [activeTab, setActiveTab]   = useState('all');
  const [lightbox, setLightbox]     = useState(null); // index of open photo

  const filtered = activeTab === 'all'
    ? allPhotos
    : allPhotos.filter(p => p.category === activeTab);

  const openLightbox  = (idx) => { setLightbox(idx); document.body.style.overflow = 'hidden'; };
  const closeLightbox = ()    => { setLightbox(null); document.body.style.overflow = ''; };
  const prevPhoto     = ()    => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const nextPhoto     = ()    => setLightbox(i => (i + 1) % filtered.length);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  // Keyboard navigation
  React.useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  return (
    <div className="gallery-page">

      {/* Hero */}
      <div className="gl-hero">
        <img src="img/544772459_1094534596136801_9063685510409673845_n.jpg" alt="DPS Robertsganj Gallery" className="gl-hero-bg-img" />
        <div className="gl-hero-overlay" />
        <div className="section-container gl-hero-content">
          <div className="section-label">Photo Gallery</div>
          <h1 className="gl-hero-title">Life at DPS<br />Robertsganj</h1>
          <p className="gl-hero-sub">
            A window into the vibrant community we have built — from classrooms to sports fields,
            cultural celebrations to quiet moments of discovery.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="gl-section bg-light">
        <div className="section-container">

          {/* Section header */}
          <div className="gl-header">
            <div>
              <span className="section-label">Our Gallery</span>
              <h2 className="section-title">Moments That Matter</h2>
            </div>
            <p className="gl-header-sub">
              Every photograph tells a story of growth, joy, and belonging. Browse our
              collection to see the world your child will be part of.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="gl-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`gl-tab ${activeTab === tab.key ? 'gl-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="gl-grid">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className={`gl-item gl-item--${photo.span}`}
                onClick={() => openLightbox(i)}
              >
                <img src={photo.src} alt={photo.alt} className="gl-img" loading="lazy" />
                <div className="gl-item-overlay">
                  <div className="gl-item-caption">{photo.caption}</div>
                  <div className="gl-item-zoom">
                    <Icon name="zoomIn" size={22} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gl-empty">
              <Icon name="image" size={48} style={{ opacity: 0.3 }} />
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gl-lightbox" onClick={handleBackdropClick}>
          <button className="gl-lb-close" onClick={closeLightbox} aria-label="Close">
            <Icon name="x" size={24} />
          </button>
          <button className="gl-lb-prev" onClick={prevPhoto} aria-label="Previous">
            <Icon name="chevronLeft" size={28} />
          </button>
          <div className="gl-lb-content">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="gl-lb-img"
            />
            <div className="gl-lb-caption">{filtered[lightbox].caption}</div>
          </div>
          <button className="gl-lb-next" onClick={nextPhoto} aria-label="Next">
            <Icon name="chevronRight" size={28} />
          </button>
          <div className="gl-lb-counter">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;

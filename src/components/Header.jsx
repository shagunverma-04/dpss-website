import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = currentPage === 'home';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { text: 'About',        page: 'home' },
    { text: 'Academics',    page: 'academics' },
    { text: 'Admissions',   page: 'admissions' },
    { text: 'Student Life', page: 'student-life' },
    { text: 'News & Events',page: 'news-events' },
    { text: 'Gallery',      page: 'gallery' },
    { text: 'Contact',      page: 'contact' },
  ];

  const handleNav = (e, page) => {
    e.preventDefault();
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerClass = [
    'header',
    isHome ? 'header--hero' : 'header--solid',
    scrolled ? 'header--scrolled' : '',
  ].join(' ');

  return (
    <header className={headerClass}>
      <div className="header-inner">

        {/* ── Logo ── */}
        <a href="#" className="nav-logo" onClick={(e) => handleNav(e, 'home')}>
          <div className="nav-logo-img">
            <img src="/img/dpss-logo.png" alt="DPS Robertsganj" />
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">DPS Robertsganj</span>
            <span className="nav-logo-tag">Est. 2017</span>
          </div>
        </a>

        {/* ── Desktop Nav — centered ALL CAPS ── */}
        <nav className="nav-center" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`nav-link ${currentPage === item.page ? 'nav-link--active' : ''}`}
                  onClick={(e) => handleNav(e, item.page)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Apply CTA ── */}
        <div className="nav-cta">
          <a
            href="#"
            className="nav-apply"
            onClick={(e) => handleNav(e, 'admissions')}
          >
            Apply Now
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={`nav-hamburger ${menuOpen ? 'nav-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}>
        <div className="nav-drawer-inner">
          <ul className="nav-drawer-list">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`nav-drawer-link ${currentPage === item.page ? 'nav-drawer-link--active' : ''}`}
                  onClick={(e) => handleNav(e, item.page)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-drawer-footer">
            <a href="#" className="nav-apply nav-apply--block" onClick={(e) => { e.preventDefault(); handleNav(e, 'admissions'); }}>
              Apply for Admission
            </a>
            <div className="nav-drawer-contact">
              <a href="tel:+919820967960">+91 98209 67960</a>
              <span>·</span>
              <span>Mon–Sat 8am–3pm</span>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { text: 'About', page: 'home' },
    { text: 'Academics', page: 'academics' },
    { text: 'Admissions', page: 'admissions' },
    { text: 'Student Life', page: 'student-life' },
    { text: 'News & Events', page: 'news-events' },
    { text: 'Contact', page: 'contact' },
  ];

  const handleNav = (e, page) => {
    e.preventDefault();
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

        {/* Logo */}
        <a href="#" className="logo" onClick={(e) => handleNav(e, 'home')}>
          <div className="logo-mark">
            <img src="/img/dpss-logo.png" alt="DPS Robertsganj" />
          </div>
          <div className="logo-text">
            <div className="logo-name">DPS Robertsganj</div>
            <div className="logo-tagline">Excellence Since 2000</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          <ul className="main-nav">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={currentPage === item.page ? 'nav-active' : ''}
                  onClick={(e) => handleNav(e, item.page)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta desktop-cta">
          <a href="#" className="btn-apply">Apply Now</a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}>
        <ul className="mobile-nav">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={currentPage === item.page ? 'nav-active' : ''}
                onClick={(e) => handleNav(e, item.page)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">
          <a href="#" className="btn-apply btn-apply--mobile" onClick={(e) => { e.preventDefault(); setMenuOpen(false); }}>
            Apply Now
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;

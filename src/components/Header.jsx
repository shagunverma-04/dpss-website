import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: 'About', page: 'home' },
    { text: 'Academics', page: 'academics' },
    { text: 'Admissions', page: 'home' },
    { text: 'Student Life', page: 'home' },
    { text: 'News & Events', page: 'home' },
    { text: 'Contact', page: 'home' }
  ];

  const handleNav = (e, page) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a
          href="#"
          className="logo"
          onClick={(e) => handleNav(e, 'home')}
        >
          <div className="logo-mark"><img src="/img/dpss-logo.png" alt="DPS Robertsganj" /></div>
          <div className="logo-text">
            <div className="logo-name">DPS Robertsganj</div>
            <div className="logo-tagline">Excellence Since 2000</div>
          </div>
        </a>

        <nav>
          <ul className="main-nav">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={currentPage === item.page && item.text === 'Academics' && currentPage === 'academics' ? 'nav-active' : ''}
                  onClick={(e) => handleNav(e, item.page)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <a href="#" className="btn-apply">Apply Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

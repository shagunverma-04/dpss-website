import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: 'About', href: '#' },
    { text: 'Academics', href: '#' },
    { text: 'Admissions', href: '#' },
    { text: 'Student Life', href: '#' },
    { text: 'News & Events', href: '#' },
    { text: 'Contact', href: '#' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo">
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
                <a href={item.href}>{item.text}</a>
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

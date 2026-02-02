import React from 'react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Academics', href: '#' },
    { text: 'Admissions', href: '#' },
    { text: 'Facilities', href: '#' },
    { text: 'Faculty', href: '#' }
  ];

  const resources = [
    { text: 'Fee Structure', href: '#' },
    { text: 'Curriculum', href: '#' },
    { text: 'Events Calendar', href: '#' },
    { text: 'Photo Gallery', href: '#' },
    { text: 'Downloads', href: '#' }
  ];

  const contact = [
    { text: '+91 9820967960', href: 'tel:+919820967960' },
    { text: 'Email Us', href: 'mailto:delhipublicschoolrobertsganj@gmail.com' },
    { text: 'Robertsganj, UP', href: '#' },
    { text: 'Careers', href: '#' }
  ];

  const socialLinks = [
    { icon: '📘', href: '#', label: 'Facebook' },
    { icon: '📷', href: '#', label: 'Instagram' },
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '▶️', href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Delhi Public Secondary School</h3>
            <p>
              Committed to excellence in education since 2000. We nurture young minds through 
              world-class academics, character development, and holistic growth.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              {resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              {contact.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2024 Delhi Public Secondary School Robertsganj. All Rights Reserved.</div>
          <div>Designed with excellence in mind</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

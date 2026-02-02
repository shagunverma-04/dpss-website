import React from 'react';
import './UtilityBar.css';

const UtilityBar = () => {
  const leftLinks = [
    { text: 'Student Portal', href: '#' },
    { text: 'Parent Hub', href: '#' },
    { text: 'Alumni', href: '#' },
    { text: 'Careers', href: '#' }
  ];

  const rightLinks = [
    { text: '📞 +91 9820967960', href: 'tel:+919820967960' },
    { text: '✉️ Email', href: 'mailto:delhipublicschoolrobertsganj@gmail.com' }
  ];

  return (
    <div className="utility-bar">
      <div className="utility-container">
        <div className="utility-links">
          {leftLinks.map((link, index) => (
            <a key={index} href={link.href}>{link.text}</a>
          ))}
        </div>
        <div className="utility-links">
          {rightLinks.map((link, index) => (
            <a key={index} href={link.href}>{link.text}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;

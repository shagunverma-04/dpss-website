import React, { useState } from 'react';
import './ContactPage.css';
import Icon from '../components/Icon';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactCards = [
    {
      iconName: 'phone',
      title: 'Call Us',
      primary: '+91 78391 83961',
      secondary: 'Mon–Sat, 8:00 AM – 3:00 PM',
      action: 'tel:+917839183961',
      actionLabel: 'Call Now'
    },
    {
      iconName: 'mail',
      title: 'Email Us',
      primary: 'delhipublicschoolrobertsganj@gmail.com',
      secondary: 'We aim to respond within one working day',
      action: 'mailto:delhipublicschoolrobertsganj@gmail.com',
      actionLabel: 'Send Email'
    },
    {
      iconName: 'mapPin',
      title: 'Visit Us',
      primary: 'Village Bijauli, near Railway Crossing',
      secondary: 'Sonbhadra, Uttar Pradesh - 231216',
      action: 'https://maps.app.goo.gl/TqCvDVXF3e6H5bZX9',
      actionLabel: 'Get Directions'
    },
    {
      iconName: 'clock',
      title: 'Office Hours',
      primary: 'Monday to Saturday',
      secondary: '8:00 AM – 3:00 PM',
      action: null,
      actionLabel: null
    }
  ];

  const subjects = [
    'Admission Enquiry',
    'Fee & Payments',
    'Transfer Certificate / Documents',
    'Transport / Bus Service',
    'Upcoming Events',
    'General Enquiry',
    'Other'
  ];

  const departments = [
    { iconName: 'building',       name: 'Admissions Office', detail: 'New enrolments, registration forms, seat availability' },
    { iconName: 'dollarSign',     name: 'Accounts & Fee',    detail: 'Fee structure, payment schedules, receipts' },
    { iconName: 'clipboardList',  name: 'Academic Office',   detail: 'Timetables, results, TC & document requests' },
    { iconName: 'bus',            name: 'Transport Desk',    detail: 'Bus routes, transport fees, schedule queries' }
  ];

  const addressRows = [
    { iconName: 'mapPin', label: 'Address', value: 'Village Bijauli, near Railway Crosssing \n Sonbhadra, Uttar pradesh - 231216' },
    { iconName: 'phone',  label: 'Phone',   value: '+91 78391 83961' },
    { iconName: 'mail',   label: 'Email',   value: 'delhipublicschoolrobertsganj@gmail.com' },
    { iconName: 'clock',  label: 'Office Hours', value: 'Monday – Saturday\n8:00 AM – 3:00 PM' },
  ];

  return (
    <div className="contact-page">

      {/* Hero */}
      <div className="ct-hero">
        <img
          src="img/475490992_933220515601544_5135740570619108852_n.jpg"
          alt="DPS Robertsganj"
          className="ct-hero-bg-img"
        />
        <div className="ct-hero-overlay" />
        <div className="section-container ct-hero-content">
          <div className="section-label">Contact Us</div>
          <h1 className="ct-hero-title">We're Here to Help</h1>
          <p className="ct-hero-sub">
            Whether you have a question about admissions, need a document, or simply want to
            know more about our school — our team is always happy to hear from you.
          </p>
        </div>
      </div>

      {/* Section 1: Contact Cards */}
      <section className="ct-section bg-light">
        <div className="section-container">
          <div className="ct-cards-grid">
            {contactCards.map((card, i) => (
              <div key={i} className="ct-card">
                <div className="ct-card-icon">
                  <Icon name={card.iconName} size={24} />
                </div>
                <h3 className="ct-card-title">{card.title}</h3>
                <p className="ct-card-primary">{card.primary}</p>
                <p className="ct-card-secondary">{card.secondary}</p>
                {card.action && (
                  <a href={card.action} className="ct-card-link" target={card.title === 'Visit Us' ? '_blank' : undefined} rel="noreferrer">
                    {card.actionLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Form + Departments */}
      <section className="ct-section bg-white">
        <div className="section-container">
          <div className="ct-main-grid">

            {/* Left: Form */}
            <div className="ct-form-col">
              <div className="section-label">Send a Message</div>
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-description" style={{ marginBottom: '36px' }}>
                Fill in the form below and our team will get back to you within one working day.
                For urgent matters, please call the school office directly.
              </p>

              {submitted ? (
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <Icon name="checkCircle" size={36} />
                  </div>
                  <h3 className="ct-success-title">Message Received</h3>
                  <p className="ct-success-text">
                    Thank you for reaching out. Our team will be in touch with you shortly.
                    If you need immediate assistance, please call us at +91 98209 67960.
                  </p>
                  <button className="ct-success-reset" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-form-row">
                    <div className="ct-field">
                      <label className="ct-label" htmlFor="ct-name">Full Name *</label>
                      <input
                        id="ct-name"
                        type="text"
                        name="name"
                        className="ct-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-label" htmlFor="ct-phone">Phone Number *</label>
                      <input
                        id="ct-phone"
                        type="tel"
                        name="phone"
                        className="ct-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-email">Email Address</label>
                    <input
                      id="ct-email"
                      type="email"
                      name="email"
                      className="ct-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-subject">Subject *</label>
                    <select
                      id="ct-subject"
                      name="subject"
                      className="ct-input ct-select"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-message">Your Message *</label>
                    <textarea
                      id="ct-message"
                      name="message"
                      className="ct-input ct-textarea"
                      placeholder="Please describe your enquiry in detail..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <button type="submit" className="ct-submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right: Departments + info */}
            <div className="ct-info-col">
              <div className="ct-departments">
                <h3 className="ct-departments-heading">Departments</h3>
                <p className="ct-departments-sub">
                  Not sure who to contact? Here is a quick guide to the right department for your query.
                </p>
                <div className="ct-dept-list">
                  {departments.map((dept, i) => (
                    <div key={i} className="ct-dept-item">
                      <div className="ct-dept-icon">
                        <Icon name={dept.iconName} size={18} />
                      </div>
                      <div>
                        <div className="ct-dept-name">{dept.name}</div>
                        <div className="ct-dept-detail">{dept.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ct-social-block">
                <h3 className="ct-social-heading">Follow Us</h3>
                <p className="ct-social-sub">Stay connected on social media for updates, photos, and announcements.</p>
                <div className="ct-social-links">
                  <a href="#" className="ct-social-link ct-social-link--fb">
                    <span className="ct-social-icon">f</span>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="ct-social-link ct-social-link--ig">
                    <span className="ct-social-icon">◎</span>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="ct-social-link ct-social-link--yt">
                    <span className="ct-social-icon">▶</span>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Visit / Location */}
      <section className="ct-section bg-light">
        <div className="section-container">
          <div className="ct-location-grid">
            <div className="ct-location-text">
              <div className="section-label">Find Us</div>
              <h2 className="section-title">Visit Our Campus</h2>
              <p className="section-description">
                Our campus is located in the heart of Robertsganj, easily accessible from
                the main town centre. We welcome parents and guardians to visit us during
                office hours — no appointment is required for general enquiries.
              </p>
              <div className="ct-address-block">
                {addressRows.map((row, i) => (
                  <div key={i} className="ct-address-row">
                    <span className="ct-addr-icon">
                      <Icon name={row.iconName} size={17} />
                    </span>
                    <div>
                      <div className="ct-addr-label">{row.label}</div>
                      <div className="ct-addr-value">{row.value.split('\n').map((line, j) => (
                        <span key={j}>{line}{j < row.value.split('\n').length - 1 && <br />}</span>
                      ))}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ct-map-col">
              <div className="ct-map-placeholder">
                <div className="ct-map-inner">
                  <div className="ct-map-pin">
                    <Icon name="mapPin" size={40} style={{ img:'img/photo1.jpg' }} />
                  </div>
                  <div className="ct-map-name">DPS Robertsganj</div>
                  <a
                    href="https://maps.app.goo.gl/TqCvDVXF3e6H5bZX9"
                    target="_blank"
                    rel="noreferrer"
                    className="ct-map-btn"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

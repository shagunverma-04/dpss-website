import React, { useState } from 'react';
import './AdmissionsPage.css';

const AdmissionsPage = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      num: '01',
      icon: '📋',
      title: 'Collect the Prospectus',
      text: 'Visit the school office during working hours (Mon–Sat, 8:00 AM – 3:00 PM) to collect the admission prospectus and registration form. Alternatively, request one via email.'
    },
    {
      num: '02',
      icon: '✍️',
      title: 'Submit the Application',
      text: 'Complete the registration form and submit it along with the required documents at the school office. Ensure all documents are self-attested and in order before submission.'
    },
    {
      num: '03',
      icon: '🧑‍💼',
      title: 'Interaction & Assessment',
      text: 'Shortlisted students and their parents will be called for a brief interaction with the Principal. This helps us understand the child\'s aptitude and match them to the right class.'
    },
    {
      num: '04',
      icon: '✅',
      title: 'Admission Confirmation',
      text: 'Upon successful completion of the interaction, an admission offer is made. Fees must be deposited within the stipulated time to confirm the seat. A welcome kit is provided on confirmation.'
    }
  ];

  const documents = [
    { icon: '🏥', title: 'Birth Certificate', text: 'Original birth certificate issued by the Municipal Authority or hospital.' },
    { icon: '📸', title: 'Passport Photographs', text: '4 recent passport-size photographs of the child and 2 of each parent/guardian.' },
    { icon: '🏫', title: 'Previous School Records', text: 'Last class result card/report card and Transfer Certificate from the previous school.' },
    { icon: '📍', title: 'Address Proof', text: 'Any government-issued document confirming the current residential address of the family.' },
    { icon: '🪪', title: 'Aadhar Card', text: 'Aadhar card copy of the student and both parents/guardians.' },
    { icon: '💉', title: 'Medical / Vaccination Record', text: 'Up-to-date vaccination record from a recognised medical authority.' }
  ];

  const highlights = [
    { stat: '2000', label: 'Established', sub: 'A legacy of trust' },
    { stat: 'CBSE', label: 'Affiliated', sub: 'Central Board curriculum' },
    { stat: '1000+', label: 'Students', sub: 'A thriving community' },
    { stat: '100%', label: 'Board Results', sub: 'Consistent excellence' }
  ];

  const faqs = [
    {
      q: 'What is the minimum age for admission to Class I?',
      a: 'Children must be at least 5 years and 6 months of age as of 1st April of the session year to be eligible for admission to Class I.'
    },
    {
      q: 'Does the school provide transportation?',
      a: 'Yes. We operate a school bus service covering key routes in and around Robertsganj. Transportation charges are applicable and detailed in the fee structure available at the school office.'
    },
    {
      q: 'Is there a waiting list for popular classes?',
      a: 'In cases where seats are limited, eligible students are placed on a priority waiting list. Parents are informed promptly if a seat becomes available.'
    },
    {
      q: 'Can students be admitted mid-session?',
      a: 'Mid-session admissions are considered on a case-by-case basis, subject to seat availability and the submission of a valid Transfer Certificate from the previous school.'
    },
    {
      q: 'When does the new academic session begin?',
      a: 'The academic session at DPS Robertsganj typically begins in April. Admission enquiries are open from January onwards for the upcoming session.'
    }
  ];

  return (
    <div className="admissions-page">

      {/* Hero */}
      <div className="admissions-hero">
        <img
          src="img/484810766_967083908881871_3601280579614317961_n.jpg"
          alt="DPS Robertsganj Campus"
          className="admissions-hero-bg-img"
        />
        <div className="admissions-hero-overlay" />
        <div className="section-container admissions-hero-content">
          <div className="section-label">Admissions 2025–26</div>
          <h1 className="admissions-hero-title">Your Child's Journey<br />Starts Here</h1>
          <p className="admissions-hero-sub">
            Joining the DPS Robertsganj family is the first step toward a future built on knowledge,
            character, and confidence. We welcome families who share our belief that education
            is a lifelong pursuit of excellence.
          </p>
          <div className="admissions-hero-actions">
            <a href="mailto:delhipublicschoolrobertsganj@gmail.com" className="btn-adm-primary">Enquire Now</a>
            <a href="tel:+919820967960" className="btn-adm-secondary">Call Us: +91 98209 67960</a>
          </div>
        </div>
      </div>

      {/* Quick Stats Strip */}
      <div className="admissions-stats-strip">
        {highlights.map((h, i) => (
          <div key={i} className="adm-stat">
            <div className="adm-stat-number">{h.stat}</div>
            <div className="adm-stat-label">{h.label}</div>
            <div className="adm-stat-sub">{h.sub}</div>
          </div>
        ))}
      </div>

      {/* Section 1: Why DPS */}
      <section className="adm-section bg-light">
        <div className="section-container">
          <div className="adm-why-grid">
            <div className="adm-why-text">
              <div className="section-label">Why Choose Us</div>
              <h2 className="section-title">A School That Grows<br />With Your Child</h2>
              <p className="section-description">
                At DPS Robertsganj, every admission is the beginning of a partnership — between
                the school, the family, and the child. We offer an environment where students
                feel safe to explore, question, and grow into the best version of themselves.
              </p>
              <ul className="adm-why-list">
                <li><span className="adm-why-check">✓</span> CBSE-affiliated curriculum with holistic approach</li>
                <li><span className="adm-why-check">✓</span> 50+ expert and dedicated faculty members</li>
                <li><span className="adm-why-check">✓</span> ICT-enabled smart classrooms</li>
                <li><span className="adm-why-check">✓</span> Life Skills: shooting, archery, robotics & more</li>
                <li><span className="adm-why-check">✓</span> Strong focus on values and character development</li>
                <li><span className="adm-why-check">✓</span> Active parent-school partnership</li>
              </ul>
            </div>
            <div className="adm-why-image">
              <img
                src="img/477798227_941798504743745_5546827519590064483_n.jpg"
                alt="Students in classroom"
                className="adm-why-photo"
              />
              <div className="adm-why-badge">
                <span className="adm-why-badge-icon">🏆</span>
                <span>100% Board Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Admission Process */}
      <section className="adm-section bg-white">
        <div className="section-container">
          <div className="section-header-center">
            <div className="section-label">How to Apply</div>
            <h2 className="section-title">The Admission Process</h2>
            <p className="section-description">
              Our admission process is transparent and straightforward. Here is a step-by-step
              guide to help you through every stage.
            </p>
          </div>

          <div className="adm-steps">
            {steps.map((step, i) => (
              <div key={i} className="adm-step-card">
                <div className="adm-step-header">
                  <div className="adm-step-icon">{step.icon}</div>
                  <div className="adm-step-num">{step.num}</div>
                </div>
                <h3 className="adm-step-title">{step.title}</h3>
                <p className="adm-step-text">{step.text}</p>
                {i < steps.length - 1 && <div className="adm-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Documents Required */}
      <section className="adm-section bg-dots">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">Before You Apply</div>
            <h2 className="section-title">Documents Required</h2>
            <p className="section-description">
              Please ensure all documents are ready before visiting the school office. Having
              everything in order ensures a smooth and swift admission process.
            </p>
          </div>

          <div className="adm-docs-grid">
            {documents.map((doc, i) => (
              <div key={i} className="adm-doc-card">
                <div className="adm-doc-icon">{doc.icon}</div>
                <h3 className="adm-doc-title">{doc.title}</h3>
                <p className="adm-doc-text">{doc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Important Info Banner */}
      <section className="adm-section bg-green-tint">
        <div className="section-container">
          <div className="adm-info-banner">
            <div className="adm-info-icon">📅</div>
            <div className="adm-info-body">
              <div className="section-label">Session 2025–26</div>
              <h2 className="adm-info-title">Admissions Are Now Open</h2>
              <p className="adm-info-text">
                Enquiries for the 2025–26 academic session are being actively accepted.
                Seats fill up quickly — we encourage early enquiry to avoid disappointment.
                The school office is open Monday to Saturday, 8:00 AM – 3:00 PM.
              </p>
              <div className="adm-info-actions">
                <a href="mailto:delhipublicschoolrobertsganj@gmail.com" className="btn-adm-primary">
                  Send an Email
                </a>
                <a href="tel:+919820967960" className="btn-adm-outline">
                  +91 98209 67960
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="adm-section bg-white">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">Common Questions</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Have a question? Chances are, other parents have asked the same. If you don't
              find your answer here, please reach out to us directly.
            </p>
          </div>

          <div className="adm-faqs">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`adm-faq-item ${openFaq === i ? 'adm-faq-item--open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="adm-faq-q">
                  <span>{faq.q}</span>
                  <span className="adm-faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <p className="adm-faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AdmissionsPage;

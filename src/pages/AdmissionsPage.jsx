import React, { useState } from 'react';
import './AdmissionsPage.css';
import Icon from '../components/Icon';

const AdmissionsPage = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      num: '01',
      iconName: 'fileText',
      title: 'Collect the Prospectus',
      text: 'Visit the school office during working hours (Mon–Sat, 8:00 AM – 3:00 PM) to collect the admission prospectus and registration form. Alternatively, request one via email.'
    },
    {
      num: '02',
      iconName: 'clipboardList',
      title: 'Submit the Application',
      text: 'Complete the registration form and submit it along with the required documents at the school office. Ensure all documents are self-attested and in order before submission.'
    },
    {
      num: '03',
      iconName: 'users',
      title: 'Interaction & Assessment',
      text: 'Shortlisted students and their parents will be called for a brief interaction with the Principal. This helps us understand the child\'s aptitude and match them to the right class.'
    },
    {
      num: '04',
      iconName: 'checkCircle',
      title: 'Admission Confirmation',
      text: 'Upon successful completion of the interaction, an admission offer is made. Fees must be deposited within the stipulated time to confirm the seat. A welcome kit is provided on confirmation.'
    }
  ];

  const documents = [
    { iconName: 'activity',       title: 'Birth Certificate',           text: 'Original birth certificate issued by the Municipal Authority or hospital.' },
    { iconName: 'camera',         title: 'Passport Photographs',        text: '4 recent passport-size photographs of the child and 2 of each parent/guardian.' },
    { iconName: 'graduationCap',  title: 'Previous School Records',     text: 'Last class result card/report card and Transfer Certificate from the previous school.' },
    { iconName: 'mapPin',         title: 'Address Proof',               text: 'Any government-issued document confirming the current residential address of the family.' },
    { iconName: 'creditCard',     title: 'Aadhar Card',                 text: 'Aadhar card copy of the student and both parents/guardians.' },
    { iconName: 'activity',       title: 'Medical / Vaccination Record',text: 'Up-to-date vaccination record from a recognised medical authority.' }
  ];

  const highlights = [
    { stat: '2017', label: 'Established', sub: 'A legacy of trust' },
    { stat: 'CBSE', label: 'Affiliated',  sub: 'Central Board curriculum' },
    { stat: '1000+',label: 'Students',    sub: 'A thriving community' },
    { stat: '100%', label: 'Board Results',sub: 'Consistent excellence' }
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
          src="img/63baa5c7-11a8-45cd-b3b6-7a814f90a1b6.jpg"
          alt="DPS Robertsganj Campus"
          className="admissions-hero-bg-img"
        />
        <div className="admissions-hero-overlay" />
        <div className="section-container admissions-hero-content">
          <div className="section-label">Admissions 2026-27</div>
          <h1 className="admissions-hero-title">Your Child's Journey<br />Starts Here</h1>
          <p className="admissions-hero-sub">
            Joining the DPS Robertsganj family is the first step toward a future built on knowledge,
            character, and confidence. We welcome families who share our belief that education
            is a lifelong pursuit of excellence.
          </p>
          <div className="admissions-hero-actions">
            <a href="mailto:delhipublicschoolrobertsganj@gmail.com" className="btn-adm-primary">Enquire Now</a>
            <a href="tel:+917839183961" className="btn-adm-secondary">Call Us: +91 78391 83961</a>
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

      {/* Section: Director's Desk */}
      <section className="adm-section bg-white">
        <div className="section-container">
          <div className="director-layout">
            <div className="director-media">
              <div className="director-img-wrap">
                <img
                  src="img/director.jpg"
                  alt="Director, DPS Robertsganj"
                  className="director-img"
                  onError={(e) => { e.target.src = 'img/principal.JPG'; }}
                />
              </div>
              <div className="director-name-card">
                <div className="director-name-role">From the Director's Desk</div>
                <div className="director-name-school">DPS Robertsganj</div>
              </div>
              <div className="director-accent-block" />
            </div>

            <div className="director-content">
              <span className="section-label">Director's Message</span>

              <blockquote className="director-pull-quote">
                <span className="director-quote-mark">"</span>
                Education is not the filling of a vessel, but the kindling of a flame — and at DPS Robertsganj, we light it with care, courage, and conviction.
              </blockquote>

              <div className="director-divider" />

              <div className="director-body">
                <p>
                  Welcome to Delhi Public School, Robertsganj — an institution built on the
                  belief that every child carries a spark of something extraordinary. As Director,
                  it is my privilege to guide a school that nurtures not just bright minds, but
                  thoughtful, principled, and resilient young people.
                </p>
                <p>
                  Our admissions process is more than a formality — it is an invitation to
                  partner with us in shaping your child's future. We seek families who value
                  curiosity, character, and commitment to learning, and we promise an
                  environment where each student is seen, supported, and challenged to grow.
                </p>
                <p>
                  As you consider DPS Robertsganj for your child, I assure you of our continued
                  dedication to academic excellence, holistic development, and the timeless
                  values that build lifelong success. We look forward to welcoming you into
                  our family.
                </p>
              </div>

              <div className="director-signature">
                <div className="director-sig-line" />
                <div>
                  <div className="director-sig-name">Mr. Santosh Kumar Verma, The Director</div>
                  <div className="director-sig-school">Delhi Public Secondary School, Robertsganj</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                src="img/475663698_933237972266465_6798402053272925416_n.jpg"
                alt="Students in classroom"
                className="adm-why-photo"
              />
              <div className="adm-why-badge">
                <span className="adm-why-badge-icon">
                  <Icon name="trophy" size={20} />
                </span>
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
                  <div className="adm-step-icon">
                    <Icon name={step.iconName} size={28} />
                  </div>
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
                <div className="adm-doc-icon">
                  <Icon name={doc.iconName} size={26} />
                </div>
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
            <div className="adm-info-icon">
              <Icon name="calendar" size={48} />
            </div>
            <div className="adm-info-body">
              <div className="section-label">Session 2026-27</div>
              <h2 className="adm-info-title">Admissions Are Now Open</h2>
              <p className="adm-info-text">
                Enquiries for the 2026-27 academic session are being actively accepted.
                Seats fill up quickly — we encourage early enquiry to avoid disappointment.
                The school office is open Monday to Saturday, 8:00 AM – 3:00 PM.
              </p>
              <div className="adm-info-actions">
                <a href="mailto:delhipublicschoolrobertsganj@gmail.com" className="btn-adm-primary">
                  Send an Email
                </a>
                <a href="tel:+917839183961" className="btn-adm-outline">
                  +91 78391 83961
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
                  <span className="adm-faq-toggle">
                    <Icon name={openFaq === i ? 'minus' : 'plus'} size={20} />
                  </span>
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

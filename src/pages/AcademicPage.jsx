import React from 'react';
import './AcademicPage.css';
import Icon from '../components/Icon';

const AcademicPage = () => {
  const curriculumLevels = [
    {
      level: 'Pre-Primary',
      classes: 'Playgroup · LKG · UKG',
      iconName: 'bookOpen',
      color: '#E8F5E9',
      borderColor: '#075133',
      image: 'img/475503113_933242605599335_5323577677694140088_n.jpg',
      paragraphs: [
        'Our Pre-Primary wing is designed with early childhood at its heart. From Playgroup through LKG and UKG, we nurture each child during the most formative years of their development — a time when the foundation of personality is built and curiosity is at its peak.',
        'Through an open-ended curriculum that blends joyful learning with purposeful growth, children develop social skills, verbal ability, and motor skills via art, craft, and hands-on experiences. We encourage children to think independently, engage with their world, and grow into confident, creative individuals.'
      ]
    },
    {
      level: 'Primary',
      classes: 'Class I – Class V',
      iconName: 'graduationCap',
      color: '#E3F2FD',
      borderColor: '#1565C0',
      image: 'img/08584007-3c15-4055-b449-48f632ee10bd.jpg',
      paragraphs: [
        'As students step into the Primary wing, learning broadens meaningfully. Aligned with the latest CBSE guidelines, the curriculum covers Mathematics, English, Hindi, Sanskrit, EVS, and Computer Science — complemented by Visual and Performing Arts, Value Education, and General Knowledge.',
        'What sets our Primary programme apart is its rich slate of Life Skills choices: shooting, archery, swimming, robotics, public speaking, clay modelling, and more. Multimedia teaching aids make every lesson engaging, ensuring that learning is always a joyful experience.'
      ]
    },
    {
      level: 'Middle Level',
      classes: 'Class VI – Class VIII',
      iconName: 'cpu',
      color: '#FFF3E0',
      borderColor: '#E65100',
      image: 'img/476831564_941790714744524_1521817662912512543_n.jpg',
      paragraphs: [
        'At the Middle Level, we move beyond textbooks. Following NCERT guidelines, our ICT-enabled classrooms empower students to visualise, question, and explore. Our teachers act as guides and facilitators — championing "learning by doing" over rote memorisation.',
        'Students continue with English, Hindi, Sanskrit (as the third language), Mathematics, Science, Social Science, Computer Science, Physical and Health Education, Work Experience, and Life Skills — building a well-rounded academic base for the years ahead.'
      ]
    },
    {
      level: 'Secondary',
      classes: 'Class IX – Class X',
      iconName: 'target',
      color: '#EDE7F6',
      borderColor: '#4527A0',
      image: 'img/475135876_931854365738159_7293315653921356242_n.jpg',
      paragraphs: [
        'The Secondary stage marks a defining chapter in every student\'s academic life. Aligned with the CBSE curriculum, our programme for Classes IX and X prepares students for the AISSE Board Examinations through rigorous academics, conceptual clarity, and continuous assessment that builds both knowledge and confidence.',
        'Beyond the classroom, students engage in career awareness sessions, leadership opportunities, and a range of co-curricular pursuits — from debate and dramatics to sports, robotics, and community service. The result is a well-rounded young person, ready not just for board exams but for the choices and challenges that follow.'
      ]
    }
  ];

  const feeNote = 'The fee structure for Session 2026-27 is outlined below. For detailed information regarding specific fee heads, payment schedules, or any clarifications, please feel free to reach out to the school office. We are happy to assist you.';

  const guidelines = {
    students: [
      'Always carry your school diary, textbooks, and required stationery every day.',
      'The school is not responsible for lost or misplaced belongings. Kindly avoid bringing valuables or jewellery to school.',
      'Students using the school bus must adhere to all transport rules at all times.',
      'Applications for leave must be submitted a day in advance, duly countersigned by a parent or guardian.',
      'Come to school in proper uniform — neat, clean, and tidy.',
      'Respect and cooperate with the House Captain and students on duty.',
      'Students may not leave the school premises during working hours unless a parent or guardian (whose signature appears on the admission form and school diary) comes in person.',
      'Carry your school identity card on all working days.',
      'Maintain regular attendance.',
      'Any damage to school property will be the financial responsibility of the student\'s parents or guardians.',
      'Use of mobile phones or telephone calls during school hours is strictly not permitted.'
    ],
    parents: [
      'Use the school diary as your primary channel of communication with the class teacher. Check it regularly for homework and teacher remarks.',
      'Sign test copies and papers promptly as and when they are sent home for review.',
      'Ensure your child has all required textbooks, stationery, and craft materials from the very start of the session.',
      'Book and copy covers should be brown in colour, with the student\'s name, roll number, class, section, and subject written clearly.',
      'Keep the school uniform clean and complete — tie, belt, and shoes must be worn daily.',
      'Please send your ward to school on time. In case of absence, submit a duly signed application to the class teacher.',
      'Attend Parent-Teacher Meets regularly. Your presence is a powerful encouragement for your child\'s growth.',
      'Address all communication to the Principal, including your child\'s name, class, and section in every correspondence.',
      'Do not send your child to school if they have an infectious illness. A medical certificate from a recognised authority is required when rejoining after illness.',
      'The school takes every reasonable measure to ensure the safety of students on campus. However, the school cannot be held responsible for events beyond its control.',
      'Parents and guardians are not permitted to enter classrooms, corridors, or upper floors without prior permission from the Principal.',
      'Pay school fees as per the scheduled dates.',
      'Inform the school promptly of any changes in your address or contact number.',
      'In case of a family emergency, please do not send your ward to school, as students are not permitted to leave campus during school hours.'
    ]
  };

  const certificateRules = [
    {
      iconName: 'fileText',
      title: 'Advance Application Required',
      text: 'Requests for Transfer Certificates, Character Certificates, Birth Certificates, or any other official documents must be submitted in writing to the Principal at least one week in advance, along with an advance payment of ₹500.'
    },
    {
      iconName: 'calendar',
      title: 'Minimum Session Completion',
      text: 'Certificates of any kind are issued only after the student has completed at least one full academic session. No certificate will be processed before this condition is met.'
    },
    {
      iconName: 'checkCircle',
      title: 'Fee Clearance is Mandatory',
      text: 'All pending fees and dues must be fully cleared before any certificate is issued. Please ensure your account is settled before making a request.'
    }
  ];

  return (
    <div className="academic-page">

      {/* Page Hero — real photo background */}
      <div className="academic-hero">
        <img
          src="img\52b6dc6f-b3bc-42da-95ba-4f4b46d196bc.JPG"
          alt="DPS Robertsganj Campus"
          className="academic-hero-bg-img"
        />
        <div className="academic-hero-overlay" />
        <div className="section-container academic-hero-content">
          <div className="section-label">Academics</div>
          <h1 className="academic-hero-title">A Foundation Built for Life</h1>
          <p className="academic-hero-sub">
            At DPS Robertsganj, we believe education goes beyond marks and grades. Our academic
            framework nurtures the whole child — building knowledge, character, and the confidence
            to thrive in a changing world.
          </p>
        </div>
      </div>

      {/* Section 1: Fee Structure — image beside text */}
      <section className="academic-section bg-light">
        <div className="section-container">
          <div className="fee-layout">
            <div className="fee-image-col">
              <img
                src="img\475135876_931854365738159_7293315653921356242_n.jpg"
                alt="DPS Robertsganj School"
                className="fee-photo"
              />
            </div>
            <div className="fee-text-col">
              <div className="section-label">Transparency &amp; Trust</div>
              <h2 className="section-title">School Fee Structure</h2>
              <p className="section-description">{feeNote}</p>
              <div className="fee-banner">
                <div className="fee-banner-icon">
                  <Icon name="building" size={32} />
                </div>
                <div className="fee-banner-content">
                  <h3>Fee Structure for Session 2026-27</h3>
                  <p>
                    The complete fee schedule is available at the school office. Our team is
                    always ready to walk you through the structure and answer any questions.
                  </p>
                  <a href="#contact" className="fee-cta-btn">Contact School Office</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Certificates */}
      <section className="academic-section bg-white">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">Official Documents</div>
            <h2 className="section-title">Certificate Issuance</h2>
            <p className="section-description">
              We understand how important official documents are for your child's future. Here
              is everything you need to know about requesting certificates from the school.
            </p>
          </div>

          <div className="cert-grid">
            {certificateRules.map((rule, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon">
                  <Icon name={rule.iconName} size={28} />
                </div>
                <h3 className="cert-title">{rule.title}</h3>
                <p className="cert-text">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Curriculum — alternating photo + text */}
      <section className="academic-section bg-light">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">Learning at Every Stage</div>
            <h2 className="section-title">Our Curriculum</h2>
            <p className="section-description">
              From the earliest years of curiosity to the critical middle school phase, our
              curriculum is carefully crafted to match each stage of a child's growth — blending
              rigorous academics with creativity and life skills.
            </p>
          </div>

          <div className="curriculum-list">
            {curriculumLevels.map((item, i) => (
              <div
                key={i}
                className={`curriculum-card ${i % 2 === 1 ? 'curriculum-card--reverse' : ''}`}
              >
                <div className="curriculum-photo-wrap">
                  <img src={item.image} alt={item.level} className="curriculum-photo" />
                  <div className="curriculum-photo-badge" style={{ background: item.borderColor }}>
                    <span className="curriculum-badge-icon">
                      <Icon name={item.iconName} size={16} />
                    </span>
                    <span className="curriculum-badge-text">{item.classes}</span>
                  </div>
                </div>
                <div className="curriculum-body" style={{ borderTopColor: item.borderColor }}>
                  <h3 className="curriculum-level" style={{ color: item.borderColor }}>
                    {item.level}
                  </h3>
                  {item.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Guide for Students — dot pattern bg + side image */}
      <section className="academic-section bg-dots">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">Student Handbook</div>
            <h2 className="section-title">Guidelines for Students</h2>
            <p className="section-description">
              These guidelines are designed to help every student make the most of their time
              at school — staying safe, respectful, and ready to learn.
            </p>
          </div>

          <div className="guidelines-grid">
            {guidelines.students.map((item, i) => (
              <div key={i} className="guideline-item">
                <div className="guideline-num">{String(i + 1).padStart(2, '0')}</div>
                <p className="guideline-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Guide for Parents */}
      <section className="academic-section bg-green-tint">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">Parent Partnership</div>
            <h2 className="section-title">Guidelines for Parents &amp; Guardians</h2>
            <p className="section-description">
              You are an indispensable part of this school community. The partnership between
              home and school is one of the most powerful forces behind a child's growth and
              success. We deeply value your cooperation and involvement.
            </p>
          </div>

          <div className="guidelines-grid">
            {guidelines.parents.map((item, i) => (
              <div key={i} className="guideline-item guideline-item--parent">
                <div className="guideline-num guideline-num--parent">{String(i + 1).padStart(2, '0')}</div>
                <p className="guideline-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AcademicPage;

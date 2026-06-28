import React from 'react';
import './MandatoryDisclosuresPage.css';
import Icon from '../components/Icon';

const categories = [
  {
    title: 'Affiliation, Recognition & Statutory Documents',
    items: [
      { file: '1.-Affiliation-Letter-Class-I-X.pdf', title: 'Affiliation Letter (Class I–X)' },
      { file: '1.1.-Grant-letter-DPS-robertsganj-I-XII.pdf', title: 'Grant Letter (Class I–XII)' },
      { file: '2.-TRUST-DEED-AL-598451-AL-733962.pdf', title: 'Trust Deed' },
      { file: '4.-Copy-of-Recognition-Certificate-from-State-Education-Government-from-class-1-to-8.pdf', title: 'Recognition Certificate (Class I–VIII)' },
      { file: '5.-Copy-of-National-Building-Code.pdf', title: 'National Building Code Compliance' },
      { file: '6.-Copy-of-Fire-Safety-Certificate.pdf', title: 'Fire Safety Certificate' },
      { file: '7.-DIOS-Certificate.pdf', title: 'DIOS Certificate' },
      { file: 'Affiliation-Paper.pdf', title: 'Affiliation Paper' },
      { file: 'Transfer-Certificate.pdf', title: 'Transfer Certificate (Format)' },
      { file: 'Link-of-YouTube-Video-of-The-Inspection-of-School.pdf', title: 'School Inspection — Video Link' },
    ]
  },
  {
    title: 'School Information & Academic Calendar',
    items: [
      { file: '2.-Annual-Academic-Calander.pdf', title: 'Annual Academic Calendar' },
      { file: 'DPS-Catalogue.pdf', title: 'School Catalogue' },
      { file: 'dps-brochure-2022-23-Fanal-10-1-2021.pdf', title: 'School Brochure 2022–23' },
      { file: 'School-Infrastructure.pdf', title: 'School Infrastructure' },
      { file: 'School-Infrastructure (1).pdf', title: 'School Infrastructure (Annexure)' },
      { file: 'Students-Strength-2020-21-uploded-school-website.pdf', title: "Students' Strength 2020–21" },
      { file: 'information (1).pdf', title: 'School Information' },
    ]
  },
  {
    title: 'Fee Structure & Finance',
    items: [
      { file: '1.-Fees-Structure-2021-22.pdf', title: 'Fee Structure 2021–22' },
      { file: 'FEE-Chart-2024-25.pdf', title: 'Fee Chart 2024–25' },
      { file: 'FEE-Chart-2024-25 (1).pdf', title: 'Fee Chart 2024–25 (Annexure)' },
      { file: 'Fee-Chart-2020-21-uploded-school-website.pdf', title: 'Fee Chart 2020–21' },
      { file: 'Fee-Structure-23-24.pdf', title: 'Fee Structure 2023–24' },
      { file: 'Fee-Structure-Transport-Fee-2025-26.pdf', title: 'Transport Fee Structure 2025–26' },
      { file: 'Processing-Charges.pdf', title: 'Processing Charges' },
      { file: 'BALANCE-SHEET-2022-23.pdf', title: 'Balance Sheet 2022–23' },
    ]
  },
  {
    title: 'Staff & Committees',
    items: [
      { file: '5.-School-Management-Committee-SMC (1).pdf', title: 'School Management Committee (SMC)' },
      { file: 'Staff-Teaching.pdf', title: 'Teaching Staff Details' },
      { file: 'Teaching-Staff-Statement-2020-21.pdf', title: 'Teaching Staff Statement 2020–21' },
      { file: 'Parents-Teachers-Association-PTA.pdf', title: 'Parents-Teachers Association (PTA)' },
      { file: 'Parents-Teachers-Association-PTA (1).pdf', title: 'Parents-Teachers Association (Annexure)' },
    ]
  },
  {
    title: 'Holiday Homework & Worksheets',
    items: [
      { file: 'L.K.G.-Holiday-Homework-.pdf', title: 'LKG — Holiday Homework' },
      { file: 'LKG-Holiday-Home-Work-2020-21.pdf', title: 'LKG — Holiday Homework 2020–21' },
      { file: 'EVS-Class-1.pdf', title: 'Class I — EVS Worksheet' },
      { file: 'EVS-Class-1 (1).pdf', title: 'Class I — EVS Worksheet (Annexure)' },
      { file: 'EVS-class-2.pdf', title: 'Class II — EVS Worksheet' },
      { file: 'EVS-class-3.pdf', title: 'Class III — EVS Worksheet' },
      { file: 'EVS-Class-4.pdf', title: 'Class IV — EVS Worksheet' },
      { file: 'EVS-Class-5.pdf', title: 'Class V — EVS Worksheet' },
      { file: 'Class-IV-HH-Of-Social-Studies-4.pdf', title: 'Class IV — Social Studies Holiday Homework' },
      { file: 'class-V-HH-of-Social-Studies-2.pdf', title: 'Class V — Social Studies Holiday Homework' },
      { file: 'Social-Science-HH-Class-VI-2.pdf', title: 'Class VI — Social Science Holiday Homework' },
      { file: 'class-VI-HH-ENGLISH-2.pdf', title: 'Class VI — English Holiday Homework' },
      { file: 'Class-VII-HH-Social-Science.pdf', title: 'Class VII — Social Science Holiday Homework' },
      { file: 'Class-VII-HH-ENGLISH-2.pdf', title: 'Class VII — English Holiday Homework' },
      { file: 'Maths-Holiday-Homework-VII.pdf', title: 'Class VII — Maths Holiday Homework' },
      { file: 'Maths-Holiday-Homework-VIII.pdf', title: 'Class VIII — Maths Holiday Homework' },
    ]
  }
];

const totalDocs = categories.reduce((sum, c) => sum + c.items.length, 0);

const MandatoryDisclosuresPage = () => {
  return (
    <div className="disclosures-page">

      {/* Hero */}
      <div className="disclosures-hero">
        <img
          src="img/photo2.jpg"
          alt="DPS Robertsganj Campus"
          className="disclosures-hero-bg-img"
        />
        <div className="disclosures-hero-overlay" />
        <div className="section-container disclosures-hero-content">
          <div className="section-label">Transparency &amp; Compliance</div>
          <h1 className="disclosures-hero-title">Mandatory Public Disclosure</h1>
          <p className="disclosures-hero-sub">
            In line with CBSE affiliation guidelines, DPS Robertsganj publishes its statutory
            certificates, academic records, and fee documents here for parents, guardians, and the
            public to view at any time.
          </p>
        </div>
      </div>

      {/* Document categories */}
      <section className="disclosures-section bg-white">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">{totalDocs} Documents Available</div>
            <h2 className="section-title">Disclosure Documents</h2>
            <p className="section-description">
              Click on any document below to view or download the PDF in a new tab.
            </p>
          </div>

          <div className="disc-categories">
            {categories.map((cat, ci) => (
              <div key={ci} className="disc-category">
                <h3 className="disc-category-title">{cat.title}</h3>
                <div className="disc-doc-list">
                  {cat.items.map((item, ii) => (
                    <a
                      key={ii}
                      href={encodeURI(`/DPS-pdf/${item.file}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="disc-doc-row"
                    >
                      <span className="disc-doc-icon">
                        <Icon name="fileText" size={18} />
                      </span>
                      <span className="disc-doc-title">{item.title}</span>
                      <span className="disc-doc-view">
                        View
                        <svg className="disc-doc-arrow" viewBox="0 0 16 16" fill="none">
                          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MandatoryDisclosuresPage;

import React, { useState } from 'react';
import UtilityBar from './components/UtilityBar';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import WelcomeSection from './components/WelcomeSection';
import FacilitiesSection from './components/FacilitiesSection';
import MissionSection from './components/MissionSection';
import PrincipalSection from './components/PrincipalSection';
import NoticeSection from './components/NoticeSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import AcademicPage from './pages/AcademicPage';
import AdmissionsPage from './pages/AdmissionsPage';
import StudentLifePage from './pages/StudentLifePage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <UtilityBar />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'home' && (
        <>
          <Hero />
          <QuickStats />
          <WelcomeSection />
          <FacilitiesSection />
          <MissionSection />
          <PrincipalSection />
          <NoticeSection />
          <CTABanner />
        </>
      )}

      {currentPage === 'academics' && <AcademicPage />}
      {currentPage === 'admissions' && <AdmissionsPage onNavigate={setCurrentPage} />}
      {currentPage === 'student-life' && <StudentLifePage />}
      {currentPage === 'news-events' && <NewsEventsPage />}
      {currentPage === 'contact' && <ContactPage />}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
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
import './App.css';

function App() {
  return (
    <div className="App">
      <UtilityBar />
      <Header />
      <Hero />
      <QuickStats />
      <WelcomeSection />
      <FacilitiesSection />
      <MissionSection />
      <PrincipalSection />
      <NoticeSection />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;

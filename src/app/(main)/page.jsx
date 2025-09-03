// pages/index.js
import React from 'react';
import HeroSection from '../components/heroSection/page';
import SearchBar from '../components/utils/searchbar';
import CountrySlider from '../components/countrySlider/page';
import EsimTabs from '../components/eSimTabs/page';
import HowItWorks from '../components/how-It-Works/page';
import FeatureCards from '../components/featureCards/page';
import FAQ from '../components/FAQs/page';
import GetApp from '../components/getApp/page';


const HomePage = () => {
  return (
    <>
      <HeroSection
        heading="WE CONNECT YOU GLOBALLY"
        paragraph="Whether you’re jet-setting across Europe, backpacking through Southeast Asia, or navigating a business trip to the USA, we offer the best eSIM for international travel with instant setup, secure access, and reliable data in 200+ destinations."
        // Use a full URL or a path from your public directory for images
        bgImage="assets/Images/bg-heroSection.png" 
        vector="assets/icons/hero-sectionvector.png" 
        customContent={<SearchBar />}
      />
      <CountrySlider />
      <EsimTabs  />
      <HowItWorks />
      <FeatureCards />
      <FAQ />
      <GetApp />
    </>
  );
};

export default HomePage;
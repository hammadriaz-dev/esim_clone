"use client"

import AuthCard from '../components/authcard/page.jsx'
import HeroSection from '../components/heroSection/page'
import ESIMTabs from '../components/eSimTabs/page'
import GetApp from '../components/getApp/page'
import FAQ from '../components/FAQs/page'
import FeatureCards from '../components/featureCards/page'
import HowItWorks from '../components/how-It-Works/page'
import CountrySlider from '../components/countrySlider/page'
import SearchBar from '../components/utils/searchBar'

export default function Home() {
  return (
     <>
      <HeroSection
        heading="WE CONNECT YOU GLOBALLY"
        paragraph="Whether you’re jet-setting across Europe, backpacking through Southeast Asia, or navigating a business trip to the USA, we offer the best eSIM for international travel with instant setup, secure access, and reliable data in 200+ destinations."
        // Use a full URL or a path from your public directory for images
        bgImage="assets/Images/bg-herosection.png" 
        vector="assets/Images/vector.png" 
        customContent={<SearchBar />}
      />

      <CountrySlider />
      <ESIMTabs />
      <HowItWorks />
      <FeatureCards />
      <FAQ />
      <GetApp />  
      
    </>

  );
}

// components/GetAppSection.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const GetApp = () => {
  return (
    <section className="py-16"> {/* Removed background from here to apply it to inner div */}
      <div className="container mx-auto px-6">
        {/* Inner container for the rounded corners and orange background */}
        <div className="bg-[#F76C4B] rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white relative z-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 leading-tight">
                WE PREFER YOUR CONVENIENCE - GET THE APP NOW!
              </h2>
              <p className="text-base mb-6 max-w-lg mx-auto lg:mx-0">
                Order. Activate. Manage. All from your smartphone. Download the best eSIM app and handle everything in one place – compatible with both iOS and Android.
              </p>
              
              {/* Stars and Downloads */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="flex text-yellow-400 text-lg mr-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-sm">500,000+ Downloads</p>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <img src="assets/icons/google-play.png" alt="Google Play" className="w-6 h-6 mr-3" />
                  <div>
                    <p className="text-xs">GET IT ON</p>
                    <p className="font-semibold text-lg">Google Play</p>
                  </div>
                </a>
                <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <img src="assets/icons/apple-store.png" alt="App Store" className="w-6 h-6 mr-3" />
                  <div>
                    <p className="text-xs">Download on the</p>
                    <p className="font-semibold text-lg">App Store</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Image (Illustrative elements) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[300px] lg:h-auto">
               <img 
                 src="assets/Images/app-promo-graphics.png" 
                 alt="Travel app illustration" 
                 className="absolute inset-0 w-full h-full object-contain object-right z-0"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
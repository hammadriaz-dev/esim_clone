// components/HowItWorks.js
'use client';
import React, { useState, useEffect } from 'react';

const stepsContent = [
  {
    number: 1,
    title: 'BUY A DATA PLAN',
    description: 'Search for your country and choose from flexible eSIM regional, eSIM local, or eSIM global data packs.',
  },
  {
    number: 2,
    title: 'INSTALL YOUR ESIM',
    description: 'Follow simple instructions to install your eSIM in minutes. No physical SIM cards or complicated setups.',
  },
  {
    number: 3,
    title: 'ACTIVATE & ENJOY',
    description: 'Activate your plan when you\'re ready to travel and enjoy seamless connectivity wherever you go.',
  },
];

const HowItWorks = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % stepsContent.length);
    }, 5000); // Change step every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const currentStep = stepsContent[currentStepIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center md:text-left">
          HOW DOES THE ESIM WORK?
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left Panel - Steps */}
          <div className="relative w-full lg:w-2/5 min-h-[500px] p-8 rounded-2xl overflow-hidden shadow-xl"
            style={{ backgroundImage: 'linear-gradient(to bottom, #FFC1A6, #FC682A)' }}> {/* Adjusted gradient */}
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-orange-800/60 opacity-60"></div>
            
            <div className="relative z-10 flex flex-col justify-between h-full text-white">
              <div>
                <p className="text-sm uppercase tracking-wide opacity-80 mb-65">Three Steps</p>
                <div className="flex items-center text-4xl font-bold mb-4">
                  <span className="mr-3 opacity-90">{currentStep.number}</span>
                  <h3 className="text-3xl font-bold">{currentStep.title}</h3>
                </div>
                <p className="text-base leading-relaxed opacity-90">
                  {currentStep.description}
                </p>
              </div>

              {/* Step Indicators */}
              <div className="flex space-x-2 mt-8">
                {stepsContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStepIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      currentStepIndex === index ? 'bg-white w-6' : 'bg-white opacity-40'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
            <div className="rounded-4xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="assets/Images/eSim-work.png" // Replace with your phone image URL
                alt="eSIM App Interface"
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
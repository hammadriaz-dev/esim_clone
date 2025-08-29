'use client'
import React from 'react';

// Reusable Button Utility Component
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-14 py-4 rounded-xl font-semibold transition-all duration-200 ease-in-out';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-[#FC682A] text-white hover:bg-[#E55B1F] shadow-lg';
      break;
    case 'secondary':
      variantClasses = 'bg-white text-[#555] border-2 border-[#D4D4D4] hover:bg-gray-50 shadow-md';
      break;
    default:
      variantClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

// Hero Section Component
const HeroSection = ({
  heading = 'MANAGE YOUR SIM HERE.',
  paragraph = 'Our team is here to assist you promptly through any of these channels.',
  button1Text = 'Buy eSIM',
  button2Text = 'My eSIM',
  onButton1Click = () => console.log(`Button 1 ${button1Text} clicked`),
  onButton2Click = () => console.log(`Button 2 ${button1Text} clicked`),
}) => {
  return (
    <section
      className="relative min-h-[50vh]  flex items-center justify-center text-center m-4 rounded-t-4xl p-4
                 bg-gradient-to-b from-[#FFA07A] via-[#FFDAB9] to-white"
    >
      <div className="max-w-4xl mx-auto z-10">
        {/* Paragraph */}
        <p className="text-white text-base md:text-lg mb-4 sm:mb-2 md:mb-4 lg:mb-6 font-medium">
          {paragraph}
        </p>

        {/* Heading */}
        <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl
                       font-bold uppercase tracking-wide leading-tight mb-8">
          {heading}
        </h1>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button variant="primary" onClick={onButton1Click}>
            {button1Text}
          </Button>
          <Button variant="secondary" onClick={onButton2Click}>
            {button2Text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

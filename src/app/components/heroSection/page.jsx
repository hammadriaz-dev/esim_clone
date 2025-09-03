'use client'
import React from 'react';
import Button from '../utils/buttons';


const HeroSection = ({
  heading = 'MANAGE YOUR SIM HERE.',
  paragraph = 'Our team is here to assist you promptly through any of these channels.',
  button1Text = 'Buy eSIM',
  button2Text = 'My eSIM',
  onButton1Click = () => console.log(`Button 1 ${button1Text} clicked`),
  onButton2Click = () => console.log(`Button 2 ${button1Text} clicked`),
  customContent,
  bgImage,
  vector
}) => {
  const sectionStyle = bgImage ? 
    { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'top' } :
    {};

  const sectionClasses = bgImage ?
    "relative min-h-[50vh] flex items-center justify-center text-center m-4 rounded-t-4xl p-4 overflow-hidden" :
    "relative min-h-[50vh] flex items-center justify-center text-center m-4 rounded-t-4xl p-4 bg-gradient-to-b from-[#FFA07A] via-[#FFDAB9] to-white";

  return (
    <section className={sectionClasses} style={sectionStyle}>
      {/* The black overlay has been removed from here. */}
      
      {/* Vector image positioned at the top right */}
      {vector && (
        <img
          src={vector}
          alt="Vector art"
          className="absolute top-8 right-30 w-20 h-20 z-10"
        />
      )}

      <div className="max-w-4xl mx-auto z-20 text-white py-4">
         {/* Heading */}
        <h1 className="text-white pt-20 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl
                       font-bold uppercase tracking-wide leading-tight mb-8">
          {heading}
        </h1>

        {/* Paragraph */}
        <p className="text-white text-base md:text-lg mb-4 sm:mb-2 md:mb-4 lg:mb-6 font-medium">
          {paragraph}
        </p>

       
        {/* Dynamic content (buttons or search bar) */}
        {customContent ? (
          customContent
        ) : (
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" onClick={onButton1Click}>
              {button1Text}
            </Button>
            <Button variant="secondary" onClick={onButton2Click}>
              {button2Text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
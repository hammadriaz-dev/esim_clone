// components/CountrySlider.js
'use client'
import React, { useRef, useState, useEffect } from 'react';
import CountryCard from '../utils/countryCard';


const countries = [
  { id: 1, name: "JAPAN", imageUrl: "assets/Images/Japan.png", price: "3.3" },
  { id: 2, name: "TURKEY", imageUrl: "assets/Images/Turkey.png", price: "3.3" },
  { id: 3, name: "UNITED STATES", imageUrl: "assets/Images/US.png", price: "3.3" },
  { id: 4, name: "RUSSIA", imageUrl: "assets/Images/Russia.png", price: "3.3" },
  { id: 5, name: "UNITED STATES", imageUrl: "assets/Images/US.png", price: "3.3" },
  { id: 6, name: "RUSSIA", imageUrl: "assets/Images/Russia.png", price: "3.3" },
  
];

const CountrySlider = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The '2' is a sensitivity multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container) {
          container.scrollLeft += 1;
        }
      }, 20); // Adjust speed here
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    if (container) {
      startAutoScroll();
      container.addEventListener('mouseenter', stopAutoScroll);
      container.addEventListener('mouseleave', startAutoScroll);
    }

    return () => {
      if (container) {
        stopAutoScroll();
        container.removeEventListener('mouseenter', stopAutoScroll);
        container.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, []);

  return (
    <section className="mt-[-100] pb-10 bg-gray-50 overflow-y-hidden z-10">
      <div className="container mx-auto px-6">
        <div 
          className="flex overflow-x-hidden cursor-grab"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {countries.map(country => (
            <CountryCard
              key={country.id}
              imageUrl={country.imageUrl}
              countryName={country.name}
              price={country.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountrySlider;
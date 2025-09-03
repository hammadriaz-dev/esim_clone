// components/Button.js
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

export default Button;
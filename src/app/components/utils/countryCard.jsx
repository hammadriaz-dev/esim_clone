// components/CountryCard.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CountryCard = ({ imageUrl, countryName, price }) => {
  return (
    <div className="flex-none w-64 mr-6 bg-white rounded-xl shadow-sm border border-black overflow-hidden">
      <div className="relative w-full h-40">
        <img
          src={imageUrl}
          alt={`Image of ${countryName}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{countryName}</h3>
          <a href="#" className="p-3 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <FaArrowRight className="h-4 w-4 text-gray-600 transform -rotate-45" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-1">Starts at ${price}</p>
      </div>
    </div>
  );
};

export default CountryCard;
// components/TabCard.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TabCard = ({ countryCode, countryName, price }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
    <div className="flex items-center">
      <img
        // Dynamic flag URL based on country code
        src={`https://flagsapi.com/${countryCode}/flat/32.png`}
        alt={`Flag of ${countryName}`}
        className="w-8 h-8 rounded-full shadow-md mr-4"
      />
      <div className="flex flex-col">
        <h4 className="text-base font-semibold text-gray-800">{countryName}</h4>
        <p className="text-sm text-gray-500">Starts at ${price}</p>
      </div>
    </div>
    <a href="#" className="p-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition-colors">
      <FaArrowRight className="h-4 w-4 text-gray-600 transform -rotate-45" />
    </a>
  </div>
);

export default TabCard;
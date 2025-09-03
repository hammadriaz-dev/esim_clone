// components/eSIMTabs.js
'use client'
import React, { useState } from 'react';
import TabCard from '../utils/tabCard';

const data = {
  local: [
    { id: 1, country: 'AUSTRIA', countryCode: 'AT', price: '3.3' },
    { id: 2, country: 'CANADA', countryCode: 'CA', price: '3.3' },
    { id: 3, country: 'CHINA', countryCode: 'CN', price: '3.3' },
    { id: 4, country: 'EGYPT', countryCode: 'EG', price: '3.3' },
    { id: 5, country: 'FRANCE', countryCode: 'FR', price: '3.3' },
    { id: 6, country: 'GERMANY', countryCode: 'DE', price: '3.3' },
    { id: 7, country: 'GREECE', countryCode: 'GR', price: '3.3' },
    { id: 8, country: 'GREECE', countryCode: 'GR', price: '3.3' },
    { id: 9, country: 'INDIA', countryCode: 'IN', price: '3.3' },
    { id: 10, country: 'ISRAEL', countryCode: 'IL', price: '3.3' },
    { id: 11, country: 'ITALY', countryCode: 'IT', price: '3.3' },
    { id: 12, country: 'MEXICO', countryCode: 'MX', price: '3.3' },
    { id: 13, country: 'QATAR', countryCode: 'QA', price: '3.3' },
    { id: 14, country: 'RUSSIA', countryCode: 'RU', price: '3.3' },
    { id: 15, country: 'SAUDI ARABIA', countryCode: 'SA', price: '3.3' },
    { id: 16, country: 'SPAIN', countryCode: 'ES', price: '3.3' },
    { id: 17, country: 'THAILAND', countryCode: 'TH', price: '3.3' },
    { id: 18, country: 'TURKEY', countryCode: 'TR', price: '3.3' },
    { id: 19, country: 'UAE', countryCode: 'AE', price: '3.3' },
  ],
  regional: [
    { id: 1, country: 'ASIA', countryCode: 'AS', price: '5.5' },
    { id: 2, country: 'EUROPE', countryCode: 'EU', price: '6.5' },
    { id: 3, country: 'AMERICAS', countryCode: 'AM', price: '7.5' },
  ],
  global: [
    { id: 1, country: 'GLOBAL', countryCode: 'WORLD', price: '10.5' },
  ],
};

const ESIMTabs = () => {
  const [activeTab, setActiveTab] = useState('local');

  const renderContent = () => {
    const activeData = data[activeTab];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeData.map((item) => (
          <TabCard
            key={item.id}
            countryCode={item.countryCode}
            countryName={item.country}
            price={item.price}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">
          WHICH COUNTRY IS CALLING YOU?
        </h2>
        <p className="text-gray-600 text-center md:text-left mt-2 mb-8">
          Whether you need a prepaid eSIM for a weekend getaway or a global eSIM for multiple borders
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-start space-x-8 mb-8">
          <button
            onClick={() => setActiveTab('local')}
            className={`
              text-lg font-semibold pb-2 border-b-2 transition-colors
              ${activeTab === 'local' ? 'border-[#FF5733] text-[#FF5733]' : 'border-transparent text-gray-500 hover:text-gray-700'}
            `}
          >
            Local eSIMs
          </button>
          <button
            onClick={() => setActiveTab('regional')}
            className={`
              text-lg font-semibold pb-2 border-b-2 transition-colors
              ${activeTab === 'regional' ? 'border-[#FF5733] text-[#FF5733]' : 'border-transparent text-gray-500 hover:text-gray-700'}
            `}
          >
            Regional eSIMs
          </button>
          <button
            onClick={() => setActiveTab('global')}
            className={`
              text-lg font-semibold pb-2 border-b-2 transition-colors
              ${activeTab === 'global' ? 'border-[#FF5733] text-[#FF5733]' : 'border-transparent text-gray-500 hover:text-gray-700'}
            `}
          >
            Global eSIMs
          </button>
        </div>

        {/* Tab Content */}
        {renderContent()}

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 rounded-full text-white font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{ backgroundImage: 'linear-gradient(to right, #ff9966, #ff5e62)' }}>
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ESIMTabs;
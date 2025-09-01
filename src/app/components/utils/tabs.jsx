// components/Tabs.js
import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const getTabClasses = (tabName) => `
    p-4 text-base font-bold cursor-pointer transition-colors duration-300
    ${activeTab === tabName ? 'text-orange-500' : 'text-gray-500'}
  `;

  return (
    <div className="flex justify-between border-b border-gray-200 relative mb-8">
      <button
        className={getTabClasses('Data')}
        onClick={() => setActiveTab('Data')}
      >
        Data
      </button>
      <button
        className={getTabClasses('Minutes')}
        onClick={() => setActiveTab('Minutes')}
      >
        Minutes
      </button>
      <button
        className={getTabClasses('SMS')}
        onClick={() => setActiveTab('SMS')}
      >
        SMS
      </button>
      <div
        className={`absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300
          ${activeTab === 'Data' ? 'left-0 w-1/3' : ''}
          ${activeTab === 'Minutes' ? 'left-1/3 w-1/3' : ''}
          ${activeTab === 'SMS' ? 'left-2/3 w-1/3' : ''}
        `}
      ></div>
    </div>
  );
};

export default Tabs;
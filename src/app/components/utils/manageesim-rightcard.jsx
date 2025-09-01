// components/RightCard.js
import React, { useState } from 'react';
import Tabs from './tabs';
import DataUsage from './datausage';
import { FaInfoCircle } from 'react-icons/fa';

const RightCard = () => {
  const [activeTab, setActiveTab] = useState('Data');

  const renderContent = () => {
    switch (activeTab) {
      case 'Data':
        return <DataUsage used={52.70} total={100} />;
      case 'Minutes':
        return <p className="text-gray-500 text-base">Minutes usage content goes here.</p>;
      case 'SMS':
        return <p className="text-gray-500 text-base">SMS usage content goes here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md w-[450px] md:w-full lg:w-[450px] border">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="min-h-[200px] flex justify-center items-center">
        {renderContent()}
      </div>
      <div className="flex items-center justify-center gap-3 bg-orange-50 border border-orange-200 rounded-lg p-3 text-orange-700 text-sm mt-3">
        <FaInfoCircle className="text-orange-500 text-lg" />
        <p>You are low on data please update your package to avoid inconvenience</p>
      </div>
    </div>
  );
};

export default RightCard;
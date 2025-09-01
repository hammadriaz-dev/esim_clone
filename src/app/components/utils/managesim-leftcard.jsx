// components/LeftCard.js
import React from 'react';
import { FaSimCard, FaKey, FaMobileAlt, FaCalendarAlt, FaInfoCircle, FaGlobe, FaBarcode, FaDownload, FaShareAlt } from 'react-icons/fa'; // Using react-icons for icons

const LeftCard = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md w-[450px] md:w-full lg:w-[450px] border">
      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        {/* ICCID */}
        <div className="flex items-start gap-3">
          <FaSimCard className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">ICCID</p>
            <p className="text-base text-gray-800 font-bold">FSJAJJKAhsdff</p>
          </div>
        </div>
        {/* Activation Code */}
        <div className="flex items-start gap-3">
          <FaKey className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">Activation Code</p>
            <p className="text-base text-gray-800 font-bold">OcakkxY8D</p>
          </div>
        </div>
        {/* Manual Entry */}
        <div className="flex items-start gap-3">
          <FaMobileAlt className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">Manual Entry (Android)</p>
            <p className="text-base text-gray-800 font-bold">LPA-12938928989384994</p>
          </div>
        </div>
        {/* Purchase Date */}
        <div className="flex items-start gap-3">
          <FaCalendarAlt className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">Purchase Date</p>
            <p className="text-base text-gray-800 font-bold">28-4-2024</p>
          </div>
        </div>
        {/* Status */}
        <div className="flex items-start gap-3">
          <FaInfoCircle className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">Status</p>
            <p className="text-base text-gray-800 font-bold">28-4-2024</p>
          </div>
        </div>
        {/* Coverage */}
        <div className="flex items-start gap-3">
          <FaGlobe className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">Coverage</p>
            <p className="text-base text-orange-500 font-bold underline cursor-pointer">See Details</p>
          </div>
        </div>
        {/* Second Purchase Date */}
        <div className="flex items-start gap-3">
          <FaCalendarAlt className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">Purchase Date</p>
            <p className="text-base text-gray-800 font-bold">May 07,2023</p>
          </div>
        </div>
        {/* Renewable Date */}
        <div className="flex items-start gap-3">
          <FaCalendarAlt className="text-orange-500 text-xl mt-0.5" />
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">Renewable Date</p>
            <p className="text-base text-gray-800 font-bold">May 07,2023</p>
          </div>
        </div>
      </div>
      {/* QR Code Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 mt-5 pt-5 border-t border-gray-200">
        <div className="flex items-center gap-4 col-span-2">
          <FaBarcode className="text-orange-500 text-3xl" />
          <div className="w-24 h-24 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400">
            QR Code Here
          </div>
        </div>
        <div className="flex justify-end gap-5">
          <FaDownload className="text-gray-500 text-2xl cursor-pointer hover:text-orange-500 transition-colors" />
          <FaShareAlt className="text-gray-500 text-2xl cursor-pointer hover:text-orange-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
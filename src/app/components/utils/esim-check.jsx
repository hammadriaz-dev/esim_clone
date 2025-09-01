// components/EsimInstallation/EsimCheck.js
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { BiRefresh } from 'react-icons/bi';

const EsimCheck = () => {
  return (
    <div className="mt-10 p-5 rounded-lg bg-orange-50 border border-orange-200 text-sm">
      <div className="flex items-center gap-2 mb-3">
        <FaInfoCircle className="text-orange-500" />
        <h4 className="font-bold text-orange-700">Incase eSIM doesn't work please check:</h4>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 text-orange-700">
        <div className="flex-1 flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-200">
          <span className="font-semibold text-gray-700">APN</span>
          <span className="font-bold">Global Data</span>
          <BiRefresh className="ml-auto text-xl cursor-pointer" />
        </div>
        <div className="flex-1 flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-200">
          <span className="font-semibold text-gray-700">Data Roaming</span>
          <span className="font-bold">On</span>
          <FaInfoCircle className="ml-auto text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default EsimCheck;
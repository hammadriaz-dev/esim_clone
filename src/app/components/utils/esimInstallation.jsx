// components/EsimInstallationPage.js
import React, { useState } from 'react';
import { FaRegCopy, FaInfoCircle } from 'react-icons/fa';
import { BiRefresh } from 'react-icons/bi';

// Component to render the installation steps based on active tabs
const InstallationSteps = ({ activeTab, activeDevice }) => {
  const steps = {
    Direct: {
      'iOS': {
        step1: [
          'Tap on "Install eSIM".',
          'Tap on "Allow" on the confirmation dialog box.',
          'Follow the on-screen instructions to complete the eSIM download and installation.',
          'Choose a label for your new eSIM plan.',
          'Select "Primary" for your default line, then tap "Continue."',
          'Choose "Primary" for iMessage and FaceTime for your Apple ID, then tap "Continue."',
          'Select your new eSIM plan for cellular/mobile data, then tap "Continue."',
        ],
        step2: [
          'Go to "Cellular/Mobile Data", then select the recently downloaded eSIM on your device.',
          'Enable the "Turn On This Line" toggle, then select your new eSIM plan for cellular/mobile data.',
          'Tap "Network Selection", disable the "Automatic" toggle, then manually select the supported network if your eSIM has connected to the wrong network.',
          'Enable the "Data Roaming" toggle for your new eSIM plan.',
        ],
      },
      'Android': {
        step1: [
          'Step 1 instructions for Android Direct method...',
        ],
        step2: [
          'Step 2 instructions for Android Direct method...',
        ],
      },
    },
    'QR Code': {
      'iOS': {
        step1: [
          'Open the Camera app and scan the QR code.',
          'A pop-up will appear. Tap on "Cellular Plan Detected".',
          'Follow the on-screen instructions to install the eSIM.',
        ],
        step2: [
          'If you have connectivity issues, you may need to manually enter the details.',
        ],
      },
      'Android': {
        step1: [
          'Step 1 instructions for Android QR Code method...',
        ],
        step2: [
          'Step 2 instructions for Android QR Code method...',
        ],
      },
    },
    Manual: {
      'iOS': {
        step1: [
          'Go to Settings > Cellular > Add Cellular Plan.',
          'Select "Use QR Code" and then "Enter Details Manually".',
          'Copy and paste the SM-DP+ Address and Activation Code into the respective fields.',
        ],
        step2: [
          'Step 2 instructions for iOS Manual method...',
        ],
      },
      'Android': {
        step1: [
          'Step 1 instructions for Android Manual method...',
        ],
        step2: [
          'Step 2 instructions for Android Manual method...',
        ],
      },
    },
  };

  const currentSteps = steps[activeTab][activeDevice];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Step 1 Section */}
      <div className="flex-1">
        <h4 className="text-orange-500 font-semibold mb-3">Step 1</h4>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          {currentSteps.step1.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      {/* Step 2 Section */}
      <div className="flex-1">
        <h4 className="text-orange-500 font-semibold mb-3">Step 2 (Optional)</h4>
        <p className="text-gray-500 mb-4">Only if your eSIM is not connecting to the network tower.</p>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          {currentSteps.step2.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

// Component for the "Incase eSIM doesn't work" section
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

// Main parent component for the entire page
const EsimInstallationPage = () => {
  const [activeDeviceTab, setActiveDeviceTab] = useState('iOS');
  const [activeInstallTab, setActiveInstallTab] = useState('Direct');

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full">
      <h1 className="text-4xl font-bold mb-8">eSIM INSTALLATION</h1>
      
      {/* Device Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveDeviceTab('iOS')}
          className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
            activeDeviceTab === 'iOS' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
          }`}
        >
          iOS Devices
        </button>
        <button
          onClick={() => setActiveDeviceTab('Android')}
          className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
            activeDeviceTab === 'Android' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Android Devices
        </button>
      </div>

     {/* Installation Method Tabs */}
<div className="flex border-b-2 border-gray-300 mb-8">
  <button
    onClick={() => setActiveInstallTab('Direct')}
    className={`py-3 px-6 text-gray-700 font-semibold transition-all duration-300 relative ${
      activeInstallTab === 'Direct' ? 'border-b-4 border-orange-500 text-orange-500' : 'border-b-4 border-transparent'
    }`}
  >
    Direct
  </button>
  <button
    onClick={() => setActiveInstallTab('QR Code')}
    className={`py-3 px-6 text-gray-700 font-semibold transition-all duration-300 relative ${
      activeInstallTab === 'QR Code' ? 'border-b-4 border-orange-500 text-orange-500' : 'border-b-4 border-transparent'
    }`}
  >
    QR Code
  </button>
  <button
    onClick={() => setActiveInstallTab('Manual')}
    className={`py-3 px-6 text-gray-700 font-semibold transition-all duration-300 relative ${
      activeInstallTab === 'Manual' ? 'border-b-4 border-orange-500 text-orange-500' : 'border-b-4 border-transparent'
    }`}
  >
    Manual
  </button>
</div>
      
      <InstallationSteps activeTab={activeInstallTab} activeDevice={activeDeviceTab} />
      <EsimCheck />
    </div>
  );
};

export default EsimInstallationPage;
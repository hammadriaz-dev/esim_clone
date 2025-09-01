// components/EsimInstallation/InstallationSteps.js
import React from 'react';

const steps = {
  Direct: {
    'iOS': {
      step1: [
        'Tap on "Install eSIM".',
        'Tap on "Allow" on the confirmation dialog box.',
        // ... rest of the iOS Direct steps
      ],
      step2: [
        'Go to "Cellular/Mobile Data", then select the recently downloaded eSIM on your device.',
        // ... rest of the iOS Direct optional steps
      ]
    },
    'Android': {
      // ... steps for Android Direct
    }
  },
  'QR Code': {
    'iOS': {
      step1: ['1. Open Camera app and scan QR code.'],
      step2: ['1. Manually add details from the QR code.']
    },
    'Android': {
      // ... steps for Android QR Code
    }
  },
  Manual: {
    'iOS': {
      step1: ['1. Go to Settings > Cellular > Add Cellular Plan'],
      step2: ['1. Enter details manually.']
    },
    'Android': {
      // ... steps for Android Manual
    }
  }
};

const InstallationSteps = ({ activeTab, activeDevice }) => {
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

export default InstallationSteps;
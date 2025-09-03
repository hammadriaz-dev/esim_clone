// components/FeatureCards.js
import React from 'react';

const FeatureCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            {/* Top Card - Image with text overlay */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="assets/Images/women-shopping.png"
                alt="Woman shopping for eSIM"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
            </div>

            {/* Bottom Card - Text only */}
            <div className="p-6 rounded-2xl shadow-lg bg-[#F76C4B] text-white">
              <h3 className="text-xl font-bold mb-2">INSTANT DELIVERY</h3>
              <p className="text-sm">
                Your eSIM data plan arrives by email within minutes. Setup is quick and secure — even before your plane takes off.
              </p>
            </div>
          </div>

          {/* Column 2 - CORRECTED: Single card with BG image */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="assets/Images/hand-phone.png"
                alt="Hands holding phone with flight details"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-opacity-30 text-white">
                <h3 className="text-xl font-bold mb-2">UNLIMITED DATA PLANS</h3>
                <p className="text-sm">
                  Say goodbye to top-ups. With prepaid eSIM plans, you get non-stop data to explore freely without worrying about limits.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 - Text Card on top, Image Card on bottom */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            <div className="p-6 rounded-2xl shadow-lg bg-[#F76C4B] text-white">
              <h3 className="text-xl font-bold mb-2">KEEP YOUR ORIGINAL SIM</h3>
              <p className="text-sm">
                Use iPhone eSIM or dual SIM devices to run both your local number and data plan side by side — perfect for esim vs physical SIM advantages.
              </p>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="assets/Images/Airplane.png"
                alt="Airplane over tropical island"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
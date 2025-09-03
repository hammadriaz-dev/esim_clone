// components/FAQ.js
'use client';
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'Is eSIM good for travel?',
    answer: 'Absolutely! eSIM revolutionizes the way you travel by making it incredibly easy to switch countries without the hassle of swapping SIM cards. This feature is perfect for frequent flyers and adventurous explorers who want to stay connected no matter where their journeys take them. With eSIM, you can seamlessly transition between different networks, ensuring you always have reliable service while you explore new destinations.',
  },
  {
    id: 2,
    question: 'Which eSIM is best for Travelling?',
    answer: 'The best eSIM depends on your travel plans. For single-country trips, a local eSIM offers the best rates. For multi-country trips within a region (like Europe or Asia), a regional eSIM is most convenient. For global travelers, a global eSIM provides coverage in many countries with one plan.',
  },
  {
    id: 3,
    question: 'Can you install eSIM before Travelling?',
    answer: 'Yes, you can install your eSIM before you travel. In fact, it is highly recommended. You can set it up at home and activate your plan once you arrive at your destination, ensuring you have instant connectivity upon landing.',
  },
  {
    id: 4,
    question: 'What’s the difference between eSIM and physical SIM?',
    answer: 'A physical SIM is a removable plastic card that you insert into your phone. An eSIM (embedded SIM) is a digital SIM profile that is built directly into your device. You can switch between eSIM profiles without needing to physically swap a card.',
  },
  {
    id: 5,
    question: 'How do I know if my device supports eSIM?',
    answer: 'Most modern smartphones, tablets, and smartwatches from major manufacturers like Apple, Google, and Samsung support eSIM. You can check your device’s specifications or the manufacturer’s website to confirm.',
  },
  {
    id: 6,
    question: 'What countries don’t support eSIM?',
    answer: 'eSIM is widely supported, but some countries may have limited or no support from local carriers. You should always check the list of supported countries for your specific eSIM provider before purchasing a plan.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1); // Set initial open state to the first item

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white" style={{ background: '#F8F6F4' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-2xl shadow-sm border border-gray-200 p-6 transition-all duration-300 ${
                openId === faq.id ? 'bg-[#FCF5EF]' : 'bg-white'
              }`}
            >
              <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <button
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openId === faq.id ? 'bg-[#FC6A2B] text-white' : 'bg-gray-200 text-[#FC6A2B] hover:bg-gray-300'
                  }`}
                  aria-label={openId === faq.id ? 'Close' : 'Open'}
                >
                  {openId === faq.id ? <FaTimes className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                </button>
              </div>
              {openId === faq.id && (
                <p className="mt-4 text-sm text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
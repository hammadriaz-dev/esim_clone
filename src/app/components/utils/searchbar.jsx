// components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center space-x-2 w-full max-w-lg mx-auto mt-8 pb-20">
      <div className="relative flex-grow flex items-center rounded-full bg-white px-6 py-4 shadow-xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Find data plans in 200+ countries" 
          className="ml-4 w-full text-gray-700 placeholder-gray-400 focus:outline-none"
        />
      </div>
      <button className="bg-white rounded-full p-4 shadow-xl hover:bg-gray-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
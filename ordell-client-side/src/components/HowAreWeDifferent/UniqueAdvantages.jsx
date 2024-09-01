// src/components/UniqueAdvantages/UniqueAdvantages.jsx
import React from 'react';

const UniqueAdvantages = () => {
  return (
    <div className="bg-white py-8 px-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-rose-600">Why Choose Us?</h2>
      <div className="flex justify-around items-center space-x-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">Customization</h3>
          <p className="text-gray-600 mt-2">Tailor your design to fit your unique vision.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">All Unique</h3>
          <p className="text-gray-600 mt-2">Each design is one-of-a-kind and crafted with care.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">Personalized Support</h3>
          <p className="text-gray-600 mt-2">Get dedicated support to make your dream design come true.</p>
        </div>
      </div>
    </div>
  );
};

export default UniqueAdvantages;

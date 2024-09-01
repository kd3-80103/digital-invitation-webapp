import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-white py-8 px-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center text-black mb-6">How It Works</h2>
      <div className="flex justify-around items-start space-x-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl font-bold text-black">1</span>
          </div>
          <p className="text-black">Choose Your Design</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl font-bold text-black">2</span>
          </div>
          <p className="text-black">Order & Fill Form</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl font-bold text-black">3</span>
          </div>
          <p className="text-black">Designer Contacts You</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl font-bold text-black">4</span>
          </div>
          <p className="text-black">Select Final Design</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

// src/components/Shared/SidebarToggle.jsx
import React from 'react';

const SidebarToggle = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-rose-500">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  );
};

export default SidebarToggle;

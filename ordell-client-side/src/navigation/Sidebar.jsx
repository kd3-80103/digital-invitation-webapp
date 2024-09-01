// src/components/Shared/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} w-64`}
      style={{ zIndex: 1000 }} // Ensure it overlays other elements
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <span className="text-2xl">&times;</span>
        </button>
      </div>
      <ul className="p-4 space-y-2">
        <li>
          <Link to="/signin" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Link 1</Link>
        </li>
        <li>
          <Link to="/signin" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Link 2</Link>
        </li>
        <li>
          <Link to="/signin" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Link 3</Link>
        </li>
        <li>
          <Link to="/signin" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Link 4</Link>
        </li>
        <li>
          <Link to="/signin" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Link 5</Link>
        </li>
        <li>
          <Link to="/signin" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Link 6</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

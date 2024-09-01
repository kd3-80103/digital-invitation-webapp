// src/components/Shared/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import SidebarToggle from './SidebarToggle';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <div className="relative bg-white shadow-md p-4 flex items-center justify-between">
      <div className={`flex items-center transition-transform duration-300 ${isSidebarOpen ? 'transform translate-x-64' : ''}`}>
        <SidebarToggle onClick={toggleSidebar} />
        {/* Logo */}
        <Link to="/" className="flex items-center ml-2">
          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">O</span>
          </div>
          <span className="text-xl font-bold text-rose-500 ml-2">ORDELL</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/about" className="text-rose-500 hover:underline">About Us</Link>
        <button onClick={toggleSearch} className="text-rose-500">Search</button>
        {searchOpen && (
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="absolute top-0 right-0 border rounded p-2 bg-white shadow-lg"
            />
          </div>
        )}
        <Link to="/signin" className="text-rose-500 hover:underline">Favorite</Link>
        <Link to="/signin" className="text-rose-500 hover:underline">Cart</Link>
        <Link to="/signin" className="text-rose-500 hover:underline">Profile</Link>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Navbar;

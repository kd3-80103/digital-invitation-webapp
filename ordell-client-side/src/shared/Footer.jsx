// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-gray-800 py-6">
      <hr className="border-t border-gray-300 mb-6" /> {/* Horizontal line */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Ordell</h4>
            <p className="text-sm">Creating unique wedding designs since 2024.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/about" className="text-sm hover:text-rose-400">About Us</Link>
            <Link to="/contact" className="text-sm hover:text-rose-400">Contact</Link>
            <Link to="/privacy" className="text-sm hover:text-rose-400">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          &copy; 2024 Ordell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

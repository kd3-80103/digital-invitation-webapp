import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialMediaLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/yourpage',
    icon: <FaFacebook size={24} className="text-blue-600" />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourprofile',
    icon: <FaTwitter size={24} className="text-blue-400" />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yourprofile',
    icon: <FaInstagram size={24} className="text-pink-500" />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yourprofile',
    icon: <FaLinkedin size={24} className="text-blue-700" />
  },
  // Add more social media links as needed
];

const ContactInfo = () => {
  return (
    <div className="container mx-auto my-4 p-4 bg-slate-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Follow Us</h2>
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="flex w-full max-w-4xl justify-between">
          {/* Social Media Links */}
          <div className="flex flex-col items-center space-y-4 w-1/2">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full max-w-xs p-4 bg-white border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-200 text-lg text-left"
              >
                <span className="mr-4">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          {/* Logo */}
          <div className="flex flex-col items-center justify-center w-1/2">
          <Link to="/">
            <div className="w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">O</span>
            </div>
            <span className="text-2xl font-bold text-rose-500 mt-4">ORDELL</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

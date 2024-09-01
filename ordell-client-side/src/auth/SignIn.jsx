import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Sign In Form */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <div className="w-full max-w-md p-8 space-y-4 rounded shadow-md bg-white">
          <h2 className="text-2xl font-bold text-center text-black">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border-b border-gray-300 outline-none text-black focus:border-rose-300" 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 border-b border-gray-300 outline-none text-black focus:border-rose-300" 
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-rose-300 rounded hover:bg-rose-500">
              Sign In
            </button>
          </form>
          <div className="text-center">
            <Link to="/signup" className="text-rose-300 hover:underline">Don't have an account? Sign Up</Link>
          </div>
          <div className="text-center">
            <Link to="/" className="text-black underline">Skip</Link>
          </div>
        </div>
      </div>

      {/* Right Side: Logo and Description */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8 bg-white">
        <div className="mb-4">
          {/* Temporary Logo */}
          <div className="flex items-center justify-center w-32 h-32 bg-rose-300 rounded-full">
            <span className="text-3xl font-bold text-white">ORDELL</span>
          </div>
        </div>
        <div className="text-lg text-center text-gray-600">
          {/* Description */}
          <p>"Create and share beautiful digital wedding invitations effortlessly with ORDELL."</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

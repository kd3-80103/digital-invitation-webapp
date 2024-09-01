import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ isAuthenticated, user }) => {
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Looks like you're not signed in</h1>
        <Link to="/signin" className="text-rose-500 hover:underline">Sign In</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="text-gray-700">Name: {user.name}</p>
      <p className="text-gray-700">Email: {user.email}</p>
      {/* Add more user info as needed */}
    </div>
  );
};

export default Profile;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import HomePage from './home/HomePage';
import AdminDashboard from './dashboard/AdminDashboard';
import CustomerDashboard from './dashboard/CustomerDashboard';
import Profile from './profile/Profile';
import AboutUs from './about/AboutUs';
import ContactInfo from './components/ContactInformation/ContactInfo';

function App() {
  const isAuthenticated = false;  // Placeholder for actual authentication state
  const userRole = 'customer';    // Placeholder for user role

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactInfo />} />

        {isAuthenticated ? (
          <>
            {userRole === 'admin' && (
              <Route path="/dashboard" element={<AdminDashboard />} />
            )}
            {userRole === 'customer' && (
              <Route path="/dashboard" element={<CustomerDashboard />} />
            )}
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signin" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;

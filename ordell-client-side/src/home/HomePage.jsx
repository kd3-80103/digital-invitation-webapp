import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import WeddingImage from '../assets/images/MainPhoto.png'; // Example image path
import HowItWorks from '../components/HowItWorks/HowItWorks';
import CategoryList from '../category/CategoryList';
import UniqueAdvantages from '../components/HowAreWeDifferent/UniqueAdvantages';
import Footer from '../shared/Footer';


const HomePage = () => {
  // const isAuthenticated = false;

  // const handleRedirect = (event, path) => {
  //   if (!isAuthenticated) {
  //     event.preventDefault();
  //     window.location.href = '/signin';
  //   } else {
  //     window.location.href = path;
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4 mt-4">
        <h1 className="text-3xl font-bold mb-4 text-black">Welcome to Ordell,</h1>
        
        {/* Responsive Image */}
        <div className="relative w-full h-[70vh] mb-4 bg-white rounded-md shadow-md overflow-hidden">
          <img 
            src={WeddingImage} 
            alt="Wedding" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* How It Works */}
        <div className="mb-8">
          <HowItWorks />
        </div>

        {/* Unique Advantages */}
        <div className="mb-8"> {/* Add spacing if needed */}
          <UniqueAdvantages />
        </div>

        {/* Category List */}
        <div className="mb-8">
          <CategoryList />
        </div>

        {/* Product Listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* <div className="p-4 border rounded bg-white rounded-md shadow-md">
            <h2 className="text-xl text-black">Product 1</h2>
            <Link to="/product/1" onClick={handleRedirect} className="text-rose-500 hover:underline">
              View Details
            </Link>
          </div>
          <div className="p-4 border rounded bg-white rounded-md shadow-md">
            <h2 className="text-xl text-black">Product 2</h2>
            <Link to="/product/2" onClick={handleRedirect} className="text-rose-500 hover:underline">
              View Details
            </Link>
          </div>
          <div className="p-4 border rounded bg-white rounded-md shadow-md">
            <h2 className="text-xl text-black">Product 3</h2>
            <Link to="/product/3" onClick={handleRedirect} className="text-rose-500 hover:underline">
              View Details
            </Link>
          </div> */}
          {/* Add more products as needed */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
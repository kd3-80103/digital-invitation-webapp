// src/components/CategoryList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../assets/images/Category.png'; // Example image path

const categories = [
  { id: 'classic', name: 'Classic', image: Category },
  { id: 'floral-botanical', name: 'Floral & Botanical', image: Category },
  { id: 'modern', name: 'Modern', image: Category },
  // Add more categories if needed
];

const CategoryList = () => {
  return (
    <div className="bg-white py-8 px-4 rounded-md shadow-md"> {/* White background with padding, rounded corners, and shadow */}
      <h2 className="text-2xl font-bold text-center text-black mb-6">Categories</h2>
      <div className="flex justify-around items-center">
        {categories.map((category) => (
          <div key={category.id} className="text-center">
            <Link to={`/category/${category.id}`}>
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover mb-2"
              />
              <span className="text-lg text-black">{category.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

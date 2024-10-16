import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPost = ({ title, excerpt, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <Link to="/blog" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Lire plus</Link>
    </div>
  </div>
);

export default FeaturedPost;
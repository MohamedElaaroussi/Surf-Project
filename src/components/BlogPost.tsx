import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, date, excerpt, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <Link to="#" className="text-blue-500 hover:underline">Lire l'article complet</Link>
    </div>
  </div>
);

export default BlogPost;
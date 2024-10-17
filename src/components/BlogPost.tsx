import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  </div>
);

export default BlogPost;
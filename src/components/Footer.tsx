import React from "react";

import {
  Waves,
  Home,
  Book,
  User,
  Map,
  Award,
  Plane,
  Users,
  Instagram,
  Facebook,
  Send,
  Menu,
  X,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-blue-500 text-white text-center p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 SurfBlog. Tous droits réservés.</p>
    </div>
    {/* Social Media Links */}
    <div className="flex space-x-2 mt-4 lg:mt-0 ">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-200 transition duration-300"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-200 transition duration-300"
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-200 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-200 transition duration-300"
      >
        <Send size={20} />
      </a>
    </div>
  </footer>
);

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Waves className="mr-2" /> SurfBlog
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation for larger screens */}
        <nav
          className={`lg:flex lg:items-center ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 mr-4 space-y-2 lg:space-y-0">
            <li>
              <Link
                to="/"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <Home className="mr-1" /> Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <Book className="mr-1" /> Blog
              </Link>
            </li>
            <li>
              <Link
                to="/spots"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <Map className="mr-1" /> Spots
              </Link>
            </li>
            <li>
              <Link
                to="/challenges"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <Award className="mr-1" /> Défis
              </Link>
            </li>
            <li>
              <Link
                to="/voyages"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <Plane className="mr-1" /> Voyages
              </Link>
            </li>
            <li>
              <Link
                to="/equipe"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <Users className="mr-1" /> Équipe
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <User className="mr-1" /> À propos
              </Link>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;

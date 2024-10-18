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

// Définition des interfaces pour les props
interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200 px-4"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">SurfBlog</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-white hover:text-gray-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-8">
            <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Accueil" />
            <NavLink to="/blog" icon={<Book className="h-5 w-5" />} text="Blog" />
            <NavLink to="/spots" icon={<Map className="h-5 w-5" />} text="Spots" />
            <NavLink to="/defis" icon={<Award className="h-5 w-5" />} text="Défis" />
            <NavLink to="/voyages" icon={<Plane className="h-5 w-5" />} text="Voyages" />
            <NavLink to="/equipe" icon={<Users className="h-5 w-5" />} text="Équipe" />
            <NavLink to="/about" icon={<User className="h-5 w-5" />} text="À propos" />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" icon={<Home className="h-5 w-5" />} text="Accueil" />
              <MobileNavLink to="/blog" icon={<Book className="h-5 w-5" />} text="Blog" />
              <MobileNavLink to="/spots" icon={<Map className="h-5 w-5" />} text="Spots" />
              <MobileNavLink to="/defis" icon={<Award className="h-5 w-5" />} text="Défis" />
              <MobileNavLink to="/voyages" icon={<Plane className="h-5 w-5" />} text="Voyages" />
              <MobileNavLink to="/equipe" icon={<Users className="h-5 w-5" />} text="Équipe" />
              <MobileNavLink to="/about" icon={<User className="h-5 w-5" />} text="À propos" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
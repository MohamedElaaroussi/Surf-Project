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
  Menu,
  X,
  ChevronDown,
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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const otherComponents = [
    { name: "Météo", path: "/meteo" },
    { name: "Matériel", path: "/materiel" },
    { name: "Événements", path: "/evenements" },
    { name: "Galerie", path: "/galerie" },
  ];

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

            {/* Select Option for Other Components */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <span>Autres</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {otherComponents.map((component) => (
                    <Link
                      key={component.path}
                      to={component.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {component.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
              
              {/* Mobile Select Option for Other Components */}
              <div className="px-4">
                <select
                  onChange={(e) => {
                    window.location.href = e.target.value;
                    setIsMenuOpen(false);
                  }}
                  className="w-full p-2 text-gray-700 bg-white rounded-md"
                >
                  <option value="">Autres composants</option>
                  {otherComponents.map((component) => (
                    <option key={component.path} value={component.path}>
                      {component.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
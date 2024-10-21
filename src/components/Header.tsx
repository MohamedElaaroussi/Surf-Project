import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Waves,
  Home,
  Camera,
  MapPin,
  Package,
  HelpCircle,
  Mail,
  ChevronDown,
  Menu,
  X,
  Plane,
  Award,
  Calendar,
  Book,
  Clock,
  Car,
  Shirt,
  Video,
  LucideIcon
} from "lucide-react";

interface NavOption {
  name: string;
  path: string;
  icon: React.ReactElement<LucideIcon>;
}

interface NavLinkProps {
  to: string;
  icon: React.ReactElement<LucideIcon>;
  text: string;
  options?: NavOption[];
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(true);
    }, 200);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={to}
        className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors duration-200"
      >
        {icon}
        <span>{text}</span>
        {options && <ChevronDown className="h-4 w-4 ml-1" />}
      </Link>
      {options && isOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          {options.map((option) => (
            <Link
              key={option.path}
              to={option.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              <span className="flex items-center">
                {option.icon}
                <span className="ml-2">{option.name}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const navItems: NavLinkProps[] = [
    { to: "/", icon: <Home className="h-5 w-5" />, text: "Accueil" },
    {
      to: "/activites",
      icon: <Plane className="h-5 w-5" />,
      text: "Activités",
      options: [
        { name: "Voyages", path: "/voyages", icon: <Plane className="h-4 w-4" /> },
        { name: "Défis", path: "/defis", icon: <Award className="h-4 w-4" /> },
        { name: "Événements", path: "/evenements", icon: <Calendar className="h-4 w-4" /> },
      ],
    },
    {
      to: "/galerie",
      icon: <Camera className="h-5 w-5" />,
      text: "Galerie",
      options: [
        { name: "Blog", path: "/blog", icon: <Book className="h-4 w-4" /> },
        { name: "Derniers articles", path: "/articles", icon: <Clock className="h-4 w-4" /> },
      ],
    },
    {
      to: "/localisation",
      icon: <MapPin className="h-5 w-5" />,
      text: "Localisation",
      options: [
        { name: "Spots", path: "/spots", icon: <MapPin className="h-4 w-4" /> },
      ],
    },
    {
      to: "/packs",
      icon: <Package className="h-5 w-5" />,
      text: "Les packs",
      options: [
        { name: "Cours de surf", path: "/cours", icon: <Shirt className="h-4 w-4" /> },
        { name: "Location", path: "/location", icon: <Car className="h-4 w-4" /> },
        { name: "Surf analyses vidéo", path: "/analyses", icon: <Video className="h-4 w-4" /> },
      ],
    },
    { to: "/pourquoi-nous", icon: <HelpCircle className="h-5 w-5" />, text: "Pourquoi nous ?" },
    { to: "/contact", icon: <Mail className="h-5 w-5" />, text: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-500 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-white animate-bounce" />
            <span className="text-xl font-bold text-white">SurfBlog</span>
          </Link>

          <button onClick={toggleMenu} className="sm:hidden text-white hover:text-blue-200">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden sm:flex space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink key={item.to} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
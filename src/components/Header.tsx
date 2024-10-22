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
  isMobile?: boolean;
  delay?: number;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text, options, isMobile, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(!isMobile);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isMobile, delay]);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(true);
    }, 200);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, [isMobile]);

  const handleClick = () => {
    if (isMobile && options) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const linkClasses = isMobile
    ? `flex items-center justify-between w-full p-2 text-white hover:bg-blue-700 transition-all duration-300 
       ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`
    : "flex items-center space-x-1 text-white hover:text-blue-200 transition-colors duration-200";

  const iconWrapper = isMobile ? (
    <div className="transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
      {icon}
    </div>
  ) : (
    icon
  );

  return (
    <div
      className={`relative ${isMobile ? "w-full" : "group"}`}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      style={{
        transition: 'all 0.3s ease',
        transitionDelay: `${delay}ms`
      }}
    >
      <Link
        to={!options ? to : "#"}
        className={linkClasses}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-2">
          {iconWrapper}
          <span className={`${isMobile ? 'transform transition-all duration-300 group-hover:translate-x-1' : ''}`}>
            {text}
          </span>
        </div>
        {options && (
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} 
            ${isMobile ? 'transform hover:scale-110' : ''}`}
          />
        )}
      </Link>
      {options && isOpen && (
        <div
          ref={menuRef}
          className={`
            ${isMobile 
              ? "w-full bg-blue-600 pl-4 transform transition-all duration-300" 
              : "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"}
          `}
          onMouseEnter={() => {
            if (!isMobile && timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        >
          {options.map((option, index) => (
            <Link
              key={option.path}
              to={option.path}
              className={
                isMobile
                  ? `block px-4 py-2 text-sm text-white hover:bg-blue-700 transform transition-all duration-300
                     hover:translate-x-2 opacity-0 animate-fadeSlideIn`
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
              }
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <span className="flex items-center">
                <span className={`transform transition-all duration-300 ${isMobile ? 'hover:scale-110 hover:rotate-12' : ''}`}>
                  {option.icon}
                </span>
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
      // options: [
      //   { name: "Voyages", path: "/activites/voyages", icon: <Plane className="h-4 w-4" /> },
      //   { name: "Défis", path: "/#defis-evenements", icon: <Award className="h-4 w-4" /> },
      //   { name: "Événements", path: "/#defis-evenements", icon: <Calendar className="h-4 w-4" /> },
      // ],
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
        { name: "Cours de surf", path: "materielle/cours", icon: <Shirt className="h-4 w-4" /> },
        { name: "Location", path: "materielle/location", icon: <Car className="h-4 w-4" /> },
        { name: "Surf analyses vidéo", path: "materielle/analyses", icon: <Video className="h-4 w-4" /> },
        { name: "Planches", path: "materielle/planches", icon: <Package className="h-4 w-4" /> },
        { name: "Combinaisons", path: "materielle/combinaisons", icon: <Shirt className="h-4 w-4" /> },
      ],
    },
    { to: "/pourquoi-nous", icon: <HelpCircle className="h-5 w-5" />, text: "Pourquoi nous ?" },
    { to: "/about", icon: <Mail className="h-5 w-5" />, text: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-500 fixed w-full top-0 z-50">
      <style>
        {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .animate-fadeSlideIn {
            animation: fadeSlideIn 0.5s ease-out;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-white animate-bounce" />
            <span className="text-xl font-bold text-white">SurfBlog</span>
          </Link>

          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-white hover:text-blue-200 transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 transform transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transform transition-transform duration-300 hover:rotate-180" />
            )}
          </button>

          <nav className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-blue-600 absolute top-16 left-0 w-full shadow-lg">
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <NavLink 
                  key={item.to} 
                  {...item} 
                  isMobile={true} 
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
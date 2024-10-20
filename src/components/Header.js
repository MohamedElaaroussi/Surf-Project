import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Waves, Home, Book, User, Map, Award, Plane, Users, Menu, X, ChevronDown, } from "lucide-react";
const NavLink = ({ to, icon, text }) => (_jsxs(Link, { to: to, className: "flex items-center space-x-1 text-white hover:text-gray-200 transition-colors duration-200", children: [icon, _jsx("span", { children: text })] }));
const MobileNavLink = ({ to, icon, text }) => (_jsxs(Link, { to: to, className: "flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200 px-4", children: [icon, _jsx("span", { children: text })] }));
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const otherComponents = [
        { name: "Météo", path: "/meteo" },
        { name: "Matériel", path: "/materiel" },
        { name: "Événements", path: "/evenements" },
        { name: "Galerie", path: "/galerie" },
    ];
    return (_jsx("header", { className: "bg-gradient-to-r from-blue-500 to-teal-400 fixed w-full top-0 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [_jsx(Waves, { className: "h-8 w-8 text-white" }), _jsx("span", { className: "text-xl font-bold text-white", children: "SurfBlog" })] }), _jsx("button", { onClick: toggleMenu, className: "sm:hidden text-white hover:text-gray-200", children: isMenuOpen ? (_jsx(X, { className: "h-6 w-6" })) : (_jsx(Menu, { className: "h-6 w-6" })) }), _jsxs("nav", { className: "hidden sm:flex space-x-8", children: [_jsx(NavLink, { to: "/", icon: _jsx(Home, { className: "h-5 w-5" }), text: "Accueil" }), _jsx(NavLink, { to: "/blog", icon: _jsx(Book, { className: "h-5 w-5" }), text: "Blog" }), _jsx(NavLink, { to: "/spots", icon: _jsx(Map, { className: "h-5 w-5" }), text: "Spots" }), _jsx(NavLink, { to: "/defis", icon: _jsx(Award, { className: "h-5 w-5" }), text: "D\u00E9fis" }), _jsx(NavLink, { to: "/voyages", icon: _jsx(Plane, { className: "h-5 w-5" }), text: "Voyages" }), _jsx(NavLink, { to: "/equipe", icon: _jsx(Users, { className: "h-5 w-5" }), text: "\u00C9quipe" }), _jsx(NavLink, { to: "/about", icon: _jsx(User, { className: "h-5 w-5" }), text: "\u00C0 propos" }), _jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: toggleDropdown, className: "flex items-center space-x-1 text-white hover:text-gray-200 transition-colors duration-200", children: [_jsx("span", { children: "Autres" }), _jsx(ChevronDown, { className: "h-4 w-4" })] }), isDropdownOpen && (_jsx("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1", children: otherComponents.map((component) => (_jsx(Link, { to: component.path, className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", onClick: () => setIsDropdownOpen(false), children: component.name }, component.path))) }))] })] })] }), isMenuOpen && (_jsx("div", { className: "sm:hidden py-4", children: _jsxs("div", { className: "flex flex-col space-y-4", children: [_jsx(MobileNavLink, { to: "/", icon: _jsx(Home, { className: "h-5 w-5" }), text: "Accueil" }), _jsx(MobileNavLink, { to: "/blog", icon: _jsx(Book, { className: "h-5 w-5" }), text: "Blog" }), _jsx(MobileNavLink, { to: "/spots", icon: _jsx(Map, { className: "h-5 w-5" }), text: "Spots" }), _jsx(MobileNavLink, { to: "/defis", icon: _jsx(Award, { className: "h-5 w-5" }), text: "D\u00E9fis" }), _jsx(MobileNavLink, { to: "/voyages", icon: _jsx(Plane, { className: "h-5 w-5" }), text: "Voyages" }), _jsx(MobileNavLink, { to: "/equipe", icon: _jsx(Users, { className: "h-5 w-5" }), text: "\u00C9quipe" }), _jsx(MobileNavLink, { to: "/about", icon: _jsx(User, { className: "h-5 w-5" }), text: "\u00C0 propos" }), _jsx("div", { className: "px-4", children: _jsxs("select", { onChange: (e) => {
                                        window.location.href = e.target.value;
                                        setIsMenuOpen(false);
                                    }, className: "w-full p-2 text-gray-700 bg-white rounded-md", children: [_jsx("option", { value: "", children: "Autres composants" }), otherComponents.map((component) => (_jsx("option", { value: component.path, children: component.name }, component.path)))] }) })] }) }))] }) }));
};
export default Header;

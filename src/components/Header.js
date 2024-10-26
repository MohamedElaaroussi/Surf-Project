var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Waves, Home, Camera, MapPin, Package, HelpCircle, Mail, ChevronDown, Menu, X, Plane, Book, Clock, Car, Shirt, Video } from "lucide-react";
var NavLink = function (_a) {
    var to = _a.to, icon = _a.icon, text = _a.text, options = _a.options, isMobile = _a.isMobile, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(!isMobile), isVisible = _d[0], setIsVisible = _d[1];
    var menuRef = useRef(null);
    var timeoutRef = useRef(null);
    useEffect(function () {
        if (isMobile) {
            var timer_1 = setTimeout(function () {
                setIsVisible(true);
            }, delay);
            return function () { return clearTimeout(timer_1); };
        }
    }, [isMobile, delay]);
    var handleMouseEnter = useCallback(function () {
        if (!isMobile && timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(function () {
            setIsOpen(true);
        }, 200);
    }, [isMobile]);
    var handleMouseLeave = useCallback(function () {
        if (!isMobile && timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(function () {
            setIsOpen(false);
        }, 200);
    }, [isMobile]);
    var handleClick = function () {
        if (isMobile && options) {
            setIsOpen(!isOpen);
        }
    };
    useEffect(function () {
        return function () {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    var linkClasses = isMobile
        ? "flex items-center justify-between w-full p-2 text-white hover:bg-blue-700 transition-all duration-300 \n       ".concat(isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0')
        : "flex items-center space-x-1 text-white hover:text-blue-200 transition-colors duration-200";
    var iconWrapper = isMobile ? (_jsx("div", { className: "transform transition-transform duration-300 hover:scale-110 hover:rotate-12", children: icon })) : (icon);
    return (_jsxs("div", { className: "relative ".concat(isMobile ? "w-full" : "group"), onMouseEnter: !isMobile ? handleMouseEnter : undefined, onMouseLeave: !isMobile ? handleMouseLeave : undefined, style: {
            transition: 'all 0.3s ease',
            transitionDelay: "".concat(delay, "ms")
        }, children: [_jsxs(Link, { to: !options ? to : "#", className: linkClasses, onClick: handleClick, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [iconWrapper, _jsx("span", { className: "".concat(isMobile ? 'transform transition-all duration-300 group-hover:translate-x-1' : ''), children: text })] }), options && (_jsx(ChevronDown, { className: "h-4 w-4 transition-transform duration-300 ".concat(isOpen ? 'rotate-180' : '', " \n            ").concat(isMobile ? 'transform hover:scale-110' : '') }))] }), options && isOpen && (_jsx("div", { ref: menuRef, className: "\n            ".concat(isMobile
                    ? "w-full bg-blue-600 pl-4 transform transition-all duration-300"
                    : "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10", "\n          "), onMouseEnter: function () {
                    if (!isMobile && timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }, onMouseLeave: !isMobile ? handleMouseLeave : undefined, children: options.map(function (option, index) { return (_jsx(Link, { to: option.path, className: isMobile
                        ? "block px-4 py-2 text-sm text-white hover:bg-blue-700 transform transition-all duration-300\n                     hover:translate-x-2 opacity-0 animate-fadeSlideIn"
                        : "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100", style: {
                        animationDelay: "".concat(index * 100, "ms"),
                        animationFillMode: 'forwards'
                    }, children: _jsxs("span", { className: "flex items-center", children: [_jsx("span", { className: "transform transition-all duration-300 ".concat(isMobile ? 'hover:scale-110 hover:rotate-12' : ''), children: option.icon }), _jsx("span", { className: "ml-2", children: option.name })] }) }, option.path)); }) }))] }));
};
var Header = function () {
    var _a = useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var toggleMenu = function () { return setIsMenuOpen(!isMenuOpen); };
    var navItems = [
        { to: "/", icon: _jsx(Home, { className: "h-5 w-5" }), text: "Accueil" },
        {
            to: "/activites",
            icon: _jsx(Plane, { className: "h-5 w-5" }),
            text: "Activités",
            // options: [
            //   { name: "Voyages", path: "/activites/voyages", icon: <Plane className="h-4 w-4" /> },
            //   { name: "Défis", path: "/#defis-evenements", icon: <Award className="h-4 w-4" /> },
            //   { name: "Événements", path: "/#defis-evenements", icon: <Calendar className="h-4 w-4" /> },
            // ],
        },
        {
            to: "/galerie",
            icon: _jsx(Camera, { className: "h-5 w-5" }),
            text: "Galerie",
            options: [
                { name: "Blog", path: "/blog", icon: _jsx(Book, { className: "h-4 w-4" }) },
                { name: "Derniers articles", path: "/articles", icon: _jsx(Clock, { className: "h-4 w-4" }) },
            ],
        },
        {
            to: "/localisation",
            icon: _jsx(MapPin, { className: "h-5 w-5" }),
            text: "Localisation",
            options: [
                { name: "Spots", path: "/spots", icon: _jsx(MapPin, { className: "h-4 w-4" }) },
            ],
        },
        {
            to: "/packs",
            icon: _jsx(Package, { className: "h-5 w-5" }),
            text: "Les packs",
            options: [
                { name: "Cours de surf", path: "materielle/cours", icon: _jsx(Shirt, { className: "h-4 w-4" }) },
                { name: "Location", path: "materielle/location", icon: _jsx(Car, { className: "h-4 w-4" }) },
                { name: "Surf analyses vidéo", path: "materielle/analyses", icon: _jsx(Video, { className: "h-4 w-4" }) },
                { name: "Planches", path: "materielle/planches", icon: _jsx(Package, { className: "h-4 w-4" }) },
                { name: "Combinaisons", path: "materielle/combinaisons", icon: _jsx(Shirt, { className: "h-4 w-4" }) },
            ],
        },
        { to: "/pourquoi-nous", icon: _jsx(HelpCircle, { className: "h-5 w-5" }), text: "Pourquoi nous ?" },
        { to: "/about", icon: _jsx(Mail, { className: "h-5 w-5" }), text: "Contact" },
    ];
    return (_jsxs("header", { className: "bg-gradient-to-r from-blue-600 to-teal-500 fixed w-full top-0 z-50", children: [_jsx("style", { children: "\n          @keyframes fadeSlideIn {\n            from {\n              opacity: 0;\n              transform: translateX(-20px);\n            }\n            to {\n              opacity: 1;\n              transform: translateX(0);\n            }\n          }\n          \n          .animate-fadeSlideIn {\n            animation: fadeSlideIn 0.5s ease-out;\n          }\n        " }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [_jsx(Waves, { className: "h-8 w-8 text-white animate-bounce" }), _jsx("span", { className: "text-xl font-bold text-white", children: "SurfBlog" })] }), _jsx("button", { onClick: toggleMenu, className: "lg:hidden text-white hover:text-blue-200 transition-transform duration-300 hover:scale-110", "aria-label": "Toggle menu", children: isMenuOpen ? (_jsx(X, { className: "h-6 w-6 transform transition-transform duration-300 rotate-90" })) : (_jsx(Menu, { className: "h-6 w-6 transform transition-transform duration-300 hover:rotate-180" })) }), _jsx("nav", { className: "hidden lg:flex space-x-4", children: navItems.map(function (item) { return (_jsx(NavLink, __assign({}, item), item.to)); }) })] }), isMenuOpen && (_jsx("div", { className: "lg:hidden py-4 bg-blue-600 absolute top-16 left-0 w-full shadow-lg", children: _jsx("div", { className: "flex flex-col", children: navItems.map(function (item, index) { return (_jsx(NavLink, __assign({}, item, { isMobile: true, delay: index * 100 }), item.to)); }) }) }))] })] }));
};
export default Header;

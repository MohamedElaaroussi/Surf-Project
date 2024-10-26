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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardTitle } from '../components/ui/card';
import { MapPin, Waves, ChevronRight } from 'lucide-react';
import { BsFillStarFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
var StarRating = function (_a) {
    var stars = _a.stars;
    return (_jsx("div", { className: "flex space-x-1", children: __spreadArray([], Array(stars), true).map(function (_, index) { return (_jsx(motion.div, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.2, delay: index * 0.1 }, children: _jsx(BsFillStarFill, { className: "text-yellow-400 w-4 h-4", id: "star-".concat(index + 1) }) }, index)); }) }));
};
var SpotCard = function (_a) {
    var name = _a.name, location = _a.location, difficulty = _a.difficulty, image = _a.image, description = _a.description, stars = _a.stars;
    var _b = useState(false), isHovered = _b[0], setIsHovered = _b[1];
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "relative group", onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, children: _jsxs(Card, { className: "overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl", children: [_jsxs("div", { className: "relative h-64 overflow-hidden", children: [_jsx("img", { src: image, alt: name, className: "w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsxs("div", { className: "absolute bottom-0 p-4 text-white", children: [_jsx(CardTitle, { className: "text-2xl font-bold mb-2", children: name }), _jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [_jsx(MapPin, { size: 16 }), _jsx("span", { children: location })] })] })] }), _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Waves, { className: "text-blue-500", size: 20 }), _jsx("span", { className: "text-sm text-gray-600", children: "Difficult\u00E9:" }), _jsx("span", { className: "text-sm font-medium", children: difficulty })] }), _jsx(StarRating, { stars: stars })] }), _jsx("p", { className: "text-gray-600 text-sm line-clamp-2", children: description }), _jsxs("button", { className: "mt-4 flex items-center text-blue-500 hover:text-blue-700 transition-colors", children: ["En savoir plus", _jsx(ChevronRight, { size: 16, className: "ml-1 transform transition-transform group-hover:translate-x-1" })] })] })] }) }));
};
var getDifficultyStars = function (difficulty) {
    switch (difficulty.toLowerCase()) {
        case 'expert':
            return 5;
        case 'intermédiaire':
            return 3;
        case 'tous niveaux':
            return 2;
        default:
            return 1;
    }
};
var SpotsPage = function () {
    var spots = [
        {
            name: "Merleft",
            location: "Maroc",
            difficulty: "Intermédiaire",
            image: "/images/merleft.jpg",
            description: "Spot légendaire du Maroc, connu pour ses vagues puissantes et ses couchers de soleil magnifiques.",
            stars: 3
        },
        {
            name: "Pipeline",
            location: "Hawaii",
            difficulty: "Expert",
            image: "/images/pipeline.jpg",
            description: "L'une des vagues les plus célèbres au monde, Pipeline est le terrain de jeu des meilleurs surfeurs.",
            stars: 5
        },
        {
            name: "Biarritz",
            location: "France",
            difficulty: "Tous niveaux",
            image: "/images/biarritz.jpg",
            description: "Spot idéal pour l'apprentissage et le perfectionnement, avec des vagues adaptées à tous les niveaux.",
            stars: 2
        }
    ];
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "D\u00E9couvrez les Meilleurs Spots de Surf" }), _jsx("p", { className: "text-xl text-gray-600", children: "Explorez des destinations de surf exceptionnelles \u00E0 travers le monde" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: spots.map(function (spot, index) { return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(SpotCard, __assign({}, spot)) }, index)); }) })] }) }));
};
export default SpotsPage;

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
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
// Composant pour afficher les étoiles en fonction du rating
var StarRating = function (_a) {
    var rating = _a.rating;
    var fullStars = Math.floor(rating);
    var hasHalfStar = rating % 1 !== 0;
    return (_jsxs("div", { className: "flex items-center", children: [__spreadArray([], Array(fullStars), true).map(function (_, i) { return (_jsx(Star, { className: "text-yellow-400 fill-current", size: 16 }, i)); }), hasHalfStar && _jsx(StarHalf, { className: "text-yellow-400 fill-current", size: 16 }), _jsx("span", { className: "ml-1 text-sm text-gray-600", children: rating.toFixed(1) })] }));
};
// Définition des variantes pour l'animation de la carte
var cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
// Composant Card pour afficher les cartes avec les informations du matériel
var Card = function (_a) {
    var image = _a.image, title = _a.title, description = _a.description, rating = _a.rating;
    var _b = useState(false), isHovered = _b[0], setIsHovered = _b[1];
    return (_jsxs(motion.div, { variants: cardVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "bg-white rounded-lg shadow-lg overflow-hidden relative", onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, children: [_jsx("img", { src: image, alt: title, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "font-bold text-xl mb-2", children: title }), _jsx(StarRating, { rating: rating }), _jsx("p", { className: "text-gray-600 mt-2", children: description })] }), isHovered && (_jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: _jsx("button", { className: "bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300", children: "Reserve Now" }) }))] }));
};
// Composant principal de la page de matériel
var MaterialPage = function () {
    var location = useLocation();
    var coursRef = useRef(null);
    var locationRef = useRef(null);
    var analysesRef = useRef(null);
    var planchesRef = useRef(null);
    var combinaisonsRef = useRef(null);
    useEffect(function () {
        var _a, _b;
        var sectionId = location.pathname.split("/")[2];
        var refMap = {
            cours: coursRef,
            location: locationRef,
            analyses: analysesRef,
            planches: planchesRef,
            combinaisons: combinaisonsRef,
        };
        if (sectionId && ((_a = refMap[sectionId]) === null || _a === void 0 ? void 0 : _a.current)) {
            (_b = refMap[sectionId].current) === null || _b === void 0 ? void 0 : _b.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (_jsxs("div", { className: "min-h-screen pt-16", children: [_jsxs("div", { className: "relative h-96 bg-gray-900", children: [_jsx("img", { src: "images/Materielle_Pictures2.jpeg", alt: "Mat\u00E9riel de surf", className: "w-full h-full object-cover opacity-70" }), _jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, className: "absolute inset-0 flex items-center justify-center", children: _jsx("h1", { className: "text-4xl font-bold text-white", children: "Notre Mat\u00E9riel" }) })] }), _jsx("nav", { className: "bg-white shadow-lg sticky top-16 z-40", children: _jsx("div", { className: "max-w-7xl mx-auto px-4", children: _jsxs("ul", { className: "flex space-x-8 overflow-x-auto py-4", children: [_jsx("li", { children: _jsx("a", { href: "#cours", className: "text-blue-600 hover:text-blue-800", children: "Cours de surf" }) }), _jsx("li", { children: _jsx("a", { href: "#location", className: "text-blue-600 hover:text-blue-800", children: "Location" }) }), _jsx("li", { children: _jsx("a", { href: "#analyses", className: "text-blue-600 hover:text-blue-800", children: "Analyses vid\u00E9o" }) }), _jsx("li", { children: _jsx("a", { href: "#planches", className: "text-blue-600 hover:text-blue-800", children: "Planches" }) }), _jsx("li", { children: _jsx("a", { href: "#combinaisons", className: "text-blue-600 hover:text-blue-800", children: "Combinaisons" }) })] }) }) }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 py-12 space-y-24", children: [_jsxs("section", { ref: coursRef, id: "cours", className: "scroll-mt-32", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: "Cours de Surf" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [_jsx(Card, { image: "/api/placeholder/400/300", title: "Cours D\u00E9butant", description: "D\u00E9couvrez les bases du surf avec nos instructeurs qualifi\u00E9s.", rating: 4.5 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Cours Interm\u00E9diaire", description: "Perfectionnez vos techniques et progressez rapidement.", rating: 4.7 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Cours Avanc\u00E9", description: "Ma\u00EEtrisez les man\u0153uvres avanc\u00E9es et surfez comme un pro.", rating: 4.9 })] })] }), _jsxs("section", { ref: locationRef, id: "location", className: "scroll-mt-32", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: "Location de Mat\u00E9riel" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [_jsx(Card, { image: "/api/placeholder/400/300", title: "Location Journ\u00E9e", description: "Louez votre mat\u00E9riel pour une journ\u00E9e de surf.", rating: 4.6 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Location Semaine", description: "Profitez d'un tarif avantageux pour une semaine de location.", rating: 4.8 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Pack Complet", description: "Louez tout le n\u00E9cessaire : planche, combinaison et accessoires.", rating: 4.7 })] })] }), _jsxs("section", { ref: analysesRef, id: "analyses", className: "scroll-mt-32", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: "Analyses Vid\u00E9o" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [_jsx(Card, { image: "/api/placeholder/400/300", title: "Analyse Personnelle", description: "Obtenez une analyse d\u00E9taill\u00E9e de votre technique de surf.", rating: 4.8 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Analyse de Groupe", description: "Participez \u00E0 des sessions d'analyse vid\u00E9o en groupe pour progresser ensemble.", rating: 4.6 })] })] }), _jsxs("section", { ref: planchesRef, id: "planches", className: "scroll-mt-32", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: "Planches de Surf" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [_jsx(Card, { image: "/api/placeholder/400/300", title: "Planches pour D\u00E9butants", description: "Des planches stables et faciles \u00E0 manier pour d\u00E9butants.", rating: 4.5 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Planches pour Interm\u00E9diaires", description: "Des planches pour les surfeurs qui veulent progresser.", rating: 4.7 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Planches Avanc\u00E9es", description: "Des planches pour les surfeurs exp\u00E9riment\u00E9s cherchant des performances maximales.", rating: 4.9 })] })] }), _jsxs("section", { ref: combinaisonsRef, id: "combinaisons", className: "scroll-mt-32", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: "Combinaisons de Surf" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [_jsx(Card, { image: "/api/placeholder/400/300", title: "Combinaisons D\u00E9butant", description: "Des combinaisons confortables et abordables pour les d\u00E9butants.", rating: 4.4 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Combinaisons Interm\u00E9diaire", description: "Des combinaisons avec une meilleure isolation thermique.", rating: 4.6 }), _jsx(Card, { image: "/api/placeholder/400/300", title: "Combinaisons Avanc\u00E9es", description: "Des combinaisons haut de gamme pour une performance maximale.", rating: 4.9 })] })] })] })] }));
};
export default MaterialPage;

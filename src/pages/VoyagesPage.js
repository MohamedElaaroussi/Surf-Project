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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Trophy, Users, Timer } from 'lucide-react';
var VoyageCard = function (_a) {
    var destination = _a.destination, description = _a.description, duration = _a.duration, price = _a.price, media = _a.media;
    var _b = useState(false), isHovered = _b[0], setIsHovered = _b[1];
    var _c = useState(false), isVideoLoaded = _c[0], setIsVideoLoaded = _c[1];
    var isVideo = function (url) {
        return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
    };
    return (_jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 flex-shrink-0 w-80 mr-6", onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, children: [_jsxs("div", { className: "relative overflow-hidden h-48", children: [isVideo(media) ? (_jsxs(_Fragment, { children: [_jsx("video", { className: "w-full h-full object-cover transition-all duration-300 ease-in-out ".concat(isHovered ? 'scale-110' : 'scale-100', " ").concat(isVideoLoaded ? 'opacity-100' : 'opacity-0'), src: media, autoPlay: true, loop: true, muted: true, playsInline: true, onLoadedData: function () { return setIsVideoLoaded(true); } }), !isVideoLoaded && (_jsx("div", { className: "absolute inset-0 bg-gray-200 animate-pulse" }))] })) : (_jsx("img", { src: media, alt: destination, className: "w-full h-full object-cover transition-all duration-300 ease-in-out ".concat(isHovered ? 'scale-110' : 'scale-100') })), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center transition-opacity duration-300 ".concat(isHovered ? 'opacity-100' : 'opacity-0'), children: _jsx("p", { className: "text-white text-center px-4 font-light", children: description }) })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-bold text-xl mb-2 text-gray-800", children: destination }), _jsxs("p", { className: "text-sm text-gray-600 mb-2", children: ["Dur\u00E9e: ", duration] }), _jsxs("p", { className: "text-sm font-semibold text-blue-600", children: ["Prix: ", price] })] })] }));
};
var EventCard = function (_a) {
    var title = _a.title, date = _a.date, participants = _a.participants, duration = _a.duration, level = _a.level, description = _a.description;
    return (_jsxs(Card, { className: "w-full md:w-[350px] group hover:shadow-xl transition-all duration-300", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx(Badge, { variant: "secondary", className: "bg-blue-100 text-blue-700", children: level }), _jsx(motion.div, { whileHover: { rotate: 10 }, className: "text-yellow-500", children: _jsx(Trophy, { size: 24 }) })] }), _jsx(CardTitle, { className: "text-xl group-hover:text-blue-600 transition-colors", children: title }), _jsxs(CardDescription, { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), " ", date] })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [_jsx(Users, { className: "w-4 h-4" }), _jsxs("span", { children: [participants, " participants max"] })] }), _jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [_jsx(Timer, { className: "w-4 h-4" }), _jsx("span", { children: duration })] }), _jsx("p", { className: "mt-4 text-gray-700", children: description })] }) })] }));
};
var VoyagesPage = function () {
    var location = useLocation();
    var challengesSectionRef = useRef(null);
    var navigate = useNavigate();
    var _a = useState(false), showMore = _a[0], setShowMore = _a[1];
    var scrollRef = useRef(null);
    var _b = useState(false), isDragging = _b[0], setIsDragging = _b[1];
    var _c = useState(0), startX = _c[0], setStartX = _c[1];
    var _d = useState(0), scrollLeft = _d[0], setScrollLeft = _d[1];
    var allChallenges = [
        {
            title: "Défi des 30 Jours",
            date: "1er Juillet 2024",
            participants: 20,
            duration: "30 jours",
            level: "Tous niveaux",
            description: "Surfez pendant 30 jours consécutifs et améliorez votre technique avec nos coachs professionnels."
        },
        {
            title: "Compétition Sunset",
            date: "15 Août 2024",
            participants: 50,
            duration: "2 jours",
            level: "Intermédiaire",
            description: "Compétition de surf au coucher du soleil avec prix et barbecue sur la plage."
        },
        {
            title: "Stage Intensif Pro",
            date: "5 Septembre 2024",
            participants: 12,
            duration: "5 jours",
            level: "Avancé",
            description: "Formation intensive avec des surfeurs professionnels et analyse vidéo personnalisée."
        },
        {
            title: "Week-end Découverte",
            date: "20 Septembre 2024",
            participants: 30,
            duration: "2 jours",
            level: "Débutant",
            description: "Week-end d'initiation au surf avec cours théoriques et pratiques pour débutants."
        },
        {
            title: "Challenge Big Wave",
            date: "1er Octobre 2024",
            participants: 15,
            duration: "3 jours",
            level: "Expert",
            description: "Défiez les grandes vagues avec des experts. Formation sécurité et techniques avancées incluses."
        },
        {
            title: "Éco-Surf Camp",
            date: "15 Octobre 2024",
            participants: 25,
            duration: "4 jours",
            level: "Tous niveaux",
            description: "Combinez surf et écologie : nettoyage des plages, ateliers environnementaux et sessions de surf."
        }
    ];
    var voyages = [
        { destination: "Marrakech", description: "Découvrez le surf à proximité de la ville ocre", duration: "5 jours", price: "800€", media: "/vidéo/marakech.mp4" },
        { destination: "Essaouira", description: "Vagues constantes et ambiance décontractée", duration: "7 jours", price: "900€", media: "/images/Essaouira.jpg" },
        { destination: "Sidi Ifni", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Sidi Ifni.jpg" },
        { destination: "Mirleft", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Merleft_beach.jpg" },
        { destination: "Taghazout", description: "Le paradis des surfeurs au Maroc", duration: "10 jours", price: "1200€", media: "/images/taghazout.jpg" },
        { destination: "Plage km 25", description: "Spot secret près d'Agadir", duration: "4 jours", price: "700€", media: "/images/Plage km 25.jpg" },
    ];
    var displayedChallenges = showMore ? allChallenges : allChallenges.slice(0, 3);
    React.useEffect(function () {
        if (location.hash === '#defis-evenements' && challengesSectionRef.current) {
            challengesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);
    var handleMouseDown = function (e) {
        setIsDragging(true);
        if (scrollRef.current) {
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };
    var handleMouseLeave = function () {
        setIsDragging(false);
    };
    var handleMouseUp = function () {
        setIsDragging(false);
    };
    var handleMouseMove = function (e) {
        if (!isDragging || !scrollRef.current)
            return;
        e.preventDefault();
        var x = e.pageX - scrollRef.current.offsetLeft;
        var walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 pt-16", children: [_jsxs("div", { className: "relative h-[60vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] mb-4", children: [_jsx("img", { src: "/images/30-day-challenge.jpg", alt: "Surf Adventure", className: "w-full h-full object-cover" }), _jsxs("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex flex-col justify-center items-center text-white", children: [_jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center", 
    children: "Aventures de Surf" }), _jsx("p", { className: "text-lg md:text-xl lg:text-2xl font-light max-w-2xl text-center px-4", children: "D\u00E9couvrez les meilleures destinations de surf \u00E0 travers le monde. Des vagues parfaites, des paysages \u00E0 couper le souffle et des exp\u00E9riences inoubliables." })] })] }), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center text-gray-800", children: "Nos Destinations" }), _jsx(motion.div, { ref: scrollRef, className: "flex overflow-x-scroll pb-10 hide-scrollbar", whileTap: { cursor: "grabbing" }, onMouseDown: handleMouseDown, onMouseLeave: handleMouseLeave, onMouseUp: handleMouseUp, onMouseMove: handleMouseMove, children: voyages.map(function (voyage, index) { return (_jsx(VoyageCard, __assign({}, voyage), index)); }) })] }), _jsx("section", { ref: challengesSectionRef, id: "defis-evenements", className: "py-16 bg-gradient-to-b from-gray-50 to-blue-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4 text-gray-800", children: "D\u00E9fis et \u00C9v\u00E9nements" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Participez \u00E0 nos d\u00E9fis et \u00E9v\u00E9nements exclusifs pour progresser et rencontrer d'autres passionn\u00E9s de surf." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: displayedChallenges.map(function (challenge, index) { return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.2 }, children: _jsx(EventCard, __assign({}, challenge)) }, index)); }) }), _jsx(motion.div, { className: "text-center mt-12", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx("button", { onClick: function () { return setShowMore(!showMore); }, className: "bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300", children: showMore ? "Voir moins d'événements" : "Voir plus d'événements" }) })] }) })] }));
};
export default VoyagesPage;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
var images = [
    "/images/surfboard-maintenance.jpg",
    "/images/tube-riding.jpg",
    "/images/Merleft_beach.jpg",
    "/images/surf4.jpg",
];
var HeroSection = function () {
    var _a = useState(0), currentImage = _a[0], setCurrentImage = _a[1];
    useEffect(function () {
        var timer = setInterval(function () {
            setCurrentImage(function (prevImage) { return (prevImage + 1) % images.length; });
        }, 2000);
        return function () { return clearInterval(timer); };
    }, []);
    var nextImage = function () {
        setCurrentImage(function (prevImage) { return (prevImage + 1) % images.length; });
    };
    var prevImage = function () {
        setCurrentImage(function (prevImage) { return (prevImage - 1 + images.length) % images.length; });
    };
    return (_jsxs("section", { className: "relative h-screen flex items-center justify-center overflow-hidden", children: [images.map(function (image, index) { return (_jsx(motion.div, { className: "absolute inset-0", initial: { opacity: 0 }, animate: { opacity: index === currentImage ? 1 : 0 }, transition: { duration: 0.5 }, children: _jsx("img", { src: image, alt: "Surf ".concat(index + 1), className: "object-cover w-full h-full" }) }, image)); }), _jsx("div", { className: "absolute inset-0 bg-black opacity-50" }), _jsxs("div", { className: "relative z-10 text-center px-4 sm:px-6 lg:px-8", children: [_jsx(motion.h1, { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.2, duration: 0.8 }, className: "text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4", children: "Bienvenue sur SurfWave" }), _jsx(motion.p, { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.4, duration: 0.8 }, className: "text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto", children: "D\u00E9couvrez la passion du surf avec nous et plongez dans l'aventure des vagues" }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6, duration: 0.8 }, children: _jsxs(Button, { variant: "secondary", size: "lg", className: "bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300", children: ["Commencer l'aventure", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) })] }), _jsx("button", { onClick: prevImage, className: "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full", children: _jsx(ChevronLeft, { className: "h-6 w-6 text-black" }) }), _jsx("button", { onClick: nextImage, className: "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full", children: _jsx(ChevronRight, { className: "h-6 w-6 text-black" }) }), _jsx("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2", children: images.map(function (_, index) { return (_jsx("button", { onClick: function () { return setCurrentImage(index); }, className: "w-3 h-3 rounded-full ".concat(index === currentImage ? "bg-white" : "bg-white bg-opacity-50") }, index)); }) })] }));
};
export default HeroSection;

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const VoyageCard = ({ destination, description, duration, price, media }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const isVideo = (url) => {
        return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
    };
    return (_jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsxs("div", { className: "relative overflow-hidden h-48", children: [isVideo(media) ? (_jsxs(_Fragment, { children: [_jsx("video", { className: `w-full h-full object-cover transition-all duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'} ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`, src: media, autoPlay: true, loop: true, muted: true, playsInline: true, onLoadedData: () => setIsVideoLoaded(true) }), !isVideoLoaded && (_jsx("div", { className: "absolute inset-0 bg-gray-200 animate-pulse" }))] })) : (_jsx("img", { src: media, alt: destination, className: `w-full h-full object-cover transition-all duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}` })), _jsx("div", { className: `absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`, children: _jsx("p", { className: "text-white text-center px-4", children: description }) })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-bold text-xl mb-2", children: destination }), _jsxs("p", { className: "text-sm text-gray-600 mb-2", children: ["Dur\u00E9e: ", duration] }), _jsxs("p", { className: "text-sm font-semibold text-blue-600", children: ["Prix: ", price] })] })] }));
};
const VoyagesPage = () => {
    const voyages = [
        { destination: "Marrakech", description: "Découvrez le surf à proximité de la ville ocre", duration: "5 jours", price: "800€", media: "/vidéo/marakech.mp4" },
        { destination: "Essaouira", description: "Vagues constantes et ambiance décontractée", duration: "7 jours", price: "900€", media: "/images/Essaouira.jpg" },
        { destination: "Sidi Ifni", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Sidi Ifni.jpg" },
        { destination: "Mirleft", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Merleft_beach.jpg" },
        { destination: "Taghazout", description: "Le paradis des surfeurs au Maroc", duration: "10 jours", price: "1200€", media: "/images/taghazout.jpg" },
        { destination: "Plage km 25", description: "Spot secret près d'Agadir", duration: "4 jours", price: "700€", media: "/images/Plage km 25.jpg" },
        { destination: "Bali", description: "Paradis du surf en Indonésie", duration: "10 jours", price: "1500€", media: "/images/bali-surf.jpg" },
        { destination: "Costa Rica", description: "Vagues parfaites et nature luxuriante", duration: "14 jours", price: "2000€", media: "/images/costa-rica-surf.jpg" },
        { destination: "Portugal", description: "Spots de classe mondiale en Europe", duration: "7 jours", price: "1200€", media: "/images/portugal-surf.jpg" },
    ];
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8 text-center", children: "Voyages de Surf" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: voyages.map((voyage, index) => (_jsx(VoyageCard, { ...voyage }, index))) })] }));
};
export default VoyagesPage;

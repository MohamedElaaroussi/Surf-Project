import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Home, Car, Waves, Wind, Compass, Plane, BookOpen } from 'lucide-react';
const AccommodationServicesSection = () => {
    const [selectedDuration, setSelectedDuration] = useState('daily');
    const activities = [
        {
            title: "Cours de Surf",
            pricing: { daily: 30, weekly: 350, monthly: 1200 },
            description: "Apprenez à surfer avec nos instructeurs certifiés",
            icon: _jsx(Waves, { className: "w-8 h-8" })
        },
        {
            title: "Cours de BodyBoard",
            pricing: { daily: 30, weekly: 230, monthly: 800 },
            description: "Découvrez les sensations du body board",
            icon: _jsx(Wind, { className: "w-8 h-8" })
        },
        {
            title: "Voyage Surf",
            pricing: { daily: 100, weekly: 600, monthly: 2000 },
            description: "Explorez les meilleurs spots de surf",
            icon: _jsx(Plane, { className: "w-8 h-8" })
        },
        {
            title: "Location Matériel",
            pricing: { daily: 30, weekly: 175, monthly: 600 },
            description: "Louez tout le matériel nécessaire pour votre session",
            icon: _jsx(Waves, { className: "w-8 h-8" })
        },
        {
            title: "Location Maison",
            pricing: { daily: 80, weekly: 470, monthly: 1600 },
            description: "Séjournez dans nos maisons de surf confortables",
            icon: _jsx(Home, { className: "w-8 h-8" })
        },
        {
            title: "Surf Analyses vidéo",
            pricing: { daily: 40, weekly: 230, monthly: 800 },
            description: "Approfondissez vos connaissances sur le surf",
            icon: _jsx(BookOpen, { className: "w-8 h-8" })
        }
    ];
    const accommodations = [
        {
            title: "Villa Vue Mer",
            pricing: { daily: 60, weekly: 350, monthly: 1200 },
            image: "/images/house_mer.jpg",
            description: "Villa luxueuse avec vue panoramique sur l'océan, 3 chambres",
            features: ["Wifi", "Piscine", "Terrasse", "Parking"]
        },
        {
            title: "Surf House",
            pricing: { daily: 65, weekly: 380, monthly: 1300 },
            image: "/video/video_house.mp4",
            description: "Maison de surfeur authentique à 2min de la plage, 2 chambres",
            features: ["Rack à planches", "Douche extérieure", "BBQ", "Jardin"]
        },
        {
            title: "Beach Bungalow",
            pricing: { daily: 80, weekly: 470, monthly: 1600 },
            image: "/images/house1.jpg",
            description: "Bungalow cozy en front de mer, idéal pour couple",
            features: ["Vue mer", "Cuisine équipée", "Terrasse privée"]
        }
    ];
    const services = {
        transport: [
            {
                title: "Navette Aéroport",
                pricing: { daily: 50, weekly: 280, monthly: 900 },
                description: "Service de navette privée depuis l'aéroport"
            },
            {
                title: "Location de voiture",
                pricing: { daily: 45, weekly: 250, monthly: 800 },
                description: "Véhicules adaptés pour le transport de planches"
            }
        ],
        surfing: [
            {
                title: "Pack Débutant",
                pricing: { daily: 30, weekly: 175, monthly: 600 },
                items: ["Planche mousse", "Combinaison", "Leash"],
                image: "images/Pack_Débutant.jpg"
            },
            {
                title: "Pack Confirmé",
                pricing: { daily: 45, weekly: 260, monthly: 900 },
                items: ["Shortboard/Longboard", "Combinaison", "Leash", "Wax"],
                image: "/images/advanced-surf2.jpg"
            }
        ],
        activities: activities
    };
    const formatPrice = (pricing) => {
        const prices = {
            daily: `${pricing.daily}€/jour`,
            weekly: `${pricing.weekly}€/semaine (-${Math.round((1 - pricing.weekly / (pricing.daily * 7)) * 100)}%)`,
            monthly: `${pricing.monthly}€/mois (-${Math.round((1 - pricing.monthly / (pricing.daily * 30)) * 100)}%)`
        };
        return prices[selectedDuration];
    };
    const renderMedia = (media) => {
        const isVideo = media.endsWith('.mp4');
        if (isVideo) {
            return (_jsxs("video", { className: "w-full h-48 object-cover", controls: true, children: [_jsx("source", { src: media, type: "video/mp4" }), "Votre navigateur ne supporte pas la vid\u00E9o."] }));
        }
        return (_jsx("img", { src: media, alt: "Accommodation", className: "w-full h-48 object-cover" }));
    };
    return (_jsx("div", { className: "bg-white py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Choisissez votre dur\u00E9e de s\u00E9jour" }), _jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "inline-flex rounded-lg shadow-sm", children: [_jsx("button", { onClick: () => setSelectedDuration('daily'), className: `px-4 py-2 text-sm font-medium rounded-l-lg transition-colors ${selectedDuration === 'daily' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`, children: "Journalier" }), _jsx("button", { onClick: () => setSelectedDuration('weekly'), className: `px-4 py-2 text-sm font-medium border-x transition-colors ${selectedDuration === 'weekly' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`, children: "Hebdomadaire" }), _jsx("button", { onClick: () => setSelectedDuration('monthly'), className: `px-4 py-2 text-sm font-medium rounded-r-lg transition-colors ${selectedDuration === 'monthly' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`, children: "Mensuel" })] }) })] }), _jsxs("div", { className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-8", children: [_jsx(Home, { className: "w-8 h-8 text-blue-500" }), _jsx("h2", { className: "text-4xl font-bold text-center", children: "H\u00E9bergements" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: accommodations.map((accommodation, index) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow", children: [renderMedia(accommodation.image), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx("h3", { className: "text-xl font-bold", children: accommodation.title }), _jsx("span", { className: "text-blue-500 font-bold", children: formatPrice(accommodation.pricing) })] }), _jsx("p", { className: "text-gray-600 mb-4", children: accommodation.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: accommodation.features.map((feature, idx) => (_jsx("span", { className: "bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full", children: feature }, idx))) })] })] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-8", children: [_jsx(Car, { className: "w-8 h-8 text-blue-500" }), _jsx("h2", { className: "text-4xl font-bold text-center", children: "Transport" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: services.transport.map((item, index) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [_jsx("h3", { className: "text-xl font-bold mb-2", children: item.title }), _jsx("p", { className: "text-blue-500 font-bold mb-2", children: formatPrice(item.pricing) }), _jsx("p", { className: "text-gray-600", children: item.description })] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-8", children: [_jsx(Waves, { className: "w-8 h-8 text-blue-500" }), _jsx("h2", { className: "text-4xl font-bold text-center", children: "Mat\u00E9riel de Surfaa " })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: services.surfing.map((pack, index) => (_jsxs("div", { className: "group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1", children: [_jsxs("div", { className: "p-6 relative z-10", children: [_jsx("h3", { className: "text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600", children: pack.title }), _jsx("p", { className: "text-blue-500 font-bold mb-4", children: formatPrice(pack.pricing) }), _jsx("ul", { className: "list-disc list-inside text-gray-600", children: pack.items.map((item, idx) => (_jsx("li", { className: "transition-colors duration-300 group-hover:text-gray-800", children: item }, idx))) })] }), _jsx("div", { className: "absolute inset-0 opacity-7 group-hover:opacity-20 transition-opacity duration-300", children: _jsx("img", { src: pack.image, alt: pack.title, className: "w-full h-full object-cover" }) }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white via-white to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" })] }, index))) })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-8", children: [_jsx(Compass, { className: "w-8 h-8 text-blue-500" }), _jsx("h2", { className: "text-4xl font-bold text-center", children: "Activit\u00E9s" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.activities.map((activity, index) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "bg-blue-100 p-3 rounded-full mr-4", children: activity.icon }), _jsx("h3", { className: "text-xl font-bold", children: activity.title })] }), _jsx("p", { className: "text-blue-500 font-bold mb-2", children: formatPrice(activity.pricing) }), _jsx("p", { className: "text-gray-600", children: activity.description })] }, index))) })] })] }) }));
};
export default AccommodationServicesSection;

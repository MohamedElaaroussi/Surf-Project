import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ChallengeCard = ({ title, description, duration, image }) => (_jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden", children: [_jsx("img", { src: image, alt: title, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-bold text-xl mb-2", children: title }), _jsx("p", { className: "text-gray-600 mb-2", children: description }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Dur\u00E9e: ", duration] })] })] }));
const ChallengesPage = () => {
    const challenges = [
        { title: "30 jours de surf", description: "Surfez chaque jour pendant un mois", duration: "30 jours", image: "/images/30-day-challenge.jpg" },
        { title: "Maîtrisez le tube", description: "Apprenez à surfer dans le tube", duration: "Variable", image: "/images/tube-riding.jpg" },
        { title: "Éco-surfeur", description: "Nettoyez une plage après chaque session", duration: "Permanent", image: "/images/eco-surfer.jpg" },
        // Ajoutez d'autres défis ici
    ];
    return (_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "D\u00E9fis de Surf" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: challenges.map((challenge, index) => (_jsx(ChallengeCard, { ...challenge }, index))) })] }));
};
export default ChallengesPage;

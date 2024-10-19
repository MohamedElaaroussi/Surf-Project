import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const BlogSection = () => {
    const mainArticles = [
        {
            title: "10 Conseils pour Débuter le Surf",
            image: "vidéo/learn_surf.mp4",
            isVideo: true,
            slug: "10-conseils-pour-debuter-le-surf",
            subArticles: [
                "Choisir la bonne planche",
                "Comprendre les vagues",
                "Échauffements essentiels",
                "Techniques de rame",
                "Se lever sur la planche",
                "Règles de sécurité",
                "Lire l'océan",
                "Entretien du matériel",
                "Condition physique",
                "Mentalité du surfeur"
            ]
        },
        {
            title: "Les Meilleures Planches de 2024",
            image: "images/beginner-tips.jpg",
            isVideo: false,
            slug: "les-meilleures-planches-de-2024",
            subArticles: [
                "Planches pour débutants",
                "Planches de performance",
                "Longboards",
                "Shortboards",
                "Fish boards"
            ]
        },
        {
            title: "Préparer son Trip de Surf",
            image: "images/préparation_surfing.jpg",
            isVideo: false,
            slug: "preparer-son-trip-de-surf",
            subArticles: [
                "Choisir sa destination",
                "Préparer son équipement",
                "Réserver son hébergement",
                "Assurances et santé",
                "Budget et finances"
            ]
        }
    ];
    return (_jsxs("section", { className: "bg-white p-8", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center text-gray-800", children: "Derniers Articles" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: mainArticles.map((article, index) => (_jsxs(motion.div, { className: "bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300", whileHover: { scale: 1.05 }, children: [article.isVideo ? (_jsxs("video", { controls: true, className: "w-full h-64 object-cover rounded-t-lg", children: [_jsx("source", { src: article.image, type: "video/mp4" }), "Your browser does not support the video tag."] })) : (_jsx("img", { src: article.image, alt: article.title, className: "w-full h-64 object-cover rounded-t-lg" })), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-900", children: article.title }), _jsx(Link, { to: `/blog#${article.slug}`, className: "text-blue-500 hover:underline", children: "Voir tous les conseils" })] })] }, index))) })] }));
};
export default BlogSection;

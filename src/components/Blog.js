import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Assurez-vous que Tailwind est configuré
var blogPosts = {
    "10-conseils-pour-debuter-le-surf": {
        title: "10 Conseils pour Débuter le Surf",
        date: "15 Mai 2024",
        excerpt: "Découvrez les meilleurs conseils pour commencer le surf en toute sécurité.",
        content: "\n      <h2>1. Choisissez la bonne planche</h2>\n      <p>Pour les d\u00E9butants, une planche longue et large offre plus de stabilit\u00E9...</p>\n      \n      <h2>2. Apprenez les r\u00E8gles de s\u00E9curit\u00E9</h2>\n      <p>Familiarisez-vous avec les drapeaux de plage et les r\u00E8gles de priorit\u00E9 dans l'eau...</p>\n      \n      <h2>3. Commencez par des vagues douces</h2>\n      <p>Choisissez des spots connus pour leurs vagues adapt\u00E9es aux d\u00E9butants...</p>\n      \n      <!-- Add more content for the remaining 7 tips -->\n    ",
        image: "/images/surf-tips.jpg", // Ajout d'une image pour plus d'esthétisme
        isVideo: false // Utilisez l'image à la place
    },
    "les-meilleures-planches-de-2024": {
        title: "Les Meilleures Planches de 2024",
        date: "22 Juin 2024",
        excerpt: "Notre sélection des meilleures planches de surf pour cette année.",
        content: "\n      <h2>1. Planche polyvalente : Model X</h2>\n      <p>Parfaite pour tous les niveaux, cette planche offre un excellent \u00E9quilibre entre performance et stabilit\u00E9...</p>\n      \n      <h2>2. Planche de performance : Pro-Series Y</h2>\n      <p>Pour les surfeurs avanc\u00E9s cherchant \u00E0 repousser leurs limites...</p>\n      \n      <h2>3. Planche pour d\u00E9butants : EasyRide Z</h2>\n      <p>Large et stable, id\u00E9ale pour apprendre les bases du surf...</p>\n      \n      <!-- Add more content for other surfboards -->\n    ",
        image: "/images/beginner-surfboards.jpg",
        isVideo: false
    },
    "preparer-son-trip-de-surf": {
        title: "Préparer son Trip de Surf",
        date: "7 Juillet 2024",
        excerpt: "Tout ce que vous devez savoir pour préparer votre prochain voyage de surf.",
        content: "\n      <h2>1. Choisissez votre destination</h2>\n      <p>Recherchez des spots adapt\u00E9s \u00E0 votre niveau et \u00E0 la p\u00E9riode de votre voyage...</p>\n      \n      <h2>2. Pr\u00E9parez votre \u00E9quipement</h2>\n      <p>Assurez-vous d'avoir tout le mat\u00E9riel n\u00E9cessaire : planches, combinaisons, wax, etc...</p>\n      \n      <h2>3. R\u00E9servez votre h\u00E9bergement</h2>\n      <p>Optez pour un logement proche des spots de surf pour maximiser votre temps dans l'eau...</p>\n      \n      <!-- Add more content for trip preparation -->\n    ",
        image: "/images/surf-trip.jpg",
        isVideo: false
    }
};
var Blog = function () {
    var slug = useParams().slug; // Assurez-vous que slug peut être undefined
    var post = slug ? blogPosts[slug] : undefined; // Utilisez un opérateur conditionnel
    if (!post) {
        return _jsx("div", { className: "text-center py-10", children: "Article non trouv\u00E9" });
    }
    return (_jsxs("div", { className: "max-w-5xl mx-auto p-6", children: [_jsx(Link, { to: "/", className: "text-blue-500 hover:underline mb-6 block", children: "\u2190 Retour aux articles" }), _jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-full h-64 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-3xl font-bold mb-4", children: post.title }), _jsx("p", { className: "text-gray-600 mb-4", children: post.date }), _jsx("div", { className: "prose max-w-none mb-6", dangerouslySetInnerHTML: { __html: post.content } }), _jsx(Link, { to: "/", className: "text-blue-500 hover:underline block mt-4", children: "\u2190 Voir d'autres articles" })] })] })] }));
};
export default Blog;

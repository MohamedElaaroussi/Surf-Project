import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Assurez-vous que Tailwind est configuré
const blogPosts = {
    "10-conseils-pour-debuter-le-surf": {
        title: "10 Conseils pour Débuter le Surf",
        date: "15 Mai 2024",
        excerpt: "Découvrez les meilleurs conseils pour commencer le surf en toute sécurité.",
        content: `
      <h2>1. Choisissez la bonne planche</h2>
      <p>Pour les débutants, une planche longue et large offre plus de stabilité...</p>
      
      <h2>2. Apprenez les règles de sécurité</h2>
      <p>Familiarisez-vous avec les drapeaux de plage et les règles de priorité dans l'eau...</p>
      
      <h2>3. Commencez par des vagues douces</h2>
      <p>Choisissez des spots connus pour leurs vagues adaptées aux débutants...</p>
      
      <!-- Add more content for the remaining 7 tips -->
    `,
        image: "/images/surf-tips.jpg", // Ajout d'une image pour plus d'esthétisme
        isVideo: false // Utilisez l'image à la place
    },
    "les-meilleures-planches-de-2024": {
        title: "Les Meilleures Planches de 2024",
        date: "22 Juin 2024",
        excerpt: "Notre sélection des meilleures planches de surf pour cette année.",
        content: `
      <h2>1. Planche polyvalente : Model X</h2>
      <p>Parfaite pour tous les niveaux, cette planche offre un excellent équilibre entre performance et stabilité...</p>
      
      <h2>2. Planche de performance : Pro-Series Y</h2>
      <p>Pour les surfeurs avancés cherchant à repousser leurs limites...</p>
      
      <h2>3. Planche pour débutants : EasyRide Z</h2>
      <p>Large et stable, idéale pour apprendre les bases du surf...</p>
      
      <!-- Add more content for other surfboards -->
    `,
        image: "/images/beginner-surfboards.jpg",
        isVideo: false
    },
    "preparer-son-trip-de-surf": {
        title: "Préparer son Trip de Surf",
        date: "7 Juillet 2024",
        excerpt: "Tout ce que vous devez savoir pour préparer votre prochain voyage de surf.",
        content: `
      <h2>1. Choisissez votre destination</h2>
      <p>Recherchez des spots adaptés à votre niveau et à la période de votre voyage...</p>
      
      <h2>2. Préparez votre équipement</h2>
      <p>Assurez-vous d'avoir tout le matériel nécessaire : planches, combinaisons, wax, etc...</p>
      
      <h2>3. Réservez votre hébergement</h2>
      <p>Optez pour un logement proche des spots de surf pour maximiser votre temps dans l'eau...</p>
      
      <!-- Add more content for trip preparation -->
    `,
        image: "/images/surf-trip.jpg",
        isVideo: false
    }
};
const Blog = () => {
    const { slug } = useParams(); // Assurez-vous que slug peut être undefined
    const post = slug ? blogPosts[slug] : undefined; // Utilisez un opérateur conditionnel
    if (!post) {
        return _jsx("div", { className: "text-center py-10", children: "Article non trouv\u00E9" });
    }
    return (_jsxs("div", { className: "max-w-5xl mx-auto p-6", children: [_jsx(Link, { to: "/", className: "text-blue-500 hover:underline mb-6 block", children: "\u2190 Retour aux articles" }), _jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-full h-64 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-3xl font-bold mb-4", children: post.title }), _jsx("p", { className: "text-gray-600 mb-4", children: post.date }), _jsx("div", { className: "prose max-w-none mb-6", dangerouslySetInnerHTML: { __html: post.content } }), _jsx(Link, { to: "/", className: "text-blue-500 hover:underline block mt-4", children: "\u2190 Voir d'autres articles" })] })] })] }));
};
export default Blog;

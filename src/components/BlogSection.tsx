import React from "react";
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

  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Derniers Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainArticles.map((article, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {article.isVideo ? (
              <video
                controls
                className="w-full h-64 object-cover rounded-t-lg"
              >
                <source src={article.image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{article.title}</h3>
              <Link to={`/blog#${article.slug}`} className="text-blue-500 hover:underline">
                Voir tous les conseils
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const articles = [
    { title: "10 Conseils pour Débuter le Surf", image: "vidéo/learn_surf.mp4", isVideo: true },
    { title: "Les Meilleures Planches de 2024", image: "images/beginner-tips.jpg", isVideo: false },
    { title: "Préparer son Trip de Surf", image: "images/préparation_surfing.jpg", isVideo: false }
  ];

  return (
    <section className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-4">Derniers Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            {article.isVideo ? (
              <video
                controls
                autoPlay
                loop
                muted
                className="w-full h-48 object-cover"
              >
                <source src={article.image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{article.title}</h3>
              <Link to={`/blog/${article.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-blue-500 hover:underline">
                Lire la suite
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

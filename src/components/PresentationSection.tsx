import React from "react";
import { motion } from "framer-motion";

const PresentationSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Notre Passion, Votre Aventure</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          SurfWave est votre guide ultime dans l'univers du surf. Que vous soyez débutant ou expert, 
          nous vous offrons les meilleures ressources pour vivre pleinement votre passion.
        </p>
      </div>
    </motion.section>
  );
};

export default PresentationSection;
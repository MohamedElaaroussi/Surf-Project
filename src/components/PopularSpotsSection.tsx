import React from "react";
import { motion } from "framer-motion";

const PopularSpotsSection = () => {
  const spots = [
    { name: 'Aftas beach', image: 'images/aftass beach2.jpg' },
    { name: 'Lagzira beach', image: 'images/lagzira_beach2.jpg' },
    { name: 'imintarga beach', image: 'images/imintarga_beach2.jpg' }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Spots de Surf Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <motion.div 
              key={spot.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                <p>Découvrez les vagues légendaires de {spot.name}.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PopularSpotsSection;
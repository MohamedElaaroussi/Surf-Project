import React from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const galleryItems = [
    "images/item1.jpg",
    "images/item2.jpg",
    "images/item3.jpg",
    "images/item4.jpg",
    "images/item5.jpg",
    "images/item6.jpg",
    "images/item7.jpg",
    "images/item8.jpg"
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Galerie Photo/Vidéo</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-w-1 aspect-h-1"
            >
              <img 
                src={item}
                alt={`Galerie item ${index + 1}`} 
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Voir plus
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySection;
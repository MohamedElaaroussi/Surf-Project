import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="vidéo/5382539-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="z-10 text-center">
        <motion.h1 
        
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-6xl font-bold mb-4"
        >
          Bienvenue sur SurfWave
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          className="text-xl mb-8"
        >
          Découvrez la passion du surf avec
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Commencer l'aventur
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
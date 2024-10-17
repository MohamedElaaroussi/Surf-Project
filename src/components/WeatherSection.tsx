import React from "react";
import { motion } from "framer-motion";

const WeatherSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-blue-500 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Conditions Météo en Direct</h2>
        <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <p className="text-2xl font-bold">Sidi ifni, Merleft</p>
          <p className="text-5xl font-bold mt-4">22°C</p>
          <p className="text-xl mt-2">Vagues: 1.5m - 2m</p>
          <p className="text-xl">Vent: 15 km/h NO</p>
        </div>
      </div>
    </motion.section>
  );
};

export default WeatherSection;
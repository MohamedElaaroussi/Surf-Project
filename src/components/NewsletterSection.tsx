import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-blue-600 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Restez informé</h2>
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="flex-grow p-3 rounded-full text-black"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full"
            >
              S'abonner
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;
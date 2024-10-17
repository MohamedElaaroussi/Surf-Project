import React from "react";
import { motion } from "framer-motion";

const BookingSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Réservez votre session</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="images/reservation.jpg" 
              alt="Réservation" 
              className="w-full max-w-md h-[30rem] object-cover rounded-lg mx-auto" // Ajout de max-w-md pour la largeur
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nom complet" 
                className="w-full p-3 border rounded"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 border rounded"
              />
              <input 
                type="date" 
                className="w-full p-3 border rounded"
              />
              <textarea 
                placeholder="Description de votre demande" // Champ de description ajouté
                className="w-full p-3 border rounded"
                rows={3}
              />
              <select className="w-full p-3 border rounded">
                <option>Choisir un type de session</option>
                <option>Cours débutant</option>
                <option>Session intermédiaire</option>
                <option>Coaching avancé</option>
              </select>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded"
              >
                Réserver
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BookingSection;

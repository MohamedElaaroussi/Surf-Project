import React from "react";
import { motion } from "framer-motion";

const EventsSection = () => {
  const events = [
    { name: "Championnat de Surf de Biarritz", date: "15 Août 2024" },
    { name: "Festival des Vagues de Lacanau", date: "5-7 Septembre 2024" }
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
        <h2 className="text-4xl font-bold mb-8 text-center">Événements à Venir</h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div 
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-blue-500 font-bold">{event.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EventsSection;
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
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Événements à Venir</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="bg-gray-50 border-b border-gray-200 p-4">
                <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center text-blue-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="font-medium">{event.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EventsSection;
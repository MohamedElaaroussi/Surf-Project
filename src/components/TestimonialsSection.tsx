import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sophie", text: "SurfWave a changé ma vie! Grâce à leurs cours, j'ai pris confiance sur ma planche." },
    { name: "Thomas", text: "Les voyages organisés par SurfWave sont incroyables. J'ai découvert des spots de rêve!" }
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
        <h2 className="text-4xl font-bold mb-8 text-center">Témoignages de Surfeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4">"{testimonial.text}"</p>
              <p className="font-bold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
import React from "react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Partner 1", logo: "https://example.com/images/partner-1.png" },
    { name: "Partner 2", logo: "https://example.com/images/partner-2.png" },
    { name: "Partner 3", logo: "https://example.com/images/partner-3.png" },
    { name: "Partner 4", logo: "https://example.com/images/partner-4.png" },
    { name: "Partner 5", logo: "https://example.com/images/partner-5.png" },
    { name: "Partner 6", logo: "https://example.com/images/partner-6.png" },
    { name: "Partner 7", logo: "https://example.com/images/partner-7.png" },
    { name: "Partner 8", logo: "https://example.com/images/partner-8.png" },
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
        <h2 className="text-4xl font-bold mb-8 text-center">Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-center"
            >
              <motion.img 
                src={partner.logo}
                alt={`Partenaire ${partner.name}`}
                className="max-h-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PartnersSection;
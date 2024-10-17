import React from "react";
import { motion } from "framer-motion";

const SocialMediaSection = () => {
  const socialMedias = ['facebook', 'instagram', 'twitter', 'youtube'];
  const socialPosts = [
    "images/instagram.jpg",
    "https://example.com/images/social-2.jpg",
    "images/facebook.jpg",
    "https://example.com/images/social-4.jpg"
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
        <h2 className="text-4xl font-bold mb-8 text-center">Suivez-nous</h2>
        <div className="flex justify-center space-x-8 mb-8">
          {socialMedias.map((social) => (
            <motion.a
              key={social}
              href={`https://${social}.com`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-4xl text-gray-600 hover:text-blue-500"
            >
              <i className={`fab fa-${social}`}></i>
            </motion.a>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialPosts.map((post, index) => (
            <motion.img 
              key={index}
              src={post}
              alt={`Social media post ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialMediaSection;
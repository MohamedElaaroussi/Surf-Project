import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SocialMediaSection = () => {
  const socialMedias = [
    { name: 'facebook', icon: <FaFacebookF />, link: 'https://www.facebook.com/abdilah.farouki' },
    { name: 'instagram', icon: <FaInstagram />, link: 'https://instagram.com' },
    { name: 'twitter', icon: <FaTwitter />, link: 'https://twitter.com' },
    { name: 'youtube', icon: <FaYoutube />, link: 'https://youtube.com' },
    { name: 'whatsapp', icon: <FaWhatsapp />, link: 'https://api.whatsapp.com/send/?phone=653175243&text=Hello%2C+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0' } // Remplace 'yourNumber' par ton numéro WhatsApp
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
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-4xl text-gray-600 hover:text-blue-500"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialMediaSection;

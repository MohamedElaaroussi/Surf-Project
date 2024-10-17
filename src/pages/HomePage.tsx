import React from "react";
import HeroSection from "../components/HeroSection";
import PresentationSection from "../components/PresentationSection";
import PopularSpotsSection from "../components/PopularSpotsSection";
import WeatherSection from "../components/WeatherSection";
import TestimonialsSection from "../components/TestimonialsSection";
import EventsSection from "../components/EventsSection";
import BlogSection from "../components/BlogSection";
import GallerySection from "../components/GallerySection";
import NewsletterSection from "../components/NewsletterSection";
import BookingSection from "../components/BookingSection";
import SocialMediaSection from "../components/SocialMediaSection";
import PartnersSection from "../components/PartnersSection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <PresentationSection />
      <PopularSpotsSection />
      <WeatherSection />
      <TestimonialsSection />
      <EventsSection />
      <BlogSection />
      <GallerySection />
      <NewsletterSection />
      <BookingSection />
      <SocialMediaSection />
      <PartnersSection />
    </div>
  );
};

export default HomePage;




























// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="overflow-hidden">
//       {/* 1. Hero Section */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-screen flex items-center justify-center text-white"
//       >
//         <div className="absolute inset-0 z-0">
//           <video autoPlay loop muted className="object-cover w-full h-full">
//             <source src="/videos/surf-hero.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <div className="z-10 text-center">
//           <motion.h1 
//             initial={{ y: -50 }}
//             animate={{ y: 0 }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
//             className="text-6xl font-bold mb-4"
//           >
//             Bienvenue sur SurfWave
//           </motion.h1>
//           <motion.p 
//             initial={{ y: 50 }}
//             animate={{ y: 0 }}
//             transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
//             className="text-xl mb-8"
//           >
//             Découvrez la passion du surf avec nous
//           </motion.p>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
//           >
//             Commencer l'aventure
//           </motion.button>
//         </div>
//       </motion.section>

//       {/* 2. Présentation du site */}
//       <motion.section 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 bg-gray-100"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Notre Passion, Votre Aventure</h2>
//           <p className="text-xl text-center max-w-3xl mx-auto">
//             SurfWave est votre guide ultime dans l'univers du surf. Que vous soyez débutant ou expert, 
//             nous vous offrons les meilleures ressources pour vivre pleinement votre passion.
//           </p>
//         </div>
//       </motion.section>

//       {/* 3. Spots de Surf Populaires */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Spots de Surf Populaires</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {['Bali', 'Hawaii', 'Gold Coast'].map((spot, index) => (
//               <motion.div 
//                 key={spot}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden"
//               >
//                 <img src={`/images/${spot.toLowerCase()}.jpg`} alt={spot} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold mb-2">{spot}</h3>
//                   <p>Découvrez les vagues légendaires de {spot}.</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* 4. Conditions Météo en Direct */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 bg-blue-500 text-white"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Conditions Météo en Direct</h2>
//           {/* Intégrez ici un widget météo ou créez votre propre composant */}
//           <div className="bg-white text-black p-8 rounded-lg shadow-lg">
//             <p className="text-2xl font-bold">Biarritz, France</p>
//             <p className="text-5xl font-bold mt-4">22°C</p>
//             <p className="text-xl mt-2">Vagues: 1.5m - 2m</p>
//             <p className="text-xl">Vent: 15 km/h NO</p>
//           </div>
//         </div>
//       </motion.section>

//       {/* 5. Voyages et Excursions de Surf */}
//       {/* 6. Services de Leçons ou Cours de Surf */}
//       {/* Ces sections peuvent être ajoutées de manière similaire */}

//       {/* 7. Témoignages de Surfeurs */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 bg-gray-100"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Témoignages de Surfeurs</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               { name: "Sophie", text: "SurfWave a changé ma vie! Grâce à leurs cours, j'ai pris confiance sur ma planche." },
//               { name: "Thomas", text: "Les voyages organisés par SurfWave sont incroyables. J'ai découvert des spots de rêve!" }
//             ].map((testimonial, index) => (
//               <motion.div 
//                 key={testimonial.name}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-6 rounded-lg shadow-lg"
//               >
//                 <p className="text-lg mb-4">"{testimonial.text}"</p>
//                 <p className="font-bold">- {testimonial.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* 8. Événements et Compétitions à Venir */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Événements à Venir</h2>
//           <div className="space-y-4">
//             {[
//               { name: "Championnat de Surf de Biarritz", date: "15 Août 2024" },
//               { name: "Festival des Vagues de Lacanau", date: "5-7 Septembre 2024" }
//             ].map((event, index) => (
//               <motion.div 
//                 key={event.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
//               >
//                 <h3 className="text-xl font-semibold">{event.name}</h3>
//                 <p className="text-blue-500 font-bold">{event.date}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* 9. Derniers Articles du Blog */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 bg-gray-100"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Derniers Articles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: "10 Conseils pour Débuter le Surf", image: "beginner-tips.jpg" },
//               { title: "Les Meilleures Planches de 2024", image: "best-boards.jpg" },
//               { title: "Préparer son Trip de Surf", image: "surf-trip.jpg" }
//             ].map((article, index) => (
//               <motion.div 
//                 key={article.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden"
//               >
//                 <img src={`/images/${article.image}`} alt={article.title} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
//                   <Link to="/blog" className="text-blue-500 hover:underline">Lire la suite</Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* 11. Galerie Photo/Vidéo */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 bg-gray-100"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Galerie Photo/Vidéo</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//               <motion.div 
//                 key={item}
//                 whileHover={{ scale: 1.05 }}
//                 className="relative aspect-w-1 aspect-h-1"
//               >
//                 <img 
//                   src={`/images/gallery-${item}.jpg`} 
//                   alt={`Galerie item ${item}`} 
//                   className="object-cover w-full h-full rounded-lg"
//                 />
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
//             >
//               Voir plus
//             </motion.button>
//           </div>
//         </div>
//       </motion.section>

//       {/* 12. Newsletter / Inscription aux mises à jour */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 bg-blue-600 text-white"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Restez informé</h2>
//           <div className="max-w-2xl mx-auto">
//             <form className="flex flex-col md:flex-row gap-4">
//               <input 
//                 type="email" 
//                 placeholder="Votre adresse e-mail" 
//                 className="flex-grow p-3 rounded-full text-black"
//               />
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full"
//               >
//                 S'abonner
//               </motion.button>
//             </form>
//           </div>
//         </div>
//       </motion.section>

//       {/* 13. Réservation ou Planification de Sessions */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Réservez votre session</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <img 
//                 src="/images/booking.jpg" 
//                 alt="Réservation" 
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <form className="space-y-4">
//                 <input 
//                   type="text" 
//                   placeholder="Nom complet" 
//                   className="w-full p-3 border rounded"
//                 />
//                 <input 
//                   type="email" 
//                   placeholder="Email" 
//                   className="w-full p-3 border rounded"
//                 />
//                 <input 
//                   type="date" 
//                   className="w-full p-3 border rounded"
//                 />
//                 <select className="w-full p-3 border rounded">
//                   <option>Choisir un type de session</option>
//                   <option>Cours débutant</option>
//                   <option>Session intermédiaire</option>
//                   <option>Coaching avancé</option>
//                 </select>
//                 <motion.button 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded"
//                 >
//                   Réserver
//                 </motion.button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* 14. Section Réseaux Sociaux */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 bg-gray-100"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Suivez-nous</h2>
//           <div className="flex justify-center space-x-8">
//             {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
//               <motion.a
//                 key={social}
//                 href={`https://${social}.com`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2 }}
//                 className="text-4xl text-gray-600 hover:text-blue-500"
//               >
//                 <i className={`fab fa-${social}`}></i>
//               </motion.a>
//             ))}
//           </div>
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[1, 2, 3, 4].map((item) => (
//               <img 
//                 key={item}
//                 src={`/images/social-${item}.jpg`}
//                 alt={`Social media post ${item}`}
//                 className="w-full h-64 object-cover rounded-lg"
//               />
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* 15. Partenaires et Sponsors */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-8 text-center">Nos Partenaires</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
//               <motion.div
//                 key={partner}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-4 rounded-lg shadow flex items-center justify-center"
//               >
//                 <img 
//                   src={`/images/partner-${partner}.png`}
//                   alt={`Partenaire ${partner}`}
//                   className="max-h-16"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default HomePage;
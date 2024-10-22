import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";


// Types pour les composants
interface StarRatingProps {
  rating: number;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
}

// Composant pour afficher les étoiles en fonction du rating
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current" size={16} />
      ))}
      {hasHalfStar && <StarHalf className="text-yellow-400 fill-current" size={16} />}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

// Définition des variantes pour l'animation de la carte
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Composant Card pour afficher les cartes avec les informations du matériel
const Card: React.FC<CardProps> = ({ image, title, description, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <StarRating rating={rating} />
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Reserve Now
          </button>
        </div>
      )}
    </motion.div>
  );
};

// Composant principal de la page de matériel
const MaterialPage: React.FC = () => {
  const location = useLocation();
  const coursRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const analysesRef = useRef<HTMLDivElement>(null);
  const planchesRef = useRef<HTMLDivElement>(null);
  const combinaisonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionId = location.pathname.split("/")[2];
    const refMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      cours: coursRef,
      location: locationRef,
      analyses: analysesRef,
      planches: planchesRef,
      combinaisons: combinaisonsRef,
    };

    if (sectionId && refMap[sectionId]?.current) {
      refMap[sectionId].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img
          src="images/Materielle_Pictures2.jpeg"
          alt="Matériel de surf"
          className="w-full h-full object-cover opacity-70"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-white">Notre Matériel</h1>
        </motion.div>
      </div>

      {/* Navigation rapide */}
      <nav className="bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-8 overflow-x-auto py-4">
            <li>
              <a href="#cours" className="text-blue-600 hover:text-blue-800">
                Cours de surf
              </a>
            </li>
            <li>
              <a href="#location" className="text-blue-600 hover:text-blue-800">
                Location
              </a>
            </li>
            <li>
              <a href="#analyses" className="text-blue-600 hover:text-blue-800">
                Analyses vidéo
              </a>
            </li>
            <li>
              <a href="#planches" className="text-blue-600 hover:text-blue-800">
                Planches
              </a>
            </li>
            <li>
              <a href="#combinaisons" className="text-blue-600 hover:text-blue-800">
                Combinaisons
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections de matériel */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        {/* Section Cours */}
        <section ref={coursRef} id="cours" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-8">Cours de Surf</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="/api/placeholder/400/300"
              title="Cours Débutant"
              description="Découvrez les bases du surf avec nos instructeurs qualifiés."
              rating={4.5}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Cours Intermédiaire"
              description="Perfectionnez vos techniques et progressez rapidement."
              rating={4.7}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Cours Avancé"
              description="Maîtrisez les manœuvres avancées et surfez comme un pro."
              rating={4.9}
            />
          </div>
        </section>

        {/* Section Location */}
        <section ref={locationRef} id="location" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-8">Location de Matériel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="/api/placeholder/400/300"
              title="Location Journée"
              description="Louez votre matériel pour une journée de surf."
              rating={4.6}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Location Semaine"
              description="Profitez d'un tarif avantageux pour une semaine de location."
              rating={4.8}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Pack Complet"
              description="Louez tout le nécessaire : planche, combinaison et accessoires."
              rating={4.7}
            />
          </div>
        </section>

        {/* Section Analyses Vidéo */}
        <section ref={analysesRef} id="analyses" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-8">Analyses Vidéo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="/api/placeholder/400/300"
              title="Analyse Personnelle"
              description="Obtenez une analyse détaillée de votre technique de surf."
              rating={4.8}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Analyse de Groupe"
              description="Participez à des sessions d'analyse vidéo en groupe pour progresser ensemble."
              rating={4.6}
            />
          </div>
        </section>

        {/* Section Planches */}
        <section ref={planchesRef} id="planches" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-8">Planches de Surf</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="/api/placeholder/400/300"
              title="Planches pour Débutants"
              description="Des planches stables et faciles à manier pour débutants."
              rating={4.5}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Planches pour Intermédiaires"
              description="Des planches pour les surfeurs qui veulent progresser."
              rating={4.7}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Planches Avancées"
              description="Des planches pour les surfeurs expérimentés cherchant des performances maximales."
              rating={4.9}
            />
          </div>
        </section>

        {/* Section Combinaisons */}
        <section ref={combinaisonsRef} id="combinaisons" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-8">Combinaisons de Surf</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="/api/placeholder/400/300"
              title="Combinaisons Débutant"
              description="Des combinaisons confortables et abordables pour les débutants."
              rating={4.4}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Combinaisons Intermédiaire"
              description="Des combinaisons avec une meilleure isolation thermique."
              rating={4.6}
            />
            <Card
              image="/api/placeholder/400/300"
              title="Combinaisons Avancées"
              description="Des combinaisons haut de gamme pour une performance maximale."
              rating={4.9}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MaterialPage;

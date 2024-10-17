import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Waves, ChevronRight } from 'lucide-react';
import { BsFillStarFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface SpotProps {
  name: string;
  location: string;
  difficulty: string;
  image: string;
  description: string;
  stars: number;
}

const StarRating: React.FC<{ stars: number }> = ({ stars }) => (
  <div className="flex space-x-1">
    {[...Array(stars)].map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
      >
        <BsFillStarFill
          className="text-yellow-400 w-4 h-4"
          id={`star-${index + 1}`}
        />
      </motion.div>
    ))}
  </div>
);

const SpotCard: React.FC<SpotProps> = ({ name, location, difficulty, image, description, stars }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-4 text-white">
            <CardTitle className="text-2xl font-bold mb-2">{name}</CardTitle>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Waves className="text-blue-500" size={20} />
              <span className="text-sm text-gray-600">Difficulté:</span>
              <span className="text-sm font-medium">{difficulty}</span>
            </div>
            <StarRating stars={stars} />
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          
          <button className="mt-4 flex items-center text-blue-500 hover:text-blue-700 transition-colors">
            En savoir plus
            <ChevronRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const getDifficultyStars = (difficulty: string): number => {
  switch (difficulty.toLowerCase()) {
    case 'expert':
      return 5;
    case 'intermédiaire':
      return 3;
    case 'tous niveaux':
      return 2;
    default:
      return 1;
  }
};

const SpotsPage = () => {
  const spots = [
    {
      name: "Merleft",
      location: "Maroc",
      difficulty: "Intermédiaire",
      image: "/images/merleft.jpg",
      description: "Spot légendaire du Maroc, connu pour ses vagues puissantes et ses couchers de soleil magnifiques.",
      stars: 3
    },
    {
      name: "Pipeline",
      location: "Hawaii",
      difficulty: "Expert",
      image: "/images/pipeline.jpg",
      description: "L'une des vagues les plus célèbres au monde, Pipeline est le terrain de jeu des meilleurs surfeurs.",
      stars: 5
    },
    {
      name: "Biarritz",
      location: "France",
      difficulty: "Tous niveaux",
      image: "/images/biarritz.jpg",
      description: "Spot idéal pour l'apprentissage et le perfectionnement, avec des vagues adaptées à tous les niveaux.",
      stars: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez les Meilleurs Spots de Surf
          </h1>
          <p className="text-xl text-gray-600">
            Explorez des destinations de surf exceptionnelles à travers le monde
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotCard {...spot} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotsPage;
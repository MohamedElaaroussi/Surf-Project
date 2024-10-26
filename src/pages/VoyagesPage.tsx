import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Trophy, Users, Timer } from 'lucide-react';
import MaterialPage from './MaterialPage';

interface VoyageProps {
  destination: string;
  description: string;
  duration: string;
  price: string;
  media: string;
}

interface EventCardProps {
  title: string;
  date: string;
  participants: number;
  duration: string;
  level: string;
  description: string;
}

const VoyageCard: React.FC<VoyageProps> = ({ destination, description, duration, price, media }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const isVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 flex-shrink-0 w-80 mr-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        {isVideo(media) ? (
          <>
            <video
              className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'} ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              src={media}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
            />
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </>
        ) : (
          <img
            src={media}
            alt={destination}
            className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white text-center px-4 font-light">{description}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{destination}</h3>
        <p className="text-sm text-gray-600 mb-2">Durée: {duration}</p>
        <p className="text-sm font-semibold text-blue-600">Prix: {price}</p>
      </div>
    </div>
  );
};

const EventCard: React.FC<EventCardProps> = ({ title, date, participants, duration, level, description }) => {
  return (
    <Card className="w-full md:w-[350px] group hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {level}
          </Badge>
          <motion.div whileHover={{ rotate: 10 }} className="text-yellow-500">
            <Trophy size={24} />
          </motion.div>
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{participants} participants max</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Timer className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const VoyagesPage: React.FC = () => {
  const location = useLocation();
  const challengesSectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const allChallenges = [
    {
      title: "Défi des 30 Jours",
      date: "1er Juillet 2024",
      participants: 20,
      duration: "30 jours",
      level: "Tous niveaux",
      description: "Surfez pendant 30 jours consécutifs et améliorez votre technique avec nos coachs professionnels."
    },
    {
      title: "Compétition Sunset",
      date: "15 Août 2024",
      participants: 50,
      duration: "2 jours",
      level: "Intermédiaire",
      description: "Compétition de surf au coucher du soleil avec prix et barbecue sur la plage."
    },
    {
      title: "Stage Intensif Pro",
      date: "5 Septembre 2024",
      participants: 12,
      duration: "5 jours",
      level: "Avancé",
      description: "Formation intensive avec des surfeurs professionnels et analyse vidéo personnalisée."
    },
    {
      title: "Week-end Découverte",
      date: "20 Septembre 2024",
      participants: 30,
      duration: "2 jours",
      level: "Débutant",
      description: "Week-end d'initiation au surf avec cours théoriques et pratiques pour débutants."
    },
    {
      title: "Challenge Big Wave",
      date: "1er Octobre 2024",
      participants: 15,
      duration: "3 jours",
      level: "Expert",
      description: "Défiez les grandes vagues avec des experts. Formation sécurité et techniques avancées incluses."
    },
    {
      title: "Éco-Surf Camp",
      date: "15 Octobre 2024",
      participants: 25,
      duration: "4 jours",
      level: "Tous niveaux",
      description: "Combinez surf et écologie : nettoyage des plages, ateliers environnementaux et sessions de surf."
    }
  ];

  const voyages = [
    { destination: "Marrakech", description: "Découvrez le surf à proximité de la ville ocre", duration: "5 jours", price: "800€", media: "/vidéo/marakech.mp4" },
    { destination: "Essaouira", description: "Vagues constantes et ambiance décontractée", duration: "7 jours", price: "900€", media: "/images/Essaouira.jpg" },
    { destination: "Sidi Ifni", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Sidi Ifni.jpg" },
    { destination: "Mirleft", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Merleft_beach.jpg" },
    { destination: "Taghazout", description: "Le paradis des surfeurs au Maroc", duration: "10 jours", price: "1200€", media: "/images/taghazout.jpg" },
    { destination: "Plage km 25", description: "Spot secret près d'Agadir", duration: "4 jours", price: "700€", media: "/images/Plage km 25.jpg" },
  ];

  const displayedChallenges = showMore ? allChallenges : allChallenges.slice(0, 3);

  React.useEffect(() => {
    if (location.hash === '#defis-evenements' && challengesSectionRef.current) {
      challengesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <MaterialPage />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="relative h-[60vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] mb-4">
          <img
            src="/images/30-day-challenge.jpg"
            alt="Surf Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center">Aventures de Surf</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl text-center px-4">
              Découvrez les meilleures destinations de surf à travers le monde.
              Des vagues parfaites, des paysages à couper le souffle et des expériences inoubliables.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Nos Destinations</h2>
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-scroll pb-10 hide-scrollbar"
            whileTap={{ cursor: "grabbing" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {voyages.map((voyage, index) => (
              <VoyageCard key={index} {...voyage} />
            ))}
          </motion.div>
        </div>

        <section ref={challengesSectionRef} id="defis-evenements" className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Défis et Événements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Participez à nos défis et événements exclusifs pour progresser et rencontrer d'autres passionnés de surf.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <EventCard {...challenge} />
                </motion.div>
              ))}
            </div>

            <motion.div className="text-center mt-12" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {showMore ? "Voir moins d'événements" : "Voir plus d'événements"}
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VoyagesPage;
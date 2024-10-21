import React, { useState } from 'react';

interface VoyageProps {
  destination: string;
  description: string;
  duration: string;
  price: string;
  media: string;
}

const VoyageCard: React.FC<VoyageProps> = ({ destination, description, duration, price, media }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const isVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300
       ease-in-out hover:scale-105"
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
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
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

const VoyagesPage = () => {
  const voyages = [
    { destination: "Marrakech", description: "Découvrez le surf à proximité de la ville ocre", duration: "5 jours", price: "800€", media: "/vidéo/marakech.mp4" },
    { destination: "Essaouira", description: "Vagues constantes et ambiance décontractée", duration: "7 jours", price: "900€", media: "/images/Essaouira.jpg" },
    { destination: "Sidi Ifni", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Sidi Ifni.jpg" },
    { destination: "Mirleft", description: "Spots de surf sauvages et peu fréquentés", duration: "6 jours", price: "850€", media: "/images/Merleft_beach.jpg" },
    { destination: "Taghazout", description: "Le paradis des surfeurs au Maroc", duration: "10 jours", price: "1200€", media: "/images/taghazout.jpg" },
    { destination: "Plage km 25", description: "Spot secret près d'Agadir", duration: "4 jours", price: "700€", media: "/images/Plage km 25.jpg" },
    { destination: "Bali", description: "Paradis du surf en Indonésie", duration: "10 jours", price: "1500€", media: "/images/bali-surf.jpg" },
    { destination: "Costa Rica", description: "Vagues parfaites et nature luxuriante", duration: "14 jours", price: "2000€", media: "/images/costa-rica-surf.jpg" },
    { destination: "Portugal", description: "Spots de classe mondiale en Europe", duration: "7 jours", price: "1200€", media: "/images/portugal-surf.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with responsive height */}
      <div className="relative h-[60vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] mt-12 mb-4">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Nos Destinations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {voyages.map((voyage, index) => (
            <VoyageCard key={index} {...voyage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoyagesPage;
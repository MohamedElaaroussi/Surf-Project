import React, { useState } from 'react';

import { Home, Car, Waves, Wind, Compass, Plane, BookOpen } from 'lucide-react';

// Types et interfaces
interface PricingStructure {
  daily: number;
  weekly: number;
  monthly: number;
}

interface Accommodation {
  title: string;
  pricing: PricingStructure;
  image: string;
  description: string;
  features: string[];
}

interface TransportService {
  title: string;
  pricing: PricingStructure;
  description: string;
}

interface SurfPack {
  title: string;
  pricing: PricingStructure;
  items: string[];
  image: string;
}

interface Activity {
  title: string;
  pricing: PricingStructure;
  description: string;
  icon: React.ReactNode;
}

interface Services {
  transport: TransportService[];
  surfing: SurfPack[];
  activities: Activity[];
}

const AccommodationServicesSection: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const activities: Activity[] = [
    {
      title: "Cours de Surf",
      pricing: { daily: 30, weekly: 350, monthly: 1200 },
      description: "Apprenez à surfer avec nos instructeurs certifiés",
      icon: <Waves className="w-8 h-8" />
    },
    {
      title: "Cours de BodyBoard",
      pricing: { daily: 30, weekly: 230, monthly: 800 },
      description: "Découvrez les sensations du body board",
      icon: <Wind className="w-8 h-8" />
    },
    {
      title: "Voyage Surf",
      pricing: { daily: 100, weekly: 600, monthly: 2000 },
      description: "Explorez les meilleurs spots de surf",
      icon: <Plane className="w-8 h-8" />
    },
    {
      title: "Location Matériel",
      pricing: { daily: 30, weekly: 175, monthly: 600 },
      description: "Louez tout le matériel nécessaire pour votre session",
      icon: <Waves className="w-8 h-8" />
    },
    {
      title: "Location Maison",
      pricing: { daily: 80, weekly: 470, monthly: 1600 },
      description: "Séjournez dans nos maisons de surf confortables",
      icon: <Home className="w-8 h-8" />
    },
    {
      title: "Surf Analyses vidéo",
      pricing: { daily: 40, weekly: 230, monthly: 800 },
      description: "Approfondissez vos connaissances sur le surf",
      icon: <BookOpen className="w-8 h-8" />
    }
  ];

  const accommodations: Accommodation[] = [
    {
      title: "Villa Vue Mer",
      pricing: { daily: 60, weekly: 350, monthly: 1200 },
      image: "/images/house_mer.jpg",
      description: "Villa luxueuse avec vue panoramique sur l'océan, 3 chambres",
      features: ["Wifi", "Piscine", "Terrasse", "Parking"]
    },
    {
      title: "Surf House",
      pricing: { daily: 65, weekly: 380, monthly: 1300 },
      image: "/video/video_house.mp4",
      description: "Maison de surfeur authentique à 2min de la plage, 2 chambres",
      features: ["Rack à planches", "Douche extérieure", "BBQ", "Jardin"]
    },
    {
      title: "Beach Bungalow",
      pricing: { daily: 80, weekly: 470, monthly: 1600 },
      image: "/images/house1.jpg",
      description: "Bungalow cozy en front de mer, idéal pour couple",
      features: ["Vue mer", "Cuisine équipée", "Terrasse privée"]
    }
  ];

  const services: Services = {
    transport: [
      {
        title: "Navette Aéroport",
        pricing: { daily: 50, weekly: 280, monthly: 900 },
        description: "Service de navette privée depuis l'aéroport"
      },
      {
        title: "Location de voiture",
        pricing: { daily: 45, weekly: 250, monthly: 800 },
        description: "Véhicules adaptés pour le transport de planches"
      }
    ],
    surfing: [
      {
        title: "Pack Débutant",
        pricing: { daily: 30, weekly: 175, monthly: 600 },
        items: ["Planche mousse", "Combinaison", "Leash"],
        image: "images/Pack_Débutant.jpg"
      },
      {
        title: "Pack Confirmé",
        pricing: { daily: 45, weekly: 260, monthly: 900 },
        items: ["Shortboard/Longboard", "Combinaison", "Leash", "Wax"],
        image: "/images/advanced-surf2.jpg"
      }
    ],
    activities: activities
  };

  const formatPrice = (pricing: PricingStructure): string => {
    const prices = {
      daily: `${pricing.daily}€/jour`,
      weekly: `${pricing.weekly}€/semaine (-${Math.round((1 - pricing.weekly / (pricing.daily * 7)) * 100)}%)`,
      monthly: `${pricing.monthly}€/mois (-${Math.round((1 - pricing.monthly / (pricing.daily * 30)) * 100)}%)`
    };
    return prices[selectedDuration];
  };

  const renderMedia = (media: string): React.ReactNode => {
    const isVideo = media.endsWith('.mp4');
    if (isVideo) {
      return (
        <video className="w-full h-48 object-cover" controls>
          <source src={media} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      );
    }
    return (
      <img
        src={media}
        alt="Accommodation"
        className="w-full h-48 object-cover"
      />
    );
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Sélecteur de durée */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">Choisissez votre durée de séjour</h2>
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg shadow-sm">
              <button
                onClick={() => setSelectedDuration('daily')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors ${
                  selectedDuration === 'daily' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Journalier
              </button>
              <button
                onClick={() => setSelectedDuration('weekly')}
                className={`px-4 py-2 text-sm font-medium border-x transition-colors ${
                  selectedDuration === 'weekly' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Hebdomadaire
              </button>
              <button
                onClick={() => setSelectedDuration('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors ${
                  selectedDuration === 'monthly' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Mensuel
              </button>
            </div>
          </div>
        </div>

        {/* Section Hébergements */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Home className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-center">Hébergements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {renderMedia(accommodation.image)}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{accommodation.title}</h3>
                    <span className="text-blue-500 font-bold">{formatPrice(accommodation.pricing)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{accommodation.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {accommodation.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Transport */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Car className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-center">Transport</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.transport.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-500 font-bold mb-2">{formatPrice(item.pricing)}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Matériel de Surf */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Waves className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-center">Matériel de Surf</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.surfing.map((pack, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    {pack.title}
                  </h3>
                  <p className="text-blue-500 font-bold mb-4">{formatPrice(pack.pricing)}</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {pack.items.map((item, idx) => (
                      <li key={idx} className="transition-colors duration-300 group-hover:text-gray-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-7 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Section Activités */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Compass className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-center">Activités</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-blue-500 font-bold mb-2">{formatPrice(activity.pricing)}</p>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationServicesSection;
import React from 'react';
import { Home, Car, Waves, Compass } from 'lucide-react';

// Types et interfaces
interface Accommodation {
  title: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

interface TransportService {
  title: string;
  price: string;
  description: string;
}

interface SurfPack {
  title: string;
  price: string;
  items: string[];
  image: string;
}

interface Activity {
  title: string;
  price: string;
  description: string;
}

interface Services {
  transport: TransportService[];
  surfing: SurfPack[];
  activities: Activity[];
}

const AccommodationServicesSection = () => {
  const accommodations: Accommodation[] = [
    {
      title: "Villa Vue Mer",
      price: "50€/nuit",
      image: "images/house_mer.jpg",
      description: "Villa luxueuse avec vue panoramique sur l'océan, 3 chambres",
      features: ["Wifi", "Piscine", "Terrasse", "Parking"]
    },
    {
      title: "Surf House",
      price: "150€/nuit",
      image: "vidéo/vidéo_house.mp4",
      description: "Maison de surfeur authentique à 2min de la plage, 2 chambres",
      features: ["Rack à planches", "Douche extérieure", "BBQ", "Jardin"]
    },
    {
      title: "Beach Bungalow",
      price: "120€/nuit",
      image: "images/house1.jpg",
      description: "Bungalow cozy en front de mer, idéal pour couple",
      features: ["Vue mer", "Cuisine équipée", "Terrasse privée"]
    }
  ];

  const services: Services = {
    transport: [
      {
        title: "Navette Aéroport",
        price: "50€/trajet",
        description: "Service de navette privée depuis l'aéroport"
      },
      {
        title: "Location de voiture",
        price: "45€/jour",
        description: "Véhicules adaptés pour le transport de planches"
      }
    ],
    surfing: [
      {
        title: "Pack Débutant",
        price: "30€/jour",
        items: ["Planche mousse", "Combinaison", "Leash"],
        image: "/images/Pack_Débutant.jpg" // Ajoutez votre image pour débutant
      },
      {
        title: "Pack Confirmé",
        price: "45€/jour",
        items: ["Shortboard/Longboard", "Combinaison", "Leash", "Wax"],
        image: "/images/advanced-surf2.jpg" // Ajoutez votre image pour confirmé
      }
    ],
    activities: [
      {
        title: "Cours de Surf",
        price: "60€/2h",
        description: "Cours particulier avec instructeur certifié"
      },
      {
        title: "Excursion Snorkeling",
        price: "40€/personne",
        description: "Découverte des fonds marins (matériel inclus)"
      },
      {
        title: "Yoga sur la Plage",
        price: "25€/session",
        description: "Séance de yoga face à l'océan"
      },
      {
        title: "Pêche en Mer",
        price: "80€/demi-journée",
        description: "Sortie pêche avec guide local"
      }
    ]
  };

  const renderMedia = (media: string) => {
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
        {/* Section Hébergements */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Home className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-center">Hébergements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {renderMedia(accommodation.image)}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{accommodation.title}</h3>
                    <span className="text-blue-500 font-bold">{accommodation.price}</span>
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
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-500 font-bold mb-2">{item.price}</p>
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
                {/* Contenu principal */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    {pack.title}
                  </h3>
                  <p className="text-blue-500 font-bold mb-4">{pack.price}</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {pack.items.map((item, idx) => (
                      <li key={idx} className="transition-colors duration-300 group-hover:text-gray-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image de fond avec effet hover */}
                <div className="absolute inset-0 opacity-7 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay gradient */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-blue-500 font-bold mb-2">{activity.price}</p>
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
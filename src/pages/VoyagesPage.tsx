import React from 'react';

const VoyageCard = ({ destination, description, duration, price, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={destination} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{destination}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500">Durée: {duration}</p>
      <p className="text-sm text-gray-500">Prix: {price}</p>
    </div>
  </div>
);

const VoyagesPage = () => {
  const voyages = [
    { destination: "Bali", description: "Paradis du surf en Indonésie", duration: "10 jours", price: "1500€", image: "/images/bali-surf.jpg" },
    { destination: "Costa Rica", description: "Vagues parfaites et nature luxuriante", duration: "14 jours", price: "2000€", image: "/images/costa-rica-surf.jpg" },
    { destination: "Portugal", description: "Spots de classe mondiale en Europe", duration: "7 jours", price: "1200€", image: "/images/portugal-surf.jpg" },
    // Ajoutez d'autres voyages ici
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Voyages de Surf</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {voyages.map((voyage, index) => (
          <VoyageCard key={index} {...voyage} />
        ))}
      </div>
    </div>
  );
};

export default VoyagesPage;
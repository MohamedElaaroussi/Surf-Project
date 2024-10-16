import React from 'react';

const ChallengeCard = ({ title, description, duration, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500">Durée: {duration}</p>
    </div>
  </div>
);

const ChallengesPage = () => {
  const challenges = [
    { title: "30 jours de surf", description: "Surfez chaque jour pendant un mois", duration: "30 jours", image: "/images/30-day-challenge.jpg" },
    { title: "Maîtrisez le tube", description: "Apprenez à surfer dans le tube", duration: "Variable", image: "/images/tube-riding.jpg" },
    { title: "Éco-surfeur", description: "Nettoyez une plage après chaque session", duration: "Permanent", image: "/images/eco-surfer.jpg" },
    // Ajoutez d'autres défis ici
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Défis de Surf</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  );
};

export default ChallengesPage;
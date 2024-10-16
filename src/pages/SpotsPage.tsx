import React from 'react';
interface FeaturedPostProps {
  name: string;      // Le titre est une chaîne de caractères
  location: string;    // L'extrait est une chaîne de caractères
  difficulty:string,
  image: string;      // L'image est un URL (chaîne de caractères)
}
const SpotCard: React.FC<FeaturedPostProps> = ({ name, location, difficulty, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-sm text-gray-500">Difficulté: {difficulty}</p>
    </div>
  </div>
);

const SpotsPage = () => {
  const spots = [
    { name: "Merleft", location: "Maroc", difficulty: "Intermédiaire", image: "/images/merleft.jpg" },
    { name: "Pipeline", location: "Hawaii", difficulty: "Expert", image: "/images/pipeline.jpg" },
    { name: "Biarritz", location: "France", difficulty: "Tous niveaux", image: "/images/biarritz.jpg" },
    // Ajoutez d'autres spots ici
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Spots de Surf</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot, index) => (
          <SpotCard key={index} {...spot} />
        ))}
      </div>
    </div>
  );
};

export default SpotsPage;
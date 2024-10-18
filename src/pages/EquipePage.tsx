import React, { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-48 object-cover transition-all duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white text-center px-4">{bio}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const EquipePage = () => {
  const teamMembers = [
    { name: "Sophie Durand", role: "Fondatrice & Surfeuse Pro", bio: "Championne de surf avec 10 ans d'expérience", image: "/images/sophie.jpg" },
    { name: "Marc Leroy", role: "Instructeur en Chef", bio: "20 ans d'expérience dans l'enseignement du surf", image: "/images/marc.jpg" },
    { name: "Léa Martin", role: "Photographe", bio: "Spécialiste de la photographie de surf et d'océan", image: "/images/lea.jpg" },
    { name: "Mohamed ait laaroussi", role: "Designer & Développeur", bio: "Créateur de l'identité visuelle et des équipements de l'école", image: "/images/developper.jpg" },
    { name: "Thomas Petit", role: "Cameraman", bio: "Capture les meilleurs moments sur les vagues", image: "/images/cameraman.jpg" },
    { name: "Julie Renard", role: "Monitrice de Parachute Ascensionnel", bio: "Experte en sensations fortes aériennes", image: "/images/parachite.jpg" },
    { name: "Yassin", role: "Moniteur de Surf", bio: "Spécialiste des vagues pour débutants", image: "/images/moniteur_surf1.jpg" },
    { name: "Chloé Rousseau", role: "Monitrice de Surf", bio: "Championne junior, elle transmet sa passion aux plus jeunes", image: "/images/moniteur_surf2.jpg" },
    { name: "Antoine Mercier", role: "Moniteur de Surf", bio: "Expert en techniques avancées de surf", image: "/images/moniteur_surf3.jpg" },
    { name: "Nicolas Fabre", role: "Chauffeur", bio: "Vous emmène sur les meilleurs spots en toute sécurité", image: "/images/Chauffeur.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Notre Équipe</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default EquipePage;
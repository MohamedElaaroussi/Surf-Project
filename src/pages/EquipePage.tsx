import React from 'react';
interface FeaturedPostProps {
  name: string;      // Le titre est une chaîne de caractères
  role: string;    // L'extrait est une chaîne de caractères
  bio:string,
  image: string;      // L'image est un URL (chaîne de caractères)
}

const TeamMemberCard: React.FC<FeaturedPostProps> = ({ name, role, bio, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <p className="text-sm text-gray-500">{bio}</p>
    </div>
  </div>
);

const EquipePage = () => {
  const teamMembers = [
    { name: "Sophie Durand", role: "Fondatrice & Surfeuse Pro", bio: "Championne de surf avec 10 ans d'expérience", image: "/images/sophie.jpg" },
    { name: "Marc Leroy", role: "Instructeur en Chef", bio: "20 ans d'expérience dans l'enseignement du surf", image: "/images/marc.jpg" },
    { name: "Léa Martin", role: "Photographe", bio: "Spécialiste de la photographie de surf et d'océan", image: "/images/lea.jpg" },
    // Ajoutez d'autres membres de l'équipe ici
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Notre Équipe</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default EquipePage;
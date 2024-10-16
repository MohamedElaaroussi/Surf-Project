import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <video src="/images/about-surfblog.jpg" alt="À propos de SurfBlog" className="w-full h-64 object-cover" />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">À propos de SurfBlog</h1>
        <p className="text-gray-700 mb-6">
          SurfBlog est né de notre passion pour le surf et de notre désir de partager nos expériences avec la communauté des surfeurs du monde entier. Que vous soyez débutant ou surfeur expérimenté, nous sommes là pour vous inspirer et vous aider à progresser dans votre pratique du surf.
        </p>
        <p className="text-gray-700 mb-6">
          Notre équipe est composée de surfeurs passionnés, de photographes talentueux et de rédacteurs experts. Ensemble, nous travaillons pour vous apporter les meilleures informations sur les spots de surf, les techniques, l'équipement et la culture surf.
        </p>
        <h2 className="text-2xl font-bold mb-4">Notre mission</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Partager notre passion pour le surf</li>
          <li>Fournir des informations précises et à jour sur les meilleurs spots de surf</li>
          <li>Offrir des conseils pratiques pour améliorer votre technique</li>
          <li>Promouvoir une pratique responsable et respectueuse de l'environnement</li>
        </ul>
        <p className="text-gray-700">
          Rejoignez-nous dans cette aventure et laissez-vous porter par les vagues !
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
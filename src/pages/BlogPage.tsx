import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

interface SubArticle {
  title: string;
  content: string;
}

interface Article {
  title: string;
  date: string;
  image: string;
  slug: string;
  subArticles: SubArticle[];
}

const BlogPage: React.FC = () => {
  const location = useLocation();
  const mainArticles: Article[] = [
    {
      title: "10 Conseils pour Débuter le Surf",
      date: "15 Mai 2024",
      image: "vidéo/learn_surf.mp4",
      slug: "10-conseils-pour-debuter-le-surf",
      subArticles: [
        { title: "Choisir la bonne planche", content: "Contenu détaillé sur le choix de la planche..." },
        { title: "Comprendre les vagues", content: "Explication des différents types de vagues..." },
        { title: "Échauffements essentiels", content: "Liste des échauffements importants avant le surf..." },
        { title: "Techniques de rame", content: "Comment ramer efficacement..." },
        { title: "Se lever sur la planche", content: "Étapes pour se lever correctement sur la planche..." },
        { title: "Règles de sécurité", content: "Les règles de sécurité essentielles en surf..." },
        { title: "Lire l'océan", content: "Comment comprendre les courants et les conditions..." },
        { title: "Entretien du matériel", content: "Conseils pour l'entretien de votre équipement..." },
        { title: "Condition physique", content: "Exercices pour améliorer votre condition physique..." },
        { title: "Mentalité du surfeur", content: "L'état d'esprit nécessaire pour progresser en surf..." }
      ]
    },
    {
      title: "Les Meilleures Planches de 2024",
      date: "22 Juin 2024",
      image: "images/beginner-tips.jpg",
      slug: "les-meilleures-planches-de-2024",
      subArticles: [
        { title: "Planches pour débutants", content: "Les meilleures planches pour commencer..." },
        { title: "Planches de performance", content: "Pour les surfeurs expérimentés..." },
        { title: "Longboards", content: "Avantages et inconvénients des longboards..." },
        { title: "Shortboards", content: "Quand et pourquoi choisir un shortboard..." },
        { title: "Fish boards", content: "Les caractéristiques uniques des fish boards..." }
      ]
    },
    {
      title: "Préparer son Trip de Surf",
      date: "7 Juillet 2024",
      image: "images/préparation_surfing.jpg",
      slug: "preparer-son-trip-de-surf",
      subArticles: [
        { title: "Choisir sa destination", content: "Facteurs à considérer pour choisir un spot..." },
        { title: "Préparer son équipement", content: "Liste de l'équipement essentiel..." },
        { title: "Réserver son hébergement", content: "Astuces pour trouver le meilleur logement..." },
        { title: "Assurances et santé", content: "Couvertures recommandées pour un trip de surf..." },
        { title: "Budget et finances", content: "Comment planifier son budget de voyage..." }
      ]
    }
  ];

  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = refs.current[id];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {mainArticles.map((article, index) => (
        <div key={index} ref={el => (refs.current[article.slug] = el)}>
          <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
          <p className="text-gray-600 mb-4">{article.date}</p>
          {article.image.endsWith('.mp4') ? (
            <video controls className="w-full mb-4">
              <source src={article.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={article.image} alt={article.title} className="w-full mb-4" />
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {article.subArticles.map((subArticle, subIndex) => (
              <BlogPost
                key={subIndex}
                title={subArticle.title}
                content={subArticle.content}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

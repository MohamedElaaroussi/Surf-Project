import React from "react";
import FeaturedPost from "../components/FeaturedPost";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur SurfBlog</h1>
        <p className="text-xl text-gray-700">
          Découvrez les meilleures spots de surf et des conseils pour améliorer
          votre technique.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <FeaturedPost
          title="Les meilleurs spots de surf en Californie"
          excerpt="Découvrez notre sélection des plages les plus mythiques pour surfer en Californie."
          image="/images/california-surf.jpg"
        />
        <FeaturedPost
          title="Comment choisir sa première planche de surf"
          excerpt="Guide complet pour les débutants : tout ce qu'il faut savoir pour choisir sa planche."
          image="/images/surfboard-guide.jpg"
        />
      </section>
      <div>
        <a
          href="https://wa.me/+212653175243?text=Surf_beach_notification_with_abdeillah"
          class="btn-whatsapp-pulse"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default HomePage;

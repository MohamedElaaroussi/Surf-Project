import React from 'react';
import BlogPost from '../components/BlogPost';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Les meilleures plages pour surfer en été",
      date: "15 juin 2024",
      excerpt: "Découvrez notre sélection des spots de surf incontournables pour cet été.",
      image: "/images/summer-surf.jpg"
    },
    {
      title: "Comment entretenir sa planche de surf",
      date: "2 juin 2024",
      excerpt: "Nos conseils pour garder votre planche en parfait état et prolonger sa durée de vie.",
      image: "/images/surfboard-maintenance.jpg"
    },
    {
      title: "Les compétitions de surf à ne pas manquer en 2024",
      date: "20 mai 2024",
      excerpt: "Le calendrier des événements majeurs du surf mondial pour cette année.",
      image: "/images/surf-competitions.jpg"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../pages/HomePage';
import BlogPage from '../../pages/BlogPage';
import SpotsPage from '../../pages/SpotsPage';
import ChallengesPage from '../../pages/ChallengesPage';
import VoyagesPage from '../../pages/VoyagesPage';
import EquipePage from '../../pages/EquipePage';
import AboutPage from '../../pages/AboutPage';
import Blog from '../../components/Blog';
import MaterialPage from '../../pages/MaterialPage';
import ArticlesPage from '../../pages/ArticlesPage';

// Exemple d'articles à passer en props
const articlesData = [
  { id: '1', imageUrl: 'image1.jpg', title: 'Article 1', content: 'Contenu de l\'article 1' },
  { id: '2', imageUrl: 'image2.jpg', title: 'Article 2', content: 'Contenu de l\'article 2' },
  // Ajoutez plus d'articles si nécessaire
];

const RoutesConfig = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/blog/:slug', element: <Blog /> },
      { path: '/spots', element: <SpotsPage /> },
      { path: '/challenges', element: <ChallengesPage /> },
      { path: '/equipe', element: <EquipePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/materielle/:section', element: <MaterialPage /> },
      { path: '/activites', element: <VoyagesPage /> },
      { path: '/articles', element: <ArticlesPage articles={articlesData} /> },
    ],
  },
]);

export default RoutesConfig;

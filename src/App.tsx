import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import SpotsPage from './pages/SpotsPage';
import ChallengesPage from './pages/ChallengesPage';
import VoyagesPage from './pages/VoyagesPage';
import EquipePage from './pages/EquipePage';
import AboutPage from './pages/AboutPage';
import Blog from './components/Blog';
import MaterialPage from './pages/MaterialPage';
import Loading from './components/Loading'; // Importez le composant Loading

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de 3 secondes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Affiche le composant Loading pendant le chargement
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/spots" element={<SpotsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/materielle" element={<MaterialPage />} />
            <Route path="/materielle/:section" element={<MaterialPage />} />
            <Route path="activites" element={<VoyagesPage />} />
          </Routes>
          <div className='whatsapp-button'>
            <Link to="https://api.whatsapp.com/send?phone=653175243&text=hy%21%%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
               className="float" target="_blank">
              <i className="fa fa-whatsapp my-float"></i>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

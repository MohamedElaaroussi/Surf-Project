import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
import Header from './components/Header';import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import SpotsPage from './pages/SpotsPage';
import ChallengesPage from './pages/ChallengesPage';
import VoyagesPage from './pages/VoyagesPage';
import EquipePage from './pages/EquipePage';
import AboutPage from './pages/AboutPage';
import Blog from './components/Blog';


const App = () => {
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
            <Route path="/voyages" element={<VoyagesPage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
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
const App = () => {
    return (_jsx(Router, { children: _jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow container mx-auto mt-8 px-4", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/blog/:slug", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/spots", element: _jsx(SpotsPage, {}) }), _jsx(Route, { path: "/challenges", element: _jsx(ChallengesPage, {}) }), _jsx(Route, { path: "/voyages", element: _jsx(VoyagesPage, {}) }), _jsx(Route, { path: "/equipe", element: _jsx(EquipePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) })] }) }), _jsx(Footer, {})] }) }));
};
export default App;

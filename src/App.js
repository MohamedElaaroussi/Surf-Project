import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
var App = function () {
    var _a = useState(true), loading = _a[0], setLoading = _a[1];
    useEffect(function () {
        // Simule un chargement de 3 secondes
        var timer = setTimeout(function () {
            setLoading(false);
        }, 3000);
        return function () { return clearTimeout(timer); };
    }, []);
    if (loading) {
        return _jsx(Loading, {}); // Affiche le composant Loading pendant le chargement
    }
    return (_jsx(Router, { children: _jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Header, {}), _jsxs("main", { className: "flex-grow container mx-auto mt-8 px-4", children: [_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/blog/:slug", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/spots", element: _jsx(SpotsPage, {}) }), _jsx(Route, { path: "/challenges", element: _jsx(ChallengesPage, {}) }), _jsx(Route, { path: "/equipe", element: _jsx(EquipePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/materielle", element: _jsx(MaterialPage, {}) }), _jsx(Route, { path: "/materielle/:section", element: _jsx(MaterialPage, {}) }), _jsx(Route, { path: "activites", element: _jsx(VoyagesPage, {}) })] }), _jsx("div", { className: 'whatsapp-button', children: _jsx(Link, { to: "https://api.whatsapp.com/send?phone=653175243&text=hy%21%%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.", className: "float", target: "_blank", children: _jsx("i", { className: "fa fa-whatsapp my-float" }) }) })] }), _jsx(Footer, {})] }) }));
};
export default App;

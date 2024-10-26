// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto mt-8 px-4">
      <Outlet /> {/* Render children routes here */}
    </main>
    <Footer />
  </div>
);

export default Layout;

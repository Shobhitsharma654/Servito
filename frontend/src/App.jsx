import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddAddress from './pages/AddAddress';
import Services from './pages/Services';

import Hero from './pages/Hero';
import AboutPage from './components/AboutPage';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
     <Navbar />
    <Hero/>
    <Services/>
    <AboutPage/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
      
    </div>
  );
}

export default App;

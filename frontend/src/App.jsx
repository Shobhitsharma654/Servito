import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddAddress from './pages/AddAddress';
import Services from './pages/Services';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
     <Navbar />
     <Routes>
      
       <Route path="/" element={<Home />} />
       <Route path="/add-address" element={<AddAddress />} />
        <Route path="/services" element={<Services />} /> 
       <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} /> 
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Pages/Navbar.jsx";
import Hero from "../Pages/Hero.jsx";
import Products from "../Pages/Product.jsx";
import Features from "../Pages/Features.jsx";
import Testmonial from "../Pages/Testmonial.jsx";
import Contact from "../Pages/Contact.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/Testmonial" element={<Testmonial/>}></Route>
        <Route path="contact" element ={<Contact/>}></Route>

    
      </Routes>
      
    </div>
  );
};
export default App;
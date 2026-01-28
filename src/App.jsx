import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Pages/Navbar.jsx";
import Hero from "../Pages/Hero.jsx";
import Products from "../Pages/Product.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Products />} />
    
      </Routes>
      
    </div>
  );
};
export default App;
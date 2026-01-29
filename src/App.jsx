import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Hero from "../Pages/Hero.jsx";
import Products from "../Pages/Product.jsx";
import Features from "../Pages/Features.jsx";
import Testmonial from "../Pages/Testmonial.jsx";
import Contact from "../Pages/Contact.jsx";
import Login from "../Pages/Login.jsx"
import Signup from "../Pages/Singup.jsx";
import Dashboard from "../Dashbardlayout/Dashboard.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/Testmonial" element={<Testmonial/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/singup" element={<Signup/>}></Route>

        <Route path="/dashboard" element={<Dashboard/>}></Route>

    
      </Routes>
      
    </div>
  );
};
export default App;
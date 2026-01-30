import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/Main.jsx";
import DashboardLayout from "./Layouts/Dashboard.jsx";
import Hero from "./Pages/Hero.jsx";
import Product from "./Pages/Product.jsx";
import Features from "./Pages/Features.jsx";
import Testimonial from "./Pages/Testimonial.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Notfoud from "./Pages/Notfoud.jsx";
import Dashboard from "./Dashboardlayout/Dashboard.jsx";
import Users from "./Dashboardlayout/Users.jsx";
import User from "./Dashboardlayout/User.jsx";
import Profile from "./Dashboardlayout/profile.jsx";
import Setting from "./Dashboardlayout/Setting.jsx";


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/product" element={<Product />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfoud />} />

        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />


        </Route>
      </Routes>
    </div>
  );
};
export default App;

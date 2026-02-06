import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import MainLayout from "./layouts/Main";
import DashboardLayout from "./layouts/Dashboard";
import Hero from "./Pages/Main/Hero";
import Product from "./Pages/Main/Product";
import Features from "./Pages/Main/Features";
import Testimonial from "./Pages/Main/Testimonial";
import Contact from "./Pages/Main/Contact";
import Login from "./Pages/Main/Login";
import Signup from "./Pages/Main/Signup";
import Notfoud from "./components/Notfoud";
import Dashboard from "./Pages/Dashboardpages/Dashboard";
import Users from "./Pages/Dashboardpages/Users";
import User from "./Pages/Dashboardpages/User";
import Profile from "./Pages/Dashboardpages/profile";
import Setting from "./Pages/Dashboardpages/Setting";

const App = () => {
  return (
    <UserProvider>
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
          <Route path="users/:id" element={<User />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default App;

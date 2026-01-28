import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-black/90 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20 relative">
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
            My<span className="text-gray-400">Logo</span>
          </h1>
          </Link>

          {/* Menu */}
          <ul className="top-16   gap-5 py-6 flex  ">
            <Link to="Product">
           
            <li className="hover:text-gray-400 transition cursor-pointer">
              Product
            </li>
             </Link>
             <Link to="Features">
            <li className="hover:text-gray-400 transition cursor-pointer">
              Features  
            </li>
            </Link>
            <li className="hover:text-gray-400 transition cursor-pointer">
              Testimonial
            </li>
            <li className="hover:text-gray-400 transition cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="flex gap-3 md:ml-6">
            <button className="px-4 py-1.5 border border-gray-500 rounded-md hover:bg-white hover:text-black cursor-pointer transition">
              Login
            </button>
            <button className="px-4 py-1.5 text-white border border-gray-500 rounded-md hover:bg-gray-200 transition hover:text-black cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

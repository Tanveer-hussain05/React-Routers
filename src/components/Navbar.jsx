import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass shadow-lg bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-white/10 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-xl font-bold bg-linear-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              MyApp
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/product" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">
              Product
            </Link>
            <Link to="/features" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">
              Features
            </Link>
            <Link to="/testimonial" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 bg-linear-to-br from-cyan-400 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/product" className="text-gray-300 hover:text-cyan-400 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Product
              </Link>
              <Link to="/features" className="text-gray-300 hover:text-cyan-400 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link to="/testimonial" className="text-gray-300 hover:text-cyan-400 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex space-x-4 pt-4 border-t border-white/10">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="px-4 py-2 text-gray-300 hover:text-cyan-400 font-medium">
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <button className="px-6 py-2 bg-linear-to-br from-cyan-400 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-200">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

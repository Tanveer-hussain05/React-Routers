import React from "react";
import { Link } from "react-router-dom";

const Notfoud = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      
      {/* Big 404 */}
      <h1 className="text-[8rem] font-extrabold text-gray-100 drop-shadow-lg">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Go back button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition-all"
      >
        Go Back Home
      </Link>
      
    </div>
  );
};

export default Notfoud;

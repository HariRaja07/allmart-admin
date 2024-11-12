import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AllMart Admin</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="/products" className="text-white hover:text-yellow-300">
            Products
          </Link>
          <Link to="/categories" className="text-white hover:text-yellow-300">
            Categories
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

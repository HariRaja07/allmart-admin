import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0f5286] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AllMart Admin</h1>
        <div className="flex flex-row space-x-4">
          <Link to="/" className="flex items-center rounded bg-[#3b8ccb] px-2 py-1 font-semibold text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="/products" className="flex items-center rounded bg-[#3b8ccb] px-2 py-1 font-semibold text-white hover:text-yellow-300">
            Products
          </Link>
          <Link to="/categories" className="flex items-center rounded bg-[#3b8ccb] px-2 py-1 font-semibold text-white hover:text-yellow-300">
            Categories
          </Link>
          <Link to="/brands" className="flex items-center rounded bg-[#3b8ccb] px-2 py-1 font-semibold text-white hover:text-yellow-300">
            Brand
          </Link>
          <Link to="/homeCategory" className="flex items-center rounded bg-[#3b8ccb] px-2 py-1 font-semibold text-white hover:text-yellow-300">
            Home Category
          </Link>
          <Link to="/deal-page" className="flex items-center rounded bg-[#3b8ccb] px-2 py-1 font-semibold text-white hover:text-yellow-300">
            Deals Page
          </Link>
          <Link to="/offer-page" className="flex items-center rounded bg-[#3b8ccb] px-2 py-1 font-semibold text-white hover:text-yellow-300">
            Offer Page
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

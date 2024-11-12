import React from "react";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-red-500">
        Welcome to AllMart Admin Panel
      </h1>
      <p className="mt-4 text-gray-700">
        Manage your products and categories seamlessly.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-blue-500">Features:</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Product Management</li>
          <li>Category Management</li>
          <li>Easy-to-use Admin Dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

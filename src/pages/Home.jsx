import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

import productService from "../services/productService";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productService.getAllProducts();
      setProducts(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };
  return (
    <div className="p-6 bg-[#F5F5F5] min-h-screen	">
      <h1 className="text-4xl font-bold ">
        DASHBOARD
      </h1>
      <div className="flex flex-row p-4 justify-between">
        <div className="flex flex-row bg-white space-x-2 items-center p-4 w-96 shadow-md rounded">
          <FaDollarSign className="flex w-10 h-10 bg-[#c5e4fc] rounded-full p-2 items-center"/>
          <div className="flex flex-col">
          <p className="text-lg font-semibold">Total Sales</p>
          <p className="text-base">$12546879.20</p>
          </div>
        </div>

        <div className="flex flex-row bg-white space-x-2 items-center p-4 w-96 shadow-md rounded">
          <FaTruck className="flex w-10 h-10 bg-[#bbfae9] rounded-full p-2 items-center"/>
          <div className="flex flex-col">
          <p className="text-lg font-semibold">Total Orders</p>
          <p className="text-base">4586487</p>
          </div>
        </div>

        <div className="flex flex-row bg-white space-x-2 items-center p-4 w-96 shadow-md rounded">
          
          <p className="flex w-10 h-10 text-xl font-bold bg-[#f7c1c3] rounded-full p-2 text-center items-center justify-center">P</p>
          <div className="flex flex-col">
          <p className="text-lg font-semibold">Total Products</p>
          <p className="text-base">{products.length}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Stock List</h1>
        <Link 
          to="/products" 
          className="font-semibold text-base text-[#e81e25] hover:text-[#0f5286] no-underline hover:underline"
        >
          View and Manage All Products
        </Link>
        </div>
  
  <div className="overflow-x-auto shadow-md rounded-lg">
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="px-4 py-3 text-left">Image</th>
          <th className="px-4 py-3 text-left">Name</th>
          <th className="px-4 py-3 text-left">Description</th>
          <th className="px-4 py-3 text-left">Category</th>
          <th className="px-4 py-3 text-left">Brand</th>
          <th className="px-4 py-3 text-left">Stock</th>
          <th className="px-4 py-3 text-left">Selling Price</th>
          <th className="px-4 py-3 text-left">Cost Price</th>
        </tr>
      </thead>
      <tbody>
        {products.slice(0,6).map((product) => (
          <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-4 py-3 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-full mx-auto"
              />
            </td>
            <td className="px-4 py-3">{product.name}</td>
            <td className="px-4 py-3">{product.desc}</td>
            <td className="px-4 py-3">{product.category?.name || "N/A"}</td>
            <td className="px-4 py-3">{product.brand?.name || "N/A"}</td>
            <td className="px-4 py-3">{product.stock}</td>
            <td className="px-4 py-3 text-green-600 font-semibold">
              ${product.sellingprice.toFixed(2)}
            </td>
            <td className="px-4 py-3 text-red-600 font-semibold">
              ${product.costPrice.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import productService from "../services/productService";

const ProductList = () => {
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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await productService.deleteProduct(id);
        setProducts(products.filter((product) => product._id !== id));
      } catch (error) {
        console.error("Failed to delete product", error);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Selling Price</th>
            <th className="border px-4 py-2">Cost Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.desc}</td>
              <td className="border px-4 py-2">
                {product.category?.name || "N/A"}
              </td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">
                ${product.sellingprice.toFixed(2)}
              </td>
              <td className="border px-4 py-2">
                ${product.costPrice.toFixed(2)}
              </td>
              <td className="border px-4 py-2">
                {/* <button
                  className="text-blue-500 mr-2"
                  onClick={() => alert("Edit functionality to be implemented")}
                >
                  Edit
                </button> */}
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

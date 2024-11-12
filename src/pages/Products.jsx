import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
// import productService from "../services/productService";

const Products = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductForm onSave={handleSave} />
      <ProductList />
    </div>
  );
};

export default Products;

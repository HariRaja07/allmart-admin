import React, { useState, useEffect } from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";
import categoryService from "../services/CategoryService";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await categoryService.getAllCategories();
    setCategories(response.data.data.categories);
    // console.log(response.data.data.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <CategoryForm onSave={fetchCategories} />
      <CategoryList categories={categories} onRefresh={fetchCategories} />
    </div>
  );
};

export default Categories;

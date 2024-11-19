import React, { useState, useEffect } from "react";
import homeCategoryService from "../services/homeCategoryService";
import categoryService from "../services/categoryService";
import { handleFileUpload } from "../hooks/handleFileUpload";

const HomeCategoryForm = ({ onSave }) => {
  const [imageFile, setImageFile] = useState(undefined);
  const [homeCategory, setHomeCategory] = useState({
    image: null,
    category: "",
  });

  console.log();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getAllCategories();
        setCategories(response.data.data.categories);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setHomeCategory({ ...homeCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFile) {
      const downloadUrl = await handleFileUpload(imageFile);
      homeCategory.image = downloadUrl;
    }

    try {
      await homeCategoryService.createHomeCategory(homeCategory);
      setHomeCategory({
        image: null,
        category: "",
      });
      onSave();
    } catch (error) {
      console.error("Failed to create HomeCategory", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Home Category Image</label>
        <input
          type="file"
          name="image"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full p-2 border rounded"
          accept="image/*"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          value={homeCategory.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add HomeCategory
      </button>
    </form>
  );
};

export default HomeCategoryForm;

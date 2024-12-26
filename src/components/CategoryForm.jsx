import React, { useState } from "react";
import categoryService from "../services/CategoryService";
import { handleFileUpload } from "../hooks/handleFileUpload";

const CategoryForm = ({ onSave }) => {
  const [imageFile, setImageFile] = useState(undefined);
  const [category, setCategory] = useState({
    image: null,
    name: "",
    description: "",
  });

  // console.log(category);

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile) {
      const downloadUrl = await handleFileUpload(imageFile);
      category.image = downloadUrl;
    }
    await categoryService.createCategory(category);
    setCategory({image: null, name: "", description: "" });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Category Image</label>
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
        <label className="block text-gray-700">Category Name</label>
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={category.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;

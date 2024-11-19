import React, { useState } from "react";
import brandService from "../services/brandService";

const BrandForm = ({ onSave }) => {
  const [brand, setBrand] = useState({
    name: "",
    description: "",
  });

  // console.log(category);

  const handleChange = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await brandService.createBrand(brand);
    setBrand({ name: "", description: "" });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Brand Name</label>
        <input
          type="text"
          name="name"
          value={brand.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={brand.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Brand
      </button>
    </form>
  );
};

export default BrandForm;

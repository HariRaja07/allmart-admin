import React, { useState, useEffect } from "react";
import DealService from "../services/DealService";
import productService from "../services/ProductService";

const DealsForm = ({ onSave }) => {
  const [deals, setDeals] = useState({
    title: "",
    description: "",
    discountPercentage: 0,
    startDate: "",
    endDate: "",
    product: "",
  });

  console.log(deals);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const response = await productService.getAllProducts();
          setProducts(response.data.data);
        } catch (error) {
          console.error("Failed to fetch categories", error);
        }
      };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setDeals({ ...deals, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await DealService.createDeals(deals);
      setDeals({
        title: "",
        description: "",
        discountPercentage: 0,
        startDate: "",
        endDate: "",
        product: "",
      });
      onSave();
    } catch (error) {
      console.error("Failed to create deal", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Deal Title</label>
        <input
          type="text"
          name="title"
          value={deals.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={deals.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Discount Percentage</label>
        <input
          type="number"
          name="discountPercentage"
          value={deals.discountPercentage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={deals.startDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">End Date</label>
        <input
          name="endDate"
          type="date"
          value={deals.endDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Product</label>
        <select
          name="product"
          value={deals.product}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Product</option>
          {products.map((pd) => (
            <option key={pd._id} value={pd._id}>
              {pd.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Discount
      </button>
    </form>
  );
};

export default DealsForm;

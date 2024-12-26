import React, { useState, useEffect } from "react";
import offerService from "../services/offerService";
import productService from "../services/productService";
import categoryService from "../services/CategoryService";
import brandService from "../services/brandService";

const OfferForm = ({ onSave }) => {
  const [offer, setOffer] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    product: "",
    discount: "",
  });

  console.log(offer);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const response = await productService.getAllProducts();
          setProducts(response.data.data);
        } catch (error) {
          console.error("Failed to fetch categories", error);
        }
      };

    const fetchCategories = async () => {
      try {
        const response = await categoryService.getAllCategories();
        setCategories(response.data.data.categories);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    const fetchBrands = async () => {
      try {
        const BRresponse = await brandService.getAllBrands();
        setBrands(BRresponse.data.data.brands);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchProducts();
    fetchBrands();
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await offerService.createOffer(offer);
      setOffer({
        name: "",
        description: "",
        category: "",
        brand: "",
        product: "",
        discount: "",
      });
      onSave();
    } catch (error) {
      console.error("Failed to create offer", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Offer Name</label>
        <input
          type="text"
          name="name"
          value={offer.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={offer.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Discount Percentage</label>
        <input
          type="number"
          name="discount"
          value={offer.discount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Product</label>
        <select
          name="product"
          value={offer.product}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Product</option>
          {products.map((pd) => (
            <option key={pd._id} value={pd._id}>
              {pd.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          value={offer.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          disabled
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Brand</label>
        <select
          name="brand"
          value={offer.brand}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          disabled
        >
          <option value="">Select Brand</option>
          {brands.map((br) => (
            <option key={br._id} value={br._id}>
              {br.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Offer
      </button>
    </form>
  );
};

export default OfferForm;

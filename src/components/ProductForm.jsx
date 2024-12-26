import React, { useState, useEffect } from "react";
import productService from "../services/productService";
import categoryService from "../services/CategoryService";
import brandService from "../services/brandService";
import { handleFileUpload } from "../hooks/handleFileUpload";

const ProductForm = ({ onSave }) => {
  const [imageFile, setImageFile] = useState(undefined);
  const [qrFile, setQrFile] = useState(undefined);
  const [product, setProduct] = useState({
    image: null,
    qrcode: null,
    name: "",
    desc: "",
    category: "",
    brand: "",
    stock: "",
    sellingprice: "",
    costPrice: "",
  });

  console.log(product);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
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
    fetchBrands();
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFile) {
      const downloadUrl = await handleFileUpload(imageFile);
      product.image = downloadUrl;
    }

    if (qrFile) {
      const downloadUrl = await handleFileUpload(qrFile);
      product.qrcode = downloadUrl;
    }

    try {
      await productService.createProduct(product);
      setProduct({
        image: null,
        qrcode: null,
        name: "",
        desc: "",
        category: "",
        brand: "",
        stock: "",
        sellingprice: "",
        costPrice: "",
      });
      onSave();
    } catch (error) {
      console.error("Failed to create product", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Product Image</label>
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
        <label className="block text-gray-700">QR Code</label>
        <input
          type="file"
          name="qrcode"
          onChange={(e) => setQrFile(e.target.files[0])}
          className="w-full p-2 border rounded"
          accept="image/*"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="desc"
          value={product.desc}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          value={product.category}
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
      <div className="mb-4">
        <label className="block text-gray-700">Brand</label>
        <select
          name="brand"
          value={product.brand}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {brands.map((br) => (
            <option key={br._id} value={br._id}>
              {br.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Selling Price</label>
        <input
          type="number"
          name="sellingprice"
          value={product.sellingprice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Cost Price</label>
        <input
          type="number"
          name="costPrice"
          value={product.costPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;

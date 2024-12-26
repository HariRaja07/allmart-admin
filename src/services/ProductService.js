// src/services/productService.js
import axios from "axios";
const backendUrl = "https://allmart-ecom-server.onrender.com";
const API_URL = `${backendUrl}/api/v1/product/`;

const getAllProducts = () => axios.get(API_URL);
const createProduct = (product) => axios.post(API_URL, product);
const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

export default { getAllProducts, createProduct, deleteProduct };

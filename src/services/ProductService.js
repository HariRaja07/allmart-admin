// src/services/productService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/product/";

const getAllProducts = () => axios.get(API_URL);
const createProduct = (product) => axios.post(API_URL, product);
const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

export default { getAllProducts, createProduct, deleteProduct };

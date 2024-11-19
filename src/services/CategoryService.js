// src/services/categoryService.js
import axios from "axios";
const backendUrl = "https://all-mart-e-com-server.onrender.com";
const API_URL = `${backendUrl}/api/v1/categories`;

const getAllCategories = () => axios.get(API_URL);
const createCategory = (category) => axios.post(API_URL, category);
const deleteCategory = (id) => axios.delete(`${API_URL}/${id}`);

export default { getAllCategories, createCategory, deleteCategory };

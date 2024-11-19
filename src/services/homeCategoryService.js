// src/services/categoryService.js
import axios from "axios";
const backendUrl = "https://all-mart-e-com-server.onrender.com";
const API_URL = `${backendUrl}/api/v1/homeCategory`;

const getAllHomeCategories = () => axios.get(API_URL);
const createHomeCategory = (homeCategory) => axios.post(API_URL, homeCategory);
const deleteHomeCategory = (id) => axios.delete(`${API_URL}/${id}`);

export default { getAllHomeCategories, createHomeCategory, deleteHomeCategory };

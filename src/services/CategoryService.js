// src/services/categoryService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/categories/";

const getAllCategories = () => axios.get(API_URL);
const createCategory = (category) => axios.post(API_URL, category);

export default { getAllCategories, createCategory };

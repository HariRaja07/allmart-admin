// src/services/categoryService.js
import axios from "axios";
const backendUrl = "https://all-mart-e-com-server.onrender.com";
const API_URL = `${backendUrl}/api/v1/brand`;

const getAllBrands = () => axios.get(API_URL);
const createBrand = (brand) => axios.post(API_URL, brand);
const deleteBrand = (id) => axios.delete(`${API_URL}/${id}`);

export default { getAllBrands, createBrand, deleteBrand };

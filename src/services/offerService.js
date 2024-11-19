// src/services/categoryService.js
import axios from "axios";
const backendUrl = "https://all-mart-e-com-server.onrender.com";
const API_URL = `${backendUrl}/api/v1/offer`;

const getAllOffers = () => axios.get(API_URL);
const createOffer = (category) => axios.post(API_URL, category);
const deleteOffer = (id) => axios.delete(`${API_URL}/${id}`);

export default { getAllOffers, createOffer, deleteOffer };

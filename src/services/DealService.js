import React, { useState, useEffect } from 'react';
import axios from 'axios';
const backendUrl = "https://allmart-ecom-server.onrender.com";
const API_URL = `${backendUrl}/api/v1/deal`;

const getAllDeals = () => axios.get(API_URL);
const createDeals = (deal) => axios.post(API_URL, deal);
const deleteDeals = (id) => axios.delete(`${API_URL}/${id}`);
export default {getAllDeals, createDeals, deleteDeals};
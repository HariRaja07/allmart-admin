import React, { useState, useEffect } from "react";
import BrandForm from "../components/BrandForm";
import BrandList from "../components/BrandList";
import brandService from "../services/brandService";

const Brand = () => {
  const [brands, setBrand] = useState([]);

  const fetchBrand = async () => {
    const response = await brandService.getAllBrands();
    setBrand(response.data.data.brands);
    // console.log(response.data.data.categories);
  };

  useEffect(() => {
    fetchBrand();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Brands</h1>
      <BrandForm onSave={fetchBrand} />
      <BrandList brands={brands} onRefresh={fetchBrand} />
    </div>
  );
};

export default Brand;

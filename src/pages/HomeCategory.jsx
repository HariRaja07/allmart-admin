import React, { useState, useEffect } from "react";
import HomeCategoryForm from "../components/HomeCategoryForm";
import HomeCategoryList from "../components/HomeCategoryList";
import homeCategoryService from "../services/homeCategoryService";

const HomeCategory = () => {
  const [homeCategories, setHomeCategory] = useState([]);

  const fetchHomeCategory = async () => {
    const response = await homeCategoryService.getAllHomeCategories();
    setHomeCategory(response.data.data.homeCategories);
    // console.log(response.data.data.categories);
  };

  useEffect(() => {
    fetchHomeCategory();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Home Category</h1>
      <HomeCategoryForm onSave={fetchHomeCategory} />
      <HomeCategoryList homeCategories={homeCategories} onRefresh={fetchHomeCategory} />
    </div>
  );
};

export default HomeCategory;

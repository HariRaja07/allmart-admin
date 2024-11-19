import React, { useState, useEffect } from "react";
import DealsForm from "../components/DealsForm";
import DealsList from "../components/DealsList";
import DealService from "../services/DealService";

const DealsPage = () => {
  const [activeDeals, setActiveDeals] = useState([]);

  const fetchDeals = async () => {
    const response = await DealService.getAllDeals();
    setActiveDeals(response.data.data.activeDeals);
    // console.log(response.data.data.categories);
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Deals</h1>
      <DealsForm onSave={fetchDeals} />
      <DealsList activeDeals={activeDeals} onRefresh={fetchDeals} />
    </div>
  );
};

export default DealsPage;

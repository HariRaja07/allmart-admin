import React, { useState, useEffect } from "react";
import OfferForm from "../components/OfferForm";
import OfferList from "../components/OfferList";
import offerService from "../services/offerService";

const OfferPage = () => {
  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const response = await offerService.getAllOffers();
    setOffers(response.data.data.offers);
    // console.log(response.data.data.categories);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Offers</h1>
      <OfferForm onSave={fetchOffers} />
      <OfferList offers={offers} onRefresh={fetchOffers} />
    </div>
  );
};

export default OfferPage;

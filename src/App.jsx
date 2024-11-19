// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Brand from "./pages/Brand";
import HomeCategory from "./pages/HomeCategory";
import AdminDealsPage from "./pages/AdminDealsPage";
import OfferPage from "./pages/OfferPage";
import DealsPage from "./pages/DealsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/homeCategory" element={<HomeCategory />} />
          <Route path="/admin-deals" element={<AdminDealsPage />} />
          <Route path="/offer-page" element={<OfferPage />} />
          <Route path="/deal-page" element={<DealsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

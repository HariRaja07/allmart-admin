import React, { useState, useEffect } from 'react';
import axios from 'axios';
const backendUrl = "http://localhost:5000";
const API_URL = `${backendUrl}/api/v1/deal`;

const AdminDealsPage = () => {
  const [deals, setDeals] = useState([]);
  const [deal, setDeal] = useState(null);  // Store current deal being edited
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    discountPercentage: 0,
    startDate: '',
    endDate: '',
    product: '',
  });

  // Fetch all deals when the page loads
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(API_URL);
        setDeals(response.data.data.activeDeals);
      } catch (error) {
        console.error('Failed to fetch deals', error);
      }
    };

    fetchDeals();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (Create or Edit deal)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (deal) {
        // Edit deal
        await axios.put(`${API_URL}/${deal._id}`, formData);
      } else {
        // Create deal
        await axios.post(`${API_URL}`, formData);
      }

      // Refresh the deals list after saving
      const response = await axios.get(`${API_URL}`);
      setDeals(response.data.data);
      setFormData({ title: '', description: '', discountPercentage: 0, startDate: '', endDate: '', product: '',});
      setDeal(null);
    } catch (error) {
      console.error('Error saving deal', error);
    }
  };

  // Handle deactivate deal
  const handleDeactivate = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/deactivate`);
      setDeals(deals.filter((deal) => deal._id !== id));
    } catch (error) {
      console.error('Error deactivating deal', error);
    }
  };

  return (
    <div>
      <h1>Manage Deals</h1>

      {/* Deal Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Deal Title"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Deal Description"
          required
        />
        <input
          type="number"
          name="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          placeholder="Discount Percentage"
          required
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
          placeholder="Product ID (Optional)"
        />
        
        <button type="submit">{deal ? 'Update Deal' : 'Create Deal'}</button>
      </form>

      {/* List of Deals */}
      <h2>Active Deals</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Discount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal._id}>
              <td>{deal.title}</td>
              <td>{deal.discountPercentage}%</td>
              <td>{new Date(deal.startDate).toLocaleDateString()}</td>
              <td>{new Date(deal.endDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => setDeal(deal)}>Edit</button>
                <button onClick={() => handleDeactivate(deal._id)}>Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDealsPage;

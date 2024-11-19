import React from "react";
import DealService from "../services/DealService";

const DealsList = ({ activeDeals, onRefresh }) => {

    const handleDelete = async (id) => {
      if (window.confirm("Are you sure you want to delete this deal?")) {
        try {
          await DealService.deleteDeals(id);
          alert("Deal deleted successfully!");
          onRefresh(); // Refresh the list after successful deletion
        } catch (error) {
          console.error("Error deleting deal:", error);
          alert("Failed to delete deal. Please try again.");
        }
      }
    };

  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-semibold mb-4">Deals List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Discount</th> {/* Add Actions column */}
            <th className="px-4 py-2 border">StartDate</th>
            <th className="px-4 py-2 border">End Date</th>
            <th className="px-4 py-2 border">Product</th>
          </tr>
        </thead>
        <tbody>
        {activeDeals.map((deal) => (
    <tr key={deal._id}>
      <td className="border px-4 py-2">{deal.title}</td>
      <td className="border px-4 py-2">{deal.description}</td>
      <td className="border px-4 py-2">{deal.discountPercentage}</td>
      <td className="border px-4 py-2">{deal.startDate}</td>
      <td className="border px-4 py-2">{deal.endDate}</td>
      <td className="border px-4 py-2">{deal.product?.name}</td>
      <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(deal._id)} // Call handleDelete when clicked
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
    </tr>
  ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealsList;

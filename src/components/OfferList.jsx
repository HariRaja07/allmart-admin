import React from "react";
import offerService from "../services/offerService";

const OfferList = ({ offers, onRefresh }) => {

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await offerService.deleteOffer(id);
        alert("Offer deleted successfully!");
        onRefresh(); // Refresh the list after successful deletion
      } catch (error) {
        console.error("Error deleting offer:", error);
        alert("Failed to delete offer. Please try again.");
      }
    }
  };
  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-semibold mb-4">Offer List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Discount</th>
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer._id}>
              <td className="border px-4 py-2">{offer.name}</td>
              <td className="border px-4 py-2">{offer.description}</td>
              <td className="border px-4 py-2">{offer.discount}</td>
              {/*<td className="border px-4 py-2">{offer.category?.name}</td>
              <td className="border px-4 py-2">{offer.brand?.name}</td>*/}
              <td className="border px-4 py-2">{offer.product?.name}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(offer._id)} // Call handleDelete when clicked
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

export default OfferList;

import React from "react";
import brandService from "../services/brandService";

const BrandList = ({ brands, onRefresh }) => {

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this brand?")) {
      try {
        await brandService.deleteBrand(id);
        alert("Brand deleted successfully!");
        onRefresh(); // Refresh the list after successful deletion
      } catch (error) {
        console.error("Error deleting brand:", error);
        alert("Failed to delete brand. Please try again.");
      }
    }
  };


  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-semibold mb-4">Brand List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td className="border px-4 py-2">{brand.name}</td>
              <td className="border px-4 py-2">{brand.description}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(brand._id)} // Call handleDelete when clicked
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

export default BrandList;

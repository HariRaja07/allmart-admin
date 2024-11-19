import React from "react";
import homeCategoryService from "../services/homeCategoryService";

const HomeCategoryList = ({ homeCategories, onRefresh }) => {
  
  // Function to handle delete action
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await homeCategoryService.deleteHomeCategory(id);
        alert("Category deleted successfully!");
        onRefresh(); // Refresh the list after successful deletion
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Failed to delete category. Please try again.");
      }
    }
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-semibold mb-4">Home Category List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Actions</th> {/* Add Actions column */}
          </tr>
        </thead>
        <tbody>
          {homeCategories.map((homeCategory) => (
            <tr key={homeCategory._id}>
              <td className="border px-4 py-2">{homeCategory.category?.name}</td>
              <td className="border px-4 py-2">
                <img
                  src={homeCategory.image}
                  alt={homeCategory.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(homeCategory._id)} // Call handleDelete when clicked
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

export default HomeCategoryList;

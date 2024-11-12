import React from "react";

const CategoryList = ({ categories, onRefresh }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-semibold mb-4">Category List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td className="border px-4 py-2">{category.name}</td>
              <td className="border px-4 py-2">{category.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;

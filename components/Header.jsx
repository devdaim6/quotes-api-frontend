import React from "react";

const Header = ({ categories, selectedCategory, onCategoryChange }) => {
  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <header className="py-4 bg-blue-500">
      <div className="flex items-center justify-between max-w-3xl px-4 mx-auto">
        <h1 className="text-2xl font-semibold text-white">Quotes App</h1>
        <div>
          <select
            value={selectedCategory}
            onChange={handleChange}
            className="px-3 py-1 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          >
            <option value="" selected className="text-black">Select Category</option>
            {categories.map((category) => (
              <option className="text-black" key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
    // You can route to search results or filter products
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        🛒 ASTU SHOP
      </Link>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full sm:w-1/2">
        <div className="relative flex items-center w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <button
            className="ml-2 bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.85-6.15a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Navigation Links and Category Dropdown */}

      <div className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base justify-center items-center mt-4">
        <select
          className="text-sm text-gray-700 hover:text-blue-600 focus:outline-none"
          onChange={(e) => window.location.href = `/categories/${e.target.value}`}
        >
          <option value="">Select Category</option>
          <option value="furniture">Furniture</option>
          <option value="electronics">Electronics</option>
          <option value="accessories">Accessories</option>
        </select>
        <Link to="/products" className="text-gray-700 hover:text-blue-600">
          Products
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">
          Register
        </Link>
        <Link to="/cart" className="text-gray-700 hover:text-blue-600">
          Cart 🛍️
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

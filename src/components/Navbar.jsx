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
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      {/* Navigation Links */}
      <div className="flex gap-4 text-sm sm:text-base justify-center sm:justify-end">
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

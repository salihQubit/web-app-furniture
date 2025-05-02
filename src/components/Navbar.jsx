import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        🛒 ShopX
      </Link>

      <div className="flex gap-4 text-sm sm:text-base">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Products
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Register
        </Link>
        <Link
          to="/cart"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Cart 🛍️
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

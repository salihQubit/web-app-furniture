import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Shop</h1>
      <img
        src="https://via.placeholder.com/800x300"
        alt="Banner"
        className="w-full max-w-4xl rounded-lg shadow-md mb-6"
      />
      <Link
        to="/products"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default Home;

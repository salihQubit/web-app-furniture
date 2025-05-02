import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const stockStatus =
    product.stock === 0
      ? "Out of Stock"
      : product.stock < 5
      ? "Low Stock"
      : "In Stock";

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-blue-600 font-medium">${product.price}</p>
      {stockStatus === "Low Stock" && (
        <p className="text-sm text-red-600">Low Stock</p>
      )}
      <Link
        to={`/products/${product.slug}`}
        className="inline-block mt-2 text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;

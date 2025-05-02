import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <div className="p-6">Product not found.</div>;

  const stockStatus =
    product.stock === 0
      ? "Out of Stock"
      : product.stock < 5
      ? "Low Stock"
      : "In Stock";

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-500 mb-1">{product.category}</p>
      <p className="text-blue-700 font-semibold text-xl mb-1">
        ${product.price}
      </p>
      <p className="text-red-600 font-medium mb-4">{stockStatus}</p>
      <Link to="/products" className="text-blue-500 hover:underline">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
        ← Back to Products
        </button>
      </Link>
    </div>
  );
}

export default ProductDetails;

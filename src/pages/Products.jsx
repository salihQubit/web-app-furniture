import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      name: "Modern Chair",
      price: 120.99,
      images: ["1.jpg", "2.jpg"],
    },
    {
      name: "Stylish Sofa",
      price: 450.0,
      images: ["3.jpg", "4.jpg"],
    },
    {
      name: "Wooden Table",
      price: 300.5,
      images: ["5.jpg", "6.jpg"],
    },
    {
      name: "Elegant Lamp",
      price: 80.0,
      images: ["8.jpg", "1.jpg"],
    },
    {
      name: "Cozy Bed",
      price: 500.0,
      images: ["2.jpg", "3.jpg"],
    },
    {
      name: "Office Desk",
      price: 250.0,
      images: ["4.jpg", "5.jpg"],
    },
    {
      name: "Smartphone",
      price: 999.99,
      images: ["react.svg", "sneaker.svg"],
    },
    {
      name: "Laptop",
      price: 1299.99,
      images: ["shoes.svg", "react.svg"],
    },
    {
      name: "Smartwatch",
      price: 199.99,
      images: ["sneaker.svg", "shoes.svg"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-7xl">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="w-full h-48 overflow-hidden block">
              <img
                src={`/src/assets/${product.images[0]}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className="flex gap-2 mt-2">
                {product.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={`/src/assets/${image}`}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-12 h-12 object-cover border rounded-md"
                  />
                ))}
              </div>
              <button
                onClick={() => window.location.href = `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

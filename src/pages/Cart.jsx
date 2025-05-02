import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value) || 1)
                }
                className="w-16 mt-1 border rounded px-2 py-1"
              />
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition duration-300 ease-in-out"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

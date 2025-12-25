import useCartStore from "../store/useCartStore";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } =
    useCartStore();

  if (!cart.length) return <h2>Cart is Empty</h2>;

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ddd", padding: 10, margin: 10 }}>
          <h3>{item.title}</h3>
          <p>₹{item.price} x {item.qty}</p>

          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => addToCart(item)}>+</button>

          <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 10 }}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total.toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

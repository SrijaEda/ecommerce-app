import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 15, background: "#eee", marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>
      <Link to="/cart" style={{ marginRight: 20 }}>Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}

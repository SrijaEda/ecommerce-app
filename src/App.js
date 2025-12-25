import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import useThemeStore from "./store/useThemeStore";

export default function App() {
  const { dark, toggleTheme } = useThemeStore();

  return (
    <BrowserRouter>
      <div
        style={{
          background: dark ? "#222" : "#fff",
          color: dark ? "#fff" : "#000",
          minHeight: "100vh",
          transition: "0.3s",
        }}
      >
        <Navbar />

        {/* 🌗 THEME BUTTON */}
        <button
          onClick={toggleTheme}
          style={{ margin: 10, padding: 10, cursor: "pointer" }}
        >
          {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  // 🔍 SEARCH
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // 💰 SORT
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low-high") return a.price - b.price;
    if (sort === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <h2>Products</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "6px", marginRight: "10px" }}
      />

      {/* 💰 Sort Dropdown */}
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By Price</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>

      <hr style={{ margin: "20px 0" }} />

      {/* 🛍️ Products List */}
      {!products.length && <p>Loading...</p>}

      {sorted.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
          <h3>{p.title}</h3>
          <p>₹{p.price}</p>
          <Link to={`/product/${p.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

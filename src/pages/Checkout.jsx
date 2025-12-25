import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({ name: "", address: "", card: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.card) {
      alert("⚠ Please fill all fields");
      return;
    }

    if (form.card.length < 12) {
      alert("⚠ Card number must be at least 12 digits");
      return;
    }

    alert("🎉 Order placed successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      /><br/><br/>

      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
      /><br/><br/>

      <input
        name="card"
        placeholder="Card Number"
        onChange={handleChange}
        required
      /><br/><br/>

      <button>Submit Order</button>
    </form>
  );
}

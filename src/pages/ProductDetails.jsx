import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import { useEffect, useState } from "react";
import useCartStore from "../store/useCartStore";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

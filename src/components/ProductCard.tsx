import { Link } from "react-router-dom";
import type { Product } from "../data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" to={`/range/${product.id}`}>
      <div className="shot">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="meta">
        <span className="sku">{product.sku}</span>
        <h3>{product.name}</h3>
        <p>{product.tag}</p>
      </div>
    </Link>
  );
}

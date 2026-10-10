import { Link, useParams } from "react-router-dom";
import { getProduct, products, toeLabel } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { InquiryForm } from "../components/InquiryForm";

export function ProductPage() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;

  if (!product) {
    return (
      <section className="section wrap">
        <h1>That last is not on the rack.</h1>
        <p className="lede stack-gap">Browse the current range instead.</p>
        <div className="hero-actions">
          <Link className="btn btn-orange" to="/range">
            Back to range
          </Link>
        </div>
      </section>
    );
  }

  const related = products.filter((p) => p.style === product.style && p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="wrap pdp">
        <div className="pdp-shot">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <p className="kicker">
            {product.sku} · {product.standard}
          </p>
          <h1>{product.name}</h1>
          <p className="lede stack-gap">
            {product.tag}. {product.cut}. {toeLabel[product.toe]}. {product.sole}. Sizes {product.sizes}.
          </p>
          <div className="tag-row">
            {product.marks.map((m) => (
              <span className="tag" key={m}>
                {m}
              </span>
            ))}
          </div>
          <ul className="list-plain">
            {product.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <table className="spec-table">
            <tbody>
              {product.specs.map((s) => (
                <tr key={s.label}>
                  <th>{s.label}</th>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap grid-2">
          <InquiryForm intent="quote" sku={product.sku} />
          <InquiryForm intent="sample" sku={product.sku} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section tight">
          <div className="wrap">
            <div className="section-head">
              <h2>Same family</h2>
            </div>
            <div className="product-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

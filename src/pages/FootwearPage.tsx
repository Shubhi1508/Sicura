import { useMemo, useState } from "react";
import { products, styleLabels, type Style } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { InquiryForm } from "../components/InquiryForm";

const styles: Array<Style | "all"> = ["all", "chelsea", "boot", "lace", "sport", "defence"];
const toes = ["all", "steel", "composite"] as const;

export function FootwearPage() {
  const [style, setStyle] = useState<Style | "all">("all");
  const [toe, setToe] = useState<(typeof toes)[number]>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return products.filter((p) => {
      if (style !== "all" && p.style !== style) return false;
      if (toe !== "all" && p.toe !== toe) return false;
      if (q.trim()) {
        const hay = `${p.name} ${p.sku} ${p.tag} ${p.marks.join(" ")}`.toLowerCase();
        if (!hay.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [style, toe, q]);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Range</p>
          <h1>Safety and military lasts, ready to spec.</h1>
          <p>
            Filter by style and toe cap. Every article can be sampled, private-labelled, or
            ordered as SICURA. Prices on request.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filters">
            {styles.map((s) => (
              <button key={s} className={`chip ${style === s ? "active" : ""}`} onClick={() => setStyle(s)}>
                {styleLabels[s]}
              </button>
            ))}
          </div>
          <div className="filters">
            {toes.map((t) => (
              <button key={t} className={`chip ${toe === t ? "active" : ""}`} onClick={() => setToe(t)}>
                {t === "all" ? "Any toe" : t === "steel" ? "Steel 200 J" : "Composite 200 J"}
              </button>
            ))}
            <input
              className="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search SKU, SRC, HRO…"
              aria-label="Search range"
            />
          </div>
          <div className="product-grid">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {list.length === 0 && <p className="lede stack-gap">No last matches that filter. Try another toe or style.</p>}
        </div>
      </section>

      <section className="section tight">
        <div className="wrap narrow">
          <InquiryForm intent="catalogue" />
        </div>
      </section>
    </>
  );
}

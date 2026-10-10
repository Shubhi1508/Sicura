import { Link } from "react-router-dom";
import { site } from "../data/site";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { InquiryForm } from "../components/InquiryForm";

export function DefencePage() {
  const defence = products.filter((p) => p.style === "defence" || p.style === "boot");

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Police · army · CAPF</p>
          <h1>Boots for people who do not get to sit down.</h1>
          <p>
            First manufacturer in India accredited by BIS for paramilitary boots under IS 17012:2018.
            Combat, duty, and parade lasts — sampled against tender drawings.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap split">
          <div className="frame">
            <img src="/images/defence-boots.png" alt="Paramilitary combat boots" />
          </div>
          <div>
            <p className="kicker">IS 17012:2018</p>
            <h2>Tenders need a last that survives the march.</h2>
            <ul className="list-plain">
              <li>Paramilitary combat boots — BIS accredited</li>
              <li>High-ankle duty and parade variants</li>
              <li>DMS and vulcanized nitrile constructions</li>
              <li>Sampling against drawings and size runs</li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-orange" href={`mailto:${site.email}?subject=Defence / police footwear`}>
                Request a tender pack
              </a>
              <Link className="btn btn-ghost" to="/range">
                Industrial range
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Duty lineup</h2>
          </div>
          <div className="product-grid">
            {defence.slice(0, 6).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap narrow">
          <InquiryForm intent="quote" sku="AGS-PB-01" />
        </div>
      </section>
    </>
  );
}

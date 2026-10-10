import { Link } from "react-router-dom";
import { doors, regions, stats } from "../data/site";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function HomePage() {
  const featured = products.filter((p) =>
    ["chelsea-brown", "sc-2539", "art-241211", "art-241220", "sc-3007", "def-17012"].includes(p.id),
  );

  return (
    <>
      <section className="hero" id="top">
        <video autoPlay muted loop playsInline poster="/ags-hero-poster.jpg">
          <source src="/video/ags-hero-sicura-smoke.webm" type="video/webm" />
          <source src="/video/ags-hero-sicura-smoke.mp4" type="video/mp4" />
        </video>
        <div className="scrim" />
        <div className="wrap">
          <div className="hero-bottom">
            <div className="hero-copy">
              <p className="kicker">AGS Safety · Kanpur, India</p>
              <h1>
                Engineered for protection.
                <br />
                <em>Certified</em> for the field.
              </h1>
              <p>
                SICURA safety and military footwear — for plants, sites, forces, and brands that
                need a last they can repeat. One million pairs a year, under one roof.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-orange" to="/range">
                  See the range
                </Link>
                <Link className="btn btn-ghost" to="/oem">
                  Request a quote
                </Link>
              </div>
            </div>
            <div className="sicura-mark">
              <b>SICURA</b>
              <span>The footwear brand of AGS Safety</span>
            </div>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Start here</p>
              <h2>Whoever you are, the floor is the same.</h2>
            </div>
          </div>
          <div className="grid-4">
            {doors.map((d) => (
              <Link className="door" key={d.to} to={d.to}>
                <p className="kicker">{d.kicker}</p>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Range</p>
              <h2>Lasts that already ship.</h2>
            </div>
            <Link className="btn btn-ghost" to="/range">
              Full range
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="frame tall">
            <img src="/about-factory.jpg" alt="AGS Safety manufacturing facility in Kanpur" />
          </div>
          <div>
            <p className="kicker">The plant</p>
            <h2>200,000 sq ft. R&amp;D to dispatch.</h2>
            <p className="lede">
              PU injection, cemented, DMS, and military lines. In-house lab for slip, impact,
              and puncture. Solar backup on sanctioned load.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-orange" to="/plant">
                Plant &amp; lab
              </Link>
              <Link className="btn btn-ghost" to="/standards">
                Standards
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Where the pairs go</p>
              <h2>Built in Kanpur. Worn where the work is hard.</h2>
            </div>
          </div>
          <div className="regions">
            {regions.map((r) => (
              <div key={r.name}>
                <h3>{r.name}</h3>
                <p>{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

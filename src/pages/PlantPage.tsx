import { constructions, oemSteps } from "../data/site";
import { Link } from "react-router-dom";

export function PlantPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Mandhana, Kanpur</p>
          <h1>Engineered in-house. Tested to standard. Made to last.</h1>
          <p>
            200,000 sq ft of land, more than 100,000 sq ft built. Cutting, stitching, PU
            injection, DMS, lab, and warehouse — with 100% solar backup on sanctioned load.
            Capacity: one million pairs a year.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap split">
          <div className="frame">
            <img src="/about-factory.jpg" alt="AGS Safety factory exterior" />
          </div>
          <div>
            <p className="kicker">Constructions</p>
            <h2>Four ways to attach a sole.</h2>
            <ul className="list-plain">
              {constructions.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}.</strong> {c.body}
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="btn btn-orange" to="/contact">
                Book a plant visit
              </Link>
              <Link className="btn btn-ghost" to="/oem">
                Start an OEM brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>From last to carton</h2>
          </div>
          <div className="steps">
            {oemSteps.map((s) => (
              <article className="step" key={s.n}>
                <b>{s.n}</b>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

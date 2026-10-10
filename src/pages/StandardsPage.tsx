import { certifications } from "../data/site";

export function StandardsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Quality</p>
          <h1>Marks that mean the last was tested.</h1>
          <p>
            Indian ISI, European CE / EN ISO 20345, ASTM options, ISO 9001:2015, and SATRA methods.
            Paramilitary boots carry IS 17012:2018.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="cert-grid">
            {certifications.map((c) => (
              <article className="cert" key={c.code}>
                <div className="code">{c.code}</div>
                <h3>{c.title}</h3>
                <p>{c.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

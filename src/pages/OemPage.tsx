import { useState } from "react";
import { oemSteps } from "../data/site";
import { InquiryForm, type Intent } from "../components/InquiryForm";

export function OemPage() {
  const [intent, setIntent] = useState<Intent>("quote");

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">OEM · plants · distributors</p>
          <h1>From a spec to a sealed carton.</h1>
          <p>
            Private label, SICURA-branded programmes, and plant contracts. Same floor, same lab.
            Tell us the last, the mark, and the destination.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="section-head">
            <h2>How an order runs</h2>
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

      <section className="section">
        <div className="wrap narrow">
          <div className="tabs">
            {(["quote", "sample", "catalogue"] as Intent[]).map((i) => (
              <button key={i} className={`chip ${intent === i ? "active" : ""}`} onClick={() => setIntent(i)}>
                {i === "quote" ? "Quote" : i === "sample" ? "Sample" : "Catalogue"}
              </button>
            ))}
          </div>
          <InquiryForm intent={intent} />
        </div>
      </section>
    </>
  );
}

import { site } from "../data/site";
import { InquiryForm } from "../components/InquiryForm";

export function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Mandhana</p>
          <h1>Come to the floor. Or send the spec tonight.</h1>
          <p>
            Sampling, OEM briefs, plant orders, and defence tenders land with the same desk.
            English. We reply by email and WhatsApp.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap split">
          <div>
            <p className="kicker">Plant</p>
            <h2>The address</h2>
            <p className="lede stack-gap">{site.address}</p>
            <p className="lede stack-gap">{site.hours}</p>
            <p className="lede stack-gap">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <div className="hero-actions">
              <a className="btn btn-orange" href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={site.maps} target="_blank" rel="noreferrer">
                Directions
              </a>
              <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
          <InquiryForm intent="quote" />
        </div>
      </section>
    </>
  );
}

import { events, site, timeline } from "../data/site";

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Since 2003</p>
          <h1>Built for the work that matters.</h1>
          <p>
            {site.company} makes SICURA safety and military footwear in Kanpur’s leather belt.
            Plants, distributors, private-label brands, and forces all buy from the same floor.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap split">
          <div className="frame">
            <img src="/about-sicura-branding.jpg" alt="SICURA branding on a shoe tongue" />
          </div>
          <div>
            <p className="kicker">The house</p>
            <h2>Craft, engineering, and a rural floor.</h2>
            <p className="lede stack-gap">
              The plant sits in a rural belt on purpose — local jobs, in-house training,
              careers that stay in Mandhana. Women work cutting, stitching, finishing, and QC.
              Five of eleven key decision-makers are women.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Timeline</p>
          <h2 className="stack-gap">Twenty-plus years of lasting machines.</h2>
          <div className="timeline stack-gap">
            {timeline.map((t) => (
              <article className="t-item" key={t.year}>
                <strong>{t.year}</strong>
                <h3>{t.title}</h3>
                <p className="lede">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap grid-2">
          <div className="portrait">
            <img src="/images/president.jpg" alt={site.president} />
            <div>
              <p className="kicker">President</p>
              <h2>{site.president}</h2>
              <p className="lede stack-gap">Plants, export clients, and skill training under one watch.</p>
            </div>
          </div>
          <div>
            <p className="kicker">On the road</p>
            <h2>Trade floors</h2>
            <ul className="list-plain">
              {events.map((e) => (
                <li key={e.name}>
                  <strong>{e.name}</strong> — {e.place}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

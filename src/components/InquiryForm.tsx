import { FormEvent, useState } from "react";
import { site } from "../data/site";

export type Intent = "quote" | "sample" | "catalogue";

const copy: Record<Intent, { title: string; submit: string; done: string }> = {
  quote: {
    title: "Request a quote",
    submit: "Send quote request",
    done: "Received. The desk will reply with specs, MOQs, and lead time.",
  },
  sample: {
    title: "Request a sample",
    submit: "Request sample",
    done: "Noted. We will confirm the last and shipping for 1–2 pairs.",
  },
  catalogue: {
    title: "Request the catalogue",
    submit: "Request catalogue",
    done: "We will send a current range pack by email. A public PDF is not online yet.",
  },
};

export function InquiryForm({ intent, sku }: { intent: Intent; sku?: string }) {
  const [sent, setSent] = useState(false);
  const c = copy[intent];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
    window.open(
      `mailto:${site.email}?subject=${encodeURIComponent(`${c.title}${sku ? ` — ${sku}` : ""}`)}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success">
        <strong>{c.done}</strong>
        <p className="lede stack-gap">
          If mail did not open, write to <a href={`mailto:${site.email}`}>{site.email}</a> or
          WhatsApp {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <p className="kicker">{c.title}</p>
      {sku && <input type="hidden" name="sku" value={sku} />}
      <div className="form-grid">
        <label>
          Company
          <input name="company" required autoComplete="organization" />
        </label>
        <label>
          Name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Country
          <input name="country" required autoComplete="country-name" />
        </label>
        {intent !== "catalogue" && (
          <>
            <label>
              I am
              <select name="role" defaultValue="buyer">
                <option value="buyer">Plant / safety buyer</option>
                <option value="oem">OEM / brand</option>
                <option value="dealer">Dealer / distributor</option>
                <option value="defence">Defence / police</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Quantity
              <input name="quantity" placeholder="e.g. 5,000 pairs" />
            </label>
          </>
        )}
        <label className="full">
          {intent === "catalogue" ? "What do you need in the pack?" : "Requirement"}
          <textarea
            name="message"
            required
            placeholder={
              intent === "sample"
                ? "SKU, size, destination"
                : "Specs, marks needed (CE / BIS / ASTM), destination"
            }
          />
        </label>
      </div>
      <button className="btn btn-orange" type="submit">
        {c.submit}
      </button>
    </form>
  );
}

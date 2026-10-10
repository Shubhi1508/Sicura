import { Link } from "react-router-dom";
import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <h4>SICURA</h4>
            <p>
              The footwear brand of {site.house}. Safety shoes, military boots, and
              private-label manufacturing from Mandhana, Kanpur — {site.company}.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/range">Range</Link></li>
              <li><Link to="/oem">OEM & quotes</Link></li>
              <li><Link to="/defence">Defence</Link></li>
              <li><Link to="/plant">The plant</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/standards">Standards</Link></li>
              <li><Link to="/contact">Visit Mandhana</Link></li>
              <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4>Plant</h4>
            <p>{site.address}</p>
            <p className="stack-gap">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.company}. English. Forms are received by the export desk — we do not sell your details.</span>
          <span>SICURA is a brand of AGS Safety.</span>
        </div>
      </div>
    </footer>
  );
}

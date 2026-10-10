import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { site } from "../data/site";

const links = [
  { to: "/range", label: "Range" },
  { to: "/oem", label: "OEM" },
  { to: "/defence", label: "Defence" },
  { to: "/plant", label: "Plant" },
  { to: "/standards", label: "Standards" },
  { to: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={overlay ? "header header-overlay" : "header"}>
      <div className="wrap header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <strong>AGS SAFETY</strong>
          <span>SICURA · Kanpur</span>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
        <div className="header-cta">
          <span className="socials">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </span>
          <Link className="btn btn-orange" to="/oem">
            Request a quote
          </Link>
        </div>
        <button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

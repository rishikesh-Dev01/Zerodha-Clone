import { useState } from "react";
import "./navbar.css";

const links = [
  { label: "Signup", href: "/signup" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="zd-navbar" aria-label="Main navigation">
      <div className="zd-container">
        <a className="zd-brand" href="/" aria-label="Zerodha home">
          <img src="/images/logo.svg" alt="Zerodha" width="120" height="24" />
        </a>

        <button
          className="zd-menu-toggle"
          type="button"
          aria-controls="navbarMenu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`zd-menu${isMenuOpen ? " is-open" : ""}`}
          id="navbarMenu"
        >
          <ul className="zd-links">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="zd-nav-link"
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

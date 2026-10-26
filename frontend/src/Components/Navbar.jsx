import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

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
        <Link className="zd-brand" to="/" aria-label="Zerodha home">
          <img src="/images/logo.svg" alt="Zerodha" width="120" height="24" />
        </Link>

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
                <Link
                  className="zd-nav-link"
                  to={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

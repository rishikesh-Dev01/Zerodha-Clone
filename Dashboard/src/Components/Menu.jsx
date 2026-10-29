import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="brand-search">
        <img src="/kite-logo.svg" alt="logo" width="40" height="20" />
        <label className="search-container">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          <input type="search" placeholder="Search" aria-label="Search" />
        </label>
      </div>
      <div className="menus">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => `menu${isActive ? " selected" : ""}`}
              to="/"
              end
            >
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menu${isActive ? " selected" : ""}`}
              to="/orders"
            >
              <p>Orders</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menu${isActive ? " selected" : ""}`}
              to="/holdings"
            >
              <p>Holdings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menu${isActive ? " selected" : ""}`}
              to="/positions"
            >
              <p>Positions</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menu${isActive ? " selected" : ""}`}
              to="/ipo"
            >
              <p>IPO & Bids</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menu${isActive ? " selected" : ""}`}
              to="/funds"
            >
              <p>Funds</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="menu-divider" aria-hidden="true" />
      <div className="toolbar-icons" aria-label="Account tools">
        <FontAwesomeIcon
          className="toolbar-icon"
          icon={faBell}
          aria-label="Notifications"
        />
        <FontAwesomeIcon
          className="toolbar-icon"
          icon={faCartShopping}
          aria-label="Shopping cart"
        />
      </div>
      <div className="profile">
        <div className="avatar">ZU</div>
        <p className="username">USERID</p>
      </div>
    </div>
  );
};

export default Menu;

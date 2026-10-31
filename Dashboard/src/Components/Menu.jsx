import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Menu = () => {
  const { pathname } = useLocation();
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false)

  const selectedProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen)
  }

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
              className={({ isActive }) =>
                `menu transition-transform duration-100 active:scale-95${isActive || pathname === "/dashboard/screener" ? " selected" : ""}`
              }
              to="/"
              end
            >
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `menu transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
              }
              to="/orders"
            >
              <p>Orders</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `menu transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
              }
              to="/holdings"
            >
              <p>Holdings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `menu transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
              }
              to="/positions"
            >
              <p>Positions</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `menu transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
              }
              to="/ipo"
            >
              <p>IPO & Bids</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `menu transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
              }
              to="/funds"
            >
              <p>Funds</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `menu transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
              }
              to="/apps"
            >
              <p>Apps</p>
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
      <div className="profile" onClick={selectedProfileClick}>
        <div className="avatar">ZU</div>
        <p className="username flex text-center justify-center">USERID</p>
      </div>
      {/* {isProfileDropDownOpen} */}
    </div>
  );
};

export default Menu;

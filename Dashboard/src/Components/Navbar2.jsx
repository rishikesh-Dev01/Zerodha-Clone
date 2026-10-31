import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="flex w-full items-center gap-4 border-b border-[#333]">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `menu ml-7 cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/dashboard/screener"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Stock Screener
      </NavLink>
    </div>
  );
};

export default Navbar2;

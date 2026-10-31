
import {NavLink} from 'react-router-dom'

const IpoNav = () => {
  return (
    <div className="flex w-full min-w-0 items-center gap-4 border-b border-[#333]">
      <NavLink
        to="/ipo"
        end
        className={({ isActive }) =>
          `menu ml-7 cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        IPO
      </NavLink>
      <NavLink
        to="/ipo/gsecs"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Govt. Securities
      </NavLink>
      <NavLink
        to="/ipo/auctions"
        end
        className={({ isActive }) =>
          `menu ml-7 cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Auctions
      </NavLink>
      <NavLink
        to="/ipo/corporate-actions"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Corporate actions
      </NavLink>
      <NavLink
        to="/ipo/sse"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        SSE IPO
      </NavLink>
    </div>
  )
}

export default IpoNav
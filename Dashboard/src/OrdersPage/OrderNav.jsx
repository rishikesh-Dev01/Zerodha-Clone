import {NavLink} from 'react-router-dom'

const OrderNav = () => {
  return (
    <div className="flex w-full min-w-0 items-center gap-4 border-b border-[#333]">
      <NavLink
        to="/orders"
        end
        className={({ isActive }) =>
          `menu ml-7 cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Orders
      </NavLink>
      <NavLink
        to="/orders/gtt"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        GTT
      </NavLink>
      <NavLink
        to="/orders/baskets"
        end
        className={({ isActive }) =>
          `menu ml-7 cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Baskets
      </NavLink>
      <NavLink
        to="/orders/sip"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        SIP
      </NavLink>
      <NavLink
        to="/orders/alerts"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Alerts
      </NavLink>
    </div>
  )
}

export default OrderNav
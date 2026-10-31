import {NavLink} from 'react-router-dom'

const HoldingNav = () => {
  return (
    <div className="flex w-full min-w-0 items-center gap-4 border-b border-[#333]">
      <NavLink
        to="/holdings"
        end
        className={({ isActive }) =>
          `menu ml-7 cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        All
      </NavLink>
      <NavLink
        to="/holdings/equity"
        end
        className={({ isActive }) =>
          `menu cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Equity
      </NavLink>
      <NavLink
        to="/holdings/mutualfund"
        end
        className={({ isActive }) =>
          `menu ml-7 cursor-pointer p-3 transition-transform duration-100 active:scale-95${isActive ? " selected" : ""}`
        }
      >
        Mutual Fund 
      </NavLink>
      
    </div>
  )
}

export default HoldingNav
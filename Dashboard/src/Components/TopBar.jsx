import Menu from './Menu';

const TopBar = () => {
  return (
    <div className="topbar">
        <div id="header-left">
            <div className="nifty">
               <span>NIFTY 50</span>
               <p>2249.75</p>
            </div>
            <div className="sensex">
              <span>SENSEX</span>
                <p>2249.75</p>
            </div>
        </div>
        <Menu/>
    </div>
  )
}

export default TopBar
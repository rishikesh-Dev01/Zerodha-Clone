 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const WatchList = () => {
  return (
    <aside className="watchlist-container" aria-label="Watchlist">
      <label className="watchlist-search">
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          aria-hidden="true"
        />
        <input type="search" placeholder="Search eg :" aria-label="Search watchlist" />
      </label>
    </aside>
  );
};

export default WatchList;

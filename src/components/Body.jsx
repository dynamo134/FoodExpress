import RestaurantCard from "./RestaurantCard";
import useRestaurantAndFilter from "../hooks/useRestaurantAndFilter";
import { useState, useEffect } from "react";
import { ResCardShimmer } from "./ShimmerUI";
import { filter } from "../utils/helper";
import useOnline from "../hooks/useOnline";
import { Link } from "react-router-dom";
import OfflinePage from "../pages/Offline";

const Body = () => {
  // const [filteredRestList, setFilteredRestList] = useState([]);
  //const [allRestList, setAllRestList] = useState([restaurantList]);
  const [searchText, setSearchText] = useState("");

  const { restaurants, filterRestaurant, setRestaurants, SetFilterRestaurant } =
    useRestaurantAndFilter();

  // Real-time filtering while typing
  const handleChange = (value) => {
    setSearchText(value);
    const filteredData = filter(restaurants);
    SetFilterRestaurant(filteredData);
  };

  // Manual filtering on button click
  const handleButtonClick = () => {
    const filteredData = filter(restaurants);
    SetFilterRestaurant(filteredData);
  };

  const offline = useOnline();

  if (!offline) {
    return <OfflinePage />;
  }
  //Condintional rendering
  //if restList is empty => shimmer UI
  // if restourant list is not empty => Actual Data UI
  return filterRestaurant.length == 0 ? (
    <ResCardShimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search the restaurant"
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="search-btn" onClick={handleButtonClick}>
          Search
        </button>
      </div>
      <div className="Food-menu">
        {/* <h2 className="food-menu-title">{title}</h2> */}
        {filterRestaurant.length === 0 ? (
          <div className="no-results-found">
            <img
              //src={noresult}
              alt="Search Results Are Finished - No Results Found Cartoon@clipartmax.com"
            />
          </div>
        ) : (
          <div className="Food-card">
            {filterRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;

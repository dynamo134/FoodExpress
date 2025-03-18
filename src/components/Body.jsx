import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [allRestList, setAllRestList] = useState([restaurantList]);
  const [searchText, setSearchText] = useState("");

  // Empty dependency array => once after rendering
  useEffect(() => {
    console.log("Component did mount");
    //api call
    //getRestaurantList();
  }, []);

  console.log("Rendered");

  async function getRestaurantList() {
    const data = await fetch(
      "https://instafood.onrender.com/api/restaurants?lat=19.0918606&lng=72.8825928"
    );
    const json = await data.json();
    console.log(json.data.info);
    //setRestList(response.data.cards);
    setAllRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // Real-time filtering while typing
  const handleChange = (value) => {
    setSearchText(value);
    const filteredData = allRestList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRestList(filteredData);
  };

  // Manual filtering on button click
  const handleButtonClick = () => {
    const filteredData = allRestList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestList(filteredData);
  };

  //Condintional rendering
  //if restList is empty => shimmer UI
  // if restourant list is not empty => Actual Data UI
  return filteredRestList.length == 0 ? (
    <ShimmerUI />
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
      <div className="restaurant-list">
        {filteredRestList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;

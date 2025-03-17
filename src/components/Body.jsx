import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restList, setRestList] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  // Real-time filtering while typing
  const handleChange = (value) => {
    setSearchText(value);
    const filteredData = restaurantList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(value.toLowerCase())
    );
    setRestList(filteredData);
  };

  // Manual filtering on button click
  const handleButtonClick = () => {
    const filteredData = restaurantList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestList(filteredData);
  };

  return (
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
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;

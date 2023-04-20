import RestaurantCard from "./RestaurantCard";
import resCard from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Array Destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState(resCard);

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredItems = listOfRestaurants.filter(
              (res) => res.data.data.avgRating > 3
            );
            setListOfRestaurants(filteredItems);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Array Destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          onClick={() => {
            const filterRestaurant = listOfRestaurants.filter((res) =>
              res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filterRestaurant);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filteredItems = listOfRestaurants.filter(
              (res) => res?.data?.avgRating > 4
            );
            setFilteredRestaurant(filteredItems);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

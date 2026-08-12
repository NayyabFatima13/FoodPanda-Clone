import { useEffect, useState } from "react";

import RestaurantCard from "../Components/restaurantCard";
import useFetch from "../Hooks/useFetch";
import useLocalStorage from "../Hooks/useLocalStorage";

function Favorites() {

  // Get restaurants from API
  const {
    data,
    loading,
    error
  } = useFetch(
    "http://localhost:3001/restaurants"
  );


  // Get saved favorite IDs
  const [favorites, setFavorites] =
    useLocalStorage("favorites", []);


  const [favoriteRestaurants, setFavoriteRestaurants] =
    useState([]);


  // Find restaurants that are favorites
  useEffect(() => {

    if (data) {

      const filteredRestaurants =
        data.filter((restaurant) =>
          favorites.includes(restaurant.id)
        );

      setFavoriteRestaurants(filteredRestaurants);

    }

  }, [data, favorites]);


  // Remove favorite
  const handleFavorite = (id) => {

    setFavorites((previousFavorites) => {

      return previousFavorites.filter(
        (favoriteId) => favoriteId !== id
      );

    });

  };


  if (loading) {
    return <h2>Loading favorites...</h2>;
  }


  if (error) {
    return <h2>Something went wrong!</h2>;
  }


  return (

    <div className="favorites-page">

      <h1>My Favorites ❤️</h1>


      {favoriteRestaurants.length === 0 ? (

        <div className="no-favorites">

          <h2>No favorite restaurants yet</h2>

          <p>
            Go back to the home page and
            click ❤️ on a restaurant.
          </p>

        </div>

      ) : (

        <div className="restaurant-row">

          {favoriteRestaurants.map((restaurant) => (

            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onFavorite={handleFavorite}
              isFavorite={true}
            />

          ))}

        </div>

      )}

    </div>

  );
}

export default Favorites;
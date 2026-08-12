import { ArrowRight } from "lucide-react";
import RestaurantCard from "./restaurantCard";

function RestaurantSection({
  title,
  restaurants,
  onFavorite,
  favorites
}) {
  return (
    <section className="restaurant-section">

      <div className="section-heading">
        <h2>{title}</h2>

        <button className="restaurant-next">
          <ArrowRight size={20} />
        </button>
      </div>

      {restaurants.length === 0 ? (
        <div className="no-results">
          <h3>No restaurants found</h3>

          <p>
            Try changing your search or filters.
          </p>
        </div>
      ) : (

        <div className="restaurant-row">

          {restaurants.map((restaurant) => (
            <RestaurantCard
            
              key={restaurant.id}
              restaurant={restaurant}
              onFavorite={onFavorite}
              isFavorite={favorites.includes(restaurant.id)}
            />
          ))}

        </div>

      )}

    </section>
  );
}

export default RestaurantSection;
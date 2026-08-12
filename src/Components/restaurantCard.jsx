import { Heart } from "lucide-react";

function RestaurantCard({
  restaurant,
  onFavorite,
  isFavorite
}) {

  return (

    <div className="restaurant-card">

      {/* Restaurant Image */}
      <div className="restaurant-image-container">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="restaurant-image"
        />

        {/* Favorite button */}
        <button
          className="favorite-button"
          onClick={() => onFavorite(restaurant.id)}
        >
          <Heart
            fill={isFavorite ? "red" : "none"}
            color={isFavorite ? "red" : "black"}
          />
        </button>

        {/* Advertisement label */}
        {restaurant.ad && (
          <span className="ad-label">
            Ad
          </span>
        )}

      </div>


      {/* Restaurant Information */}
      <div className="restaurant-info">

        <div className="restaurant-title-row">

          <h3>
            {restaurant.name}
          </h3>

          <span className="rating">
            ⭐ {restaurant.rating}
          </span>

        </div>


        <p className="restaurant-meta">
          From {restaurant.deliveryTime} min
          {" · "}
          {restaurant.price}
          {" · "}
          {restaurant.cuisine}
        </p>


        <p className="delivery-info">
          🛵
          <del>{restaurant.oldDelivery}</del>
          {" "}
          <span>Free for first order</span>
        </p>


        <span className="discount">
          ● {restaurant.discount}
        </span>

      </div>

    </div>
  );
}

export default RestaurantCard;
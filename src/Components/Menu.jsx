import { useCart } from "../Context/CartContext";

function Menu({ restaurant }) {

  const { addToCart } = useCart();

  return (
    <div className="menu">

      <h2>
        {restaurant.name} Menu
      </h2>


      <div className="menu-items">

        {restaurant.menu.map((food) => (

          <div
            className="menu-item"
            key={food.id}
          >

            <div>

              <h3>
                {food.name}
              </h3>

              <p>
                Rs. {food.price}
              </p>

            </div>


            <button
              onClick={() => addToCart(food)}
            >
              Add
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Menu;
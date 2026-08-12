import { useCart } from "../Context/CartContext";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  return (
    <div className="cart-page">

      <h1>My Cart 🛒</h1>


      {cart.length === 0 ? (

        <p>
          Your cart is empty.
        </p>

      ) : (

        <>

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  Rs. {item.price}
                </p>

              </div>


              <div className="quantity-controls">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  -
                </button>


                <span>
                  {item.quantity}
                </span>


                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

              </div>


              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>

          ))}


          <h2>
            Total: Rs. {total}
          </h2>

        </>

      )}

    </div>
  );
}

export default Cart;
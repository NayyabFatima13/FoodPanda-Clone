import {
  createContext,
  useContext
} from "react";

import useLocalStorage from "../Hooks/useLocalStorage";


const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useLocalStorage("cart", []);


  // Add food to cart
  const addToCart = (food) => {

    setCart((previousCart) => {

      const existingItem = previousCart.find(
        (item) => item.id === food.id
      );

      // If item already exists
      if (existingItem) {

        return previousCart.map((item) => {

          if (item.id === food.id) {

            return {
              ...item,
              quantity: item.quantity + 1
            };

          }

          return item;

        });

      }


      // If item doesn't exist
      return [
        ...previousCart,
        {
          ...food,
          quantity: 1
        }
      ];

    });

  };


  // Remove food completely
  const removeFromCart = (id) => {

    setCart((previousCart) => {

      return previousCart.filter(
        (item) => item.id !== id
      );

    });

  };


  // Increase quantity
  const increaseQuantity = (id) => {

    setCart((previousCart) => {

      return previousCart.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity: item.quantity + 1
          };

        }

        return item;

      });

    });

  };


  // Decrease quantity
  const decreaseQuantity = (id) => {

    setCart((previousCart) => {

      return previousCart
        .map((item) => {

          if (item.id === id) {

            return {
              ...item,
              quantity: item.quantity - 1
            };

          }

          return item;

        })
        .filter(
          (item) => item.quantity > 0
        );

    });

  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {

  return useContext(CartContext);

}

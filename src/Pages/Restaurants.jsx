import Menu from "../Components/Menu";

function Restaurants() {

  const restaurant = {
    id: 1,
    name: "Burger Lab",

    menu: [
      {
        id: 101,
        name: "Classic Burger",
        price: 450
      },
      {
        id: 102,
        name: "Cheese Burger",
        price: 550
      },
      {
        id: 103,
        name: "Fries",
        price: 250
      }
    ]
  };


  return (
    <div>

      <h1>Restaurants</h1>

      <Menu restaurant={restaurant} />

    </div>
  );
}

export default Restaurants;
import { useState } from "react";

function CuisineSection() {

  const [selectedCuisine, setSelectedCuisine] = useState("");

  const cuisines = [
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300"
    },
    {
      name: "Fast Food",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"
    },
    {
      name: "Burgers",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300"
    },
    {
      name: "Biryani",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300"
    },
    {
      name: "Ice Cream",
      image:
        "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300"
    },
    {
      name: "Pakistani",
      image:
        "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=300"
    },
    {
      name: "Shawarma",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300"
    }
  ];

  return (
    <section className="cuisine-section">

      <h2>Cuisines for you</h2>

      <div className="cuisine-row">

        {cuisines.map((cuisine) => (

          <div
            className={
              selectedCuisine === cuisine.name
                ? "cuisine-card selected"
                : "cuisine-card"
            }
            key={cuisine.name}
            onClick={() =>
              setSelectedCuisine(cuisine.name)
            }
          >

            <img
              src={cuisine.image}
              alt={cuisine.name}
            />

            <p>{cuisine.name}</p>

          </div>

        ))}

        <button className="next-button">
          →
        </button>

      </div>

      {selectedCuisine && (
        <p className="cuisine-message">
          Showing restaurants for{" "}
          <strong>{selectedCuisine}</strong>
        </p>
      )}

    </section>
  );
}

export default CuisineSection;
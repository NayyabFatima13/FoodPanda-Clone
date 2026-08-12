import pandaBanner from "../assets/foodpanda-banner-logo.png";

function Banner() {
  return (
    <section className="delivery-banner">

      <div className="banner-content">

        <h1>
          Sign up for free delivery
          <br />
          on your first order
        </h1>

        <button>
          Sign up
        </button>

      </div>

      <div className="banner-image">
        <img
          src={pandaBanner}
          alt="Foodpanda panda"
        />
      </div>

    </section>
  );
}

export default Banner;
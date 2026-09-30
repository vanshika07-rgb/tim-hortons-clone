import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <p className="hero-small-title">WELCOME TO TIM HORTONS</p>

        <h1>
          Make Your
          <br />
          Morning Magical
        </h1>

        <p className="hero-description">
          Freshly brewed coffee, delicious donuts,
          <br />
          and moments worth sharing.
        </p>

        <div className="hero-buttons">
          <button className="order-btn">
            ORDER NOW
          </button>

          <button className="menu-btn">
            VIEW MENU
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="coffee-circle">
          ☕
        </div>
      </div>

    </section>
  );
}

export default Hero;
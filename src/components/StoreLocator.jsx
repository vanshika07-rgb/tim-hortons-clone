import "./StoreLocator.css";

function StoreLocator() {
  return (
    <section className="store-locator">

      <div className="store-content">

        <p className="store-label">
          FIND A TIM HORTONS
        </p>

        <h2>
          Your Coffee
          <br />
          Is Closer Than
          <br />
          You Think.
        </h2>

        <p className="store-description">
          Find your nearest Tim Hortons and enjoy
          freshly brewed coffee, delicious food,
          and your favourite treats.
        </p>

        <div className="store-search">

          <input
            type="text"
            placeholder="Enter your city or postal code"
          />

          <button>
            FIND A STORE
          </button>

        </div>

      </div>

      <div className="store-visual">

        <div className="map-circle">
          <span className="map-pin">📍</span>
        </div>

        <div className="store-card">

          <span>☕</span>

          <div>
            <strong>
              Tim Hortons
            </strong>

            <p>
              Your neighbourhood coffee stop
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default StoreLocator;
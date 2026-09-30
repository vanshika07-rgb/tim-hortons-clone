import "./Promotion.css";

function Promotion() {
  return (
    <section className="promotion">

      <div className="promotion-content">
        <p className="promotion-label">
          LIMITED TIME ONLY
        </p>

        <h2>
          Something
          <br />
          Special Is Here
        </h2>

        <p>
          Discover delicious new flavours and
          special creations made to brighten
          your day.
        </p>

        <button>
          EXPLORE NOW
        </button>
      </div>

      <div className="promotion-visual">
        <div className="promo-donut">🍩</div>
        <div className="promo-coffee">☕</div>
      </div>

    </section>
  );
}

export default Promotion;
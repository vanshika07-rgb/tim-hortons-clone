import { Link } from "react-router-dom";
import "./Menu.css";

const products = [
  {
    id: 1,
    category: "COFFEE",
    icon: "☕",
    name: "Original Blend Coffee",
    description: "Freshly brewed and perfectly smooth.",
    price: "₹149",
  },
  {
    id: 2,
    category: "COLD DRINK",
    icon: "🧋",
    name: "Iced Coffee",
    description: "Cool, creamy and refreshing.",
    price: "₹199",
  },
  {
    id: 3,
    category: "DONUT",
    icon: "🍩",
    name: "Chocolate Dream Donut",
    description: "Soft, sweet and covered in chocolate.",
    price: "₹129",
  },
  {
    id: 4,
    category: "TIMBITS",
    icon: "🍪",
    name: "Classic Timbits",
    description: "Bite-sized treats made for sharing.",
    price: "₹99",
  },
];

function Menu() {
  return (
    <section className="menu-section" id="menu">

      {/* HEADING */}
      <div className="menu-heading">
        <p className="menu-subtitle">MADE FRESH FOR YOU</p>

        <h2>Featured Favourites</h2>

        <p className="menu-description">
          Discover your favourite coffee, donuts and delicious treats.
        </p>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        <button className="active">ALL</button>
        <button>COFFEE</button>
        <button>DONUTS</button>
        <button>DRINKS</button>
        <button>TIMBITS</button>
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image">
              <span>{product.icon}</span>
            </div>

            <div className="product-info">

              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="product-bottom">

                <strong>{product.price}</strong>

                <button className="add-btn">
                  + Add
                </button>

              </div>

            </div>

          </div>
        ))}
      </div>

      {/* VIEW FULL MENU */}
      <Link to="/full-menu" className="view-all-btn">
        VIEW FULL MENU
      </Link>

    </section>
  );
}

export default Menu;
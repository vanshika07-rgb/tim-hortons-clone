import { useEffect, useState } from "react";
import "./FullMenu.css";

function FullMenu() {

  const products = [
    {
      id: 1,
      category: "COFFEE",
      name: "Original Blend Coffee",
      description: "Freshly brewed and perfectly smooth.",
      price: 149,
      icon: "☕",
    },

    {
      id: 2,
      category: "COFFEE",
      name: "French Vanilla",
      description: "Smooth coffee with a delicious vanilla flavour.",
      price: 179,
      icon: "☕",
    },

    {
      id: 3,
      category: "COFFEE",
      name: "Dark Roast Coffee",
      description: "Bold and rich coffee for coffee lovers.",
      price: 159,
      icon: "☕",
    },

    {
      id: 4,
      category: "COFFEE",
      name: "Cappuccino",
      description: "Creamy espresso topped with smooth foam.",
      price: 189,
      icon: "☕",
    },

    {
      id: 5,
      category: "COLD DRINK",
      name: "Iced Coffee",
      description: "Cool, creamy and refreshing.",
      price: 199,
      icon: "🧋",
    },

    {
      id: 6,
      category: "COLD DRINK",
      name: "Chocolate Iced Capp",
      description: "Rich chocolate blended with ice.",
      price: 229,
      icon: "🥤",
    },

    {
      id: 7,
      category: "COLD DRINK",
      name: "Strawberry Chill",
      description: "Sweet and refreshing strawberry drink.",
      price: 219,
      icon: "🥤",
    },

    {
      id: 8,
      category: "DONUT",
      name: "Chocolate Dream Donut",
      description: "Soft, sweet and covered in chocolate.",
      price: 129,
      icon: "🍩",
    },

    {
      id: 9,
      category: "DONUT",
      name: "Strawberry Sprinkle Donut",
      description: "Sweet strawberry glaze with colourful sprinkles.",
      price: 139,
      icon: "🍩",
    },

    {
      id: 10,
      category: "DONUT",
      name: "Classic Glazed Donut",
      description: "Soft donut covered in a sweet glaze.",
      price: 119,
      icon: "🍩",
    },

    {
      id: 11,
      category: "DONUT",
      name: "Chocolate Sprinkle Donut",
      description: "Chocolate glaze with delicious sprinkles.",
      price: 139,
      icon: "🍩",
    },

    {
      id: 12,
      category: "TIMBITS",
      name: "Classic Timbits",
      description: "Bite-sized treats made for sharing.",
      price: 99,
      icon: "🍪",
    },

    {
      id: 13,
      category: "TIMBITS",
      name: "Chocolate Timbits",
      description: "Small chocolate bites full of flavour.",
      price: 109,
      icon: "🍪",
    },

    {
      id: 14,
      category: "BREAKFAST",
      name: "Breakfast Sandwich",
      description: "A warm and delicious breakfast favourite.",
      price: 199,
      icon: "🥪",
    },

    {
      id: 15,
      category: "BREAKFAST",
      name: "Egg & Cheese Sandwich",
      description: "Egg and melted cheese in a warm sandwich.",
      price: 189,
      icon: "🥪",
    },
  ];


  const getCategoryFromURL = () => {

    const params = new URLSearchParams(
      window.location.hash.split("?")[1] || ""
    );

    return params.get("category") || "ALL";
  };


  const [selectedCategory, setSelectedCategory] = useState(
    getCategoryFromURL()
  );


  useEffect(() => {

    const handleHashChange = () => {

      setSelectedCategory(
        getCategoryFromURL()
      );

    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {

      window.removeEventListener(
        "hashchange",
        handleHashChange
      );

    };

  }, []);


  const handleCategory = (category) => {

    setSelectedCategory(category);

    if (category === "ALL") {

      window.location.hash = "full-menu";

    } else {

      window.location.hash =
        `full-menu?category=${category.toLowerCase()}`;

    }

  };


  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() ===
            selectedCategory.toLowerCase()
        );


  return (
    <section className="full-menu">

      {/* HEADING */}

      <div className="full-menu-heading">

        <p>OUR MENU</p>

        <h1>
          Your Favourites,
          <br />
          All In One Place
        </h1>

        <span>
          Explore our coffee, donuts, breakfast favourites,
          cold drinks and more.
        </span>

      </div>


      {/* FILTER BUTTONS */}

      <div className="menu-filters">

        <button
          className={
            selectedCategory === "ALL"
              ? "active"
              : ""
          }
          onClick={() => handleCategory("ALL")}
        >
          ALL
        </button>


        <button
          className={
            selectedCategory === "COFFEE"
              ? "active"
              : ""
          }
          onClick={() => handleCategory("COFFEE")}
        >
          COFFEE
        </button>


        <button
          className={
            selectedCategory === "DONUT"
              ? "active"
              : ""
          }
          onClick={() => handleCategory("DONUT")}
        >
          DONUTS
        </button>


        <button
          className={
            selectedCategory === "BREAKFAST"
              ? "active"
              : ""
          }
          onClick={() => handleCategory("BREAKFAST")}
        >
          BREAKFAST
        </button>


        <button
          className={
            selectedCategory === "COLD DRINK"
              ? "active"
              : ""
          }
          onClick={() => handleCategory("COLD DRINK")}
        >
          COLD DRINKS
        </button>


        <button
          className={
            selectedCategory === "TIMBITS"
              ? "active"
              : ""
          }
          onClick={() => handleCategory("TIMBITS")}
        >
          TIMBITS
        </button>

      </div>


      {/* PRODUCTS */}

      <div className="full-menu-grid">

        {filteredProducts.map((product) => (

          <div
            className="full-menu-card"
            key={product.id}
          >

            <div className="product-image">

              <span>
                {product.icon}
              </span>

            </div>


            <div className="product-details">

              <p className="product-category">
                {product.category}
              </p>

              <h2>
                {product.name}
              </h2>

              <p className="product-description">
                {product.description}
              </p>


              <div className="product-bottom">

                <strong>
                  ₹{product.price}
                </strong>

                <button>
                  + ADD
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FullMenu;
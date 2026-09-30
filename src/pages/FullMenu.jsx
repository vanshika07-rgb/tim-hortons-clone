import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./FullMenu.css";

const products = [
  // COFFEE
  {
    id: 1,
    category: "COFFEE",
    icon: "☕",
    name: "Original Blend Coffee",
    description: "Freshly brewed and perfectly smooth.",
    price: 149,
  },
  {
    id: 2,
    category: "COFFEE",
    icon: "☕",
    name: "Dark Roast Coffee",
    description: "Rich, bold and full of flavour.",
    price: 169,
  },
  {
    id: 3,
    category: "COFFEE",
    icon: "☕",
    name: "French Vanilla",
    description: "Smooth coffee with sweet vanilla flavour.",
    price: 189,
  },

  // DONUTS
  {
    id: 4,
    category: "DONUTS",
    icon: "🍩",
    name: "Chocolate Dream Donut",
    description: "Soft, sweet and covered in chocolate.",
    price: 129,
  },
  {
    id: 5,
    category: "DONUTS",
    icon: "🍩",
    name: "Boston Cream Donut",
    description: "Classic donut filled with creamy custard.",
    price: 139,
  },
  {
    id: 6,
    category: "DONUTS",
    icon: "🍩",
    name: "Strawberry Sprinkle Donut",
    description: "Sweet strawberry glaze with colourful sprinkles.",
    price: 129,
  },

  // BREAKFAST
  {
    id: 7,
    category: "BREAKFAST",
    icon: "🥪",
    name: "Breakfast Sandwich",
    description: "Warm and delicious breakfast favourite.",
    price: 199,
  },
  {
    id: 8,
    category: "BREAKFAST",
    icon: "🥯",
    name: "Classic Bagel",
    description: "Freshly toasted and perfectly satisfying.",
    price: 159,
  },
  {
    id: 9,
    category: "BREAKFAST",
    icon: "🥞",
    name: "Pancake Breakfast",
    description: "Fluffy pancakes for a delicious morning.",
    price: 219,
  },

  // COLD DRINKS
  {
    id: 10,
    category: "COLD DRINKS",
    icon: "🧋",
    name: "Iced Coffee",
    description: "Cool, creamy and refreshing.",
    price: 199,
  },
  {
    id: 11,
    category: "COLD DRINKS",
    icon: "🥤",
    name: "Iced Capp",
    description: "A smooth and refreshing frozen coffee.",
    price: 229,
  },
  {
    id: 12,
    category: "COLD DRINKS",
    icon: "🧋",
    name: "Cold Brew",
    description: "Slow brewed for a smooth coffee experience.",
    price: 219,
  },

  // TIMBITS
  {
    id: 13,
    category: "TIMBITS",
    icon: "🍪",
    name: "Classic Timbits",
    description: "Bite-sized treats made for sharing.",
    price: 99,
  },
  {
    id: 14,
    category: "TIMBITS",
    icon: "🍪",
    name: "Chocolate Timbits",
    description: "Small bites packed with chocolate flavour.",
    price: 109,
  },
  {
    id: 15,
    category: "TIMBITS",
    icon: "🍪",
    name: "Birthday Cake Timbits",
    description: "Sweet little bites with colourful sprinkles.",
    price: 109,
  },
];

function FullMenu() {
  const { addToCart } = useCart();

  const [searchParams, setSearchParams] = useSearchParams();

  // URL se category read karega
  const urlCategory = searchParams.get("category");

  // Agar URL me category nahi hai toh ALL
  const initialCategory = urlCategory || "ALL";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    "ALL",
    "COFFEE",
    "DONUTS",
    "BREAKFAST",
    "COLD DRINKS",
    "TIMBITS",
  ];

  // Category button click
  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "ALL") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: category,
      });
    }
  };

  // Products filter
  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <>
      <Navbar />

      <main className="full-menu-page">

        {/* HEADER */}
        <section className="full-menu-header">
          <p>OUR MENU</p>

          <h1>
            Your Favourites,
            <br />
            All In One Place
          </h1>

          <span>
            Explore our coffee, donuts, breakfast and delicious treats.
          </span>
        </section>

        {/* CATEGORY FILTER */}
        <div className="full-menu-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                handleCategoryChange(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <section className="full-menu-products">
          {filteredProducts.map((product) => (
            <div
              className="full-product-card"
              key={product.id}
            >
              <div className="full-product-image">
                <span>{product.icon}</span>
              </div>

              <div className="full-product-info">

                <p className="full-product-category">
                  {product.category}
                </p>

                <h2>{product.name}</h2>

                <p className="full-product-description">
                  {product.description}
                </p>

                <div className="full-product-bottom">

                  <strong>
                    ₹{product.price}
                  </strong>

                  <button
                    className="full-add-btn"
                    onClick={() => addToCart(product)}
                  >
                    + Add
                  </button>

                </div>

              </div>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </>
  );
}

export default FullMenu;
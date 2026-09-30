import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const categories = [
    {
      icon: "☕",
      title: "COFFEE",
      description: "Freshly brewed favourites",
      category: "COFFEE",
    },
    {
      icon: "🍩",
      title: "DONUTS",
      description: "Sweet treats for every mood",
      category: "DONUTS",
    },
    {
      icon: "🥪",
      title: "BREAKFAST",
      description: "Start your day deliciously",
      category: "BREAKFAST",
    },
    {
      icon: "🧋",
      title: "COLD DRINKS",
      description: "Cool and refreshing",
      category: "COLD DRINKS",
    },
    {
      icon: "🍪",
      title: "TIMBITS",
      description: "Little bites of happiness",
      category: "TIMBITS",
    },
    {
      icon: "🥤",
      title: "BEVERAGES",
      description: "Something for everyone",
      category: "COLD DRINKS",
    },
  ];

  return (
    <section className="categories">

      {/* HEADING */}
      <div className="categories-heading">
        <p>EXPLORE OUR MENU</p>

        <h2>
          Something For
          <br />
          Everyone
        </h2>

        <span>
          From freshly brewed coffee to delicious treats,
          discover your next favourite.
        </span>
      </div>

      {/* CATEGORY CARDS */}
      <div className="category-grid">

        {categories.map((category, index) => (
          <div className="category-card" key={index}>

            <div className="category-icon">
              {category.icon}
            </div>

            <div className="category-info">

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <Link
                to={`/full-menu?category=${encodeURIComponent(
                  category.category
                )}`}
                className="category-explore"
              >
                EXPLORE →
              </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;
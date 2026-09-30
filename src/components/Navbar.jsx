import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("timHortonsUser");

    if (savedUser) {
      return JSON.parse(savedUser);
    }

    return null;
  });

  const handleLogout = () => {
    localStorage.removeItem("timHortonsUser");
    localStorage.removeItem("timHortonsToken");

    setUser(null);

    navigate("/auth");
  };

  return (
    <nav className="navbar">

      {/* LEFT SIDE */}

      <div className="nav-left">

        <NavLink
          to="/menu"
          className="nav-link"
        >
          Menu
        </NavLink>

        <NavLink
          to="/franchising"
          className="nav-link"
        >
          Franchising
        </NavLink>

        <NavLink
          to="/catering"
          className="nav-link"
        >
          Tims Catering
        </NavLink>

        <div className="more-menu">

          <button className="more-button">
            More <span>▼</span>
          </button>

          <div className="dropdown-menu">

            <Link to="/story">
              Our Story
            </Link>

            <Link to="/locations">
              Locations
            </Link>

            <Link to="/careers">
              Careers
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>

            <Link to="/faq">
              FAQs
            </Link>

          </div>

        </div>

      </div>

      {/* LOGO */}

      <Link
        to="/"
        className="logo"
      >
        TIM HORTONS
      </Link>

      {/* RIGHT SIDE */}

      <div className="nav-right">

        {user ? (
          <>

            <span className="welcome-user">
              👋 Hi, {user.name}
            </span>

            {/* MY ORDERS */}

            <Link
              to="/my-orders"
              className="my-orders-link"
            >
              My Orders
            </Link>

            {/* LOGOUT */}

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>
        ) : (
          <Link
            to="/auth"
            className="signin-btn"
          >
            Join now or sign in
          </Link>
        )}

        {/* WISHLIST */}

        <button className="icon-btn">
          ♡
        </button>

        {/* CART */}

        <Link
          to="/cart"
          className="cart-btn"
        >
          🛒 <span>{cartCount}</span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // FETCH MY ORDERS
  // ==========================================

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("timHortonsToken");

      if (!token) {
        setError("Please sign in to view your orders.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/orders/my-orders",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to fetch orders."
          );
        }

        setOrders(data.orders || []);
      } catch (error) {
        console.error("Fetch orders error:", error);

        setError(
          error.message ||
            "Unable to load your orders."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="my-orders-page">
          <div className="orders-loading">
            <div className="orders-loading-icon">
              ☕
            </div>

            <h2>
              Loading Your Orders...
            </h2>

            <p>
              Please wait a moment.
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error) {
    return (
      <>
        <Navbar />

        <main className="my-orders-page">
          <div className="orders-empty">

            <div className="orders-empty-icon">
              ⚠️
            </div>

            <h1>
              Something Went Wrong
            </h1>

            <p>
              {error}
            </p>

            <Link to="/auth">
              SIGN IN →
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  // ==========================================
  // NO ORDERS
  // ==========================================

  if (orders.length === 0) {
    return (
      <>
        <Navbar />

        <main className="my-orders-page">

          <section className="orders-header">
            <p>
              ORDER HISTORY
            </p>

            <h1>
              My Orders
            </h1>

            <span>
              Your delicious journey starts here.
            </span>
          </section>

          <div className="orders-empty">

            <div className="orders-empty-icon">
              🛒
            </div>

            <h2>
              No Orders Yet
            </h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <Link to="/full-menu">
              EXPLORE MENU →
            </Link>

          </div>

        </main>

        <Footer />
      </>
    );
  }

  // ==========================================
  // ORDERS PAGE
  // ==========================================

  return (
    <>
      <Navbar />

      <main className="my-orders-page">

        {/* HEADER */}

        <section className="orders-header">

          <p>
            ORDER HISTORY
          </p>

          <h1>
            My Orders
          </h1>

          <span>
            Your delicious journey, all in one place.
          </span>

        </section>

        {/* ORDERS */}

        <section className="orders-container">

          {orders.map((order) => (

            <article
              className="order-card"
              key={order._id}
            >

              {/* TOP */}

              <div className="order-card-top">

                <div>
                  <span className="order-small-label">
                    ORDER ID
                  </span>

                  <h2>
                    #
                    {`TH${order._id
                      .toString()
                      .slice(-8)
                      .toUpperCase()}`}
                  </h2>
                </div>

                <div className="order-date">
                  {formatDate(order.createdAt)}
                </div>

              </div>

              {/* ITEMS */}

              <div className="order-items">

                {order.items.map((item, index) => (

                  <div
                    className="order-item"
                    key={`${order._id}-${index}`}
                  >

                    <div className="order-item-icon">
                      ☕
                    </div>

                    <div className="order-item-info">

                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        {item.quantity} × ₹{item.price}
                      </span>

                    </div>

                    <strong>
                      ₹
                      {item.price *
                        item.quantity}
                    </strong>

                  </div>

                ))}

              </div>

              {/* BOTTOM */}

              <div className="order-card-bottom">

                <div className="order-info">

                  <span>
                    Order Type
                  </span>

                  <strong>
                    {order.orderType}
                  </strong>

                </div>

                <div className="order-info">

                  <span>
                    Payment
                  </span>

                  <strong>
                    {order.paymentMethod}
                  </strong>

                </div>

                <div className="order-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹{order.total}
                  </strong>

                </div>

              </div>

              {/* DELIVERY ADDRESS */}

              {order.orderType === "Delivery" &&
                order.deliveryAddress && (
                  <div className="order-address">

                    <span>
                      📍 Delivery Address
                    </span>

                    <p>
                      {order.deliveryAddress}
                    </p>

                  </div>
                )}

            </article>

          ))}

        </section>

        {/* CONTINUE SHOPPING */}

        <div className="orders-footer">

          <Link
            to="/full-menu"
            className="orders-menu-btn"
          >
            ORDER SOMETHING ELSE →
          </Link>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default MyOrders;
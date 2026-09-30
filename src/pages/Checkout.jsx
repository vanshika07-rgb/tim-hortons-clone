import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Checkout.css";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [orderType, setOrderType] = useState("Delivery");

  const [paymentMethod, setPaymentMethod] = useState(
    "Cash on Delivery"
  );

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // ==========================================
  // PLACE ORDER
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (cart.length === 0) {
      return;
    }

    // Get logged-in user
    const savedUser = localStorage.getItem("timHortonsUser");

    // Get JWT token
    const token = localStorage.getItem("timHortonsToken");

    if (!savedUser || !token) {
      navigate("/auth");
      return;
    }

    setLoading(true);

    try {
      // Convert cart items into backend format
      const orderItems = cart.map((item) => ({
        productId: item.id,
        name: item.name,
        category: item.category || "Other",
        price: Number(item.price),
        quantity: Number(item.quantity),
      }));

      // Create delivery address
      const deliveryAddress =
        orderType === "Delivery"
          ? `${customer.address}, ${customer.city} - ${customer.pincode}`
          : "";

      // Send order to backend
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            customerName: customer.name,
            customerEmail: customer.email,
            orderType: orderType,
            deliveryAddress: deliveryAddress,
            paymentMethod: paymentMethod,
            items: orderItems,
            total: Number(cartTotal),
          }),
        }
      );

      const data = await response.json();

      // Backend error
      if (!response.ok) {
        throw new Error(
          data.message || "Unable to place order."
        );
      }

      // Prepare confirmation data
      const newOrder = {
        orderId: data.order.orderId,

        customer: customer,

        orderType: data.order.orderType,

        paymentMethod: data.order.paymentMethod,

        items: data.order.items,

        total: data.order.total,
      };

      setOrderDetails(newOrder);

      // Clear cart only after successful backend order
      clearCart();

      // Show confirmation
      setOrderPlaced(true);

    } catch (error) {
      console.error("Order placement error:", error);

      setError(
        error.message ||
          "Unable to place order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================
     ORDER CONFIRMATION
  ========================================= */

  if (orderPlaced && orderDetails) {
    return (
      <>
        <Navbar />

        <main className="order-confirmation">

          <div className="confirmation-card">

            <div className="confirmation-icon">
              ✓
            </div>

            <p className="confirmation-label">
              ORDER CONFIRMED
            </p>

            <h1>
              Thank You!
            </h1>

            <p className="confirmation-message">
              Your order has been successfully placed.
              <br />
              We're getting everything ready for you.
            </p>

            <div className="order-id-box">
              <span>ORDER ID</span>

              <strong>
                #{orderDetails.orderId}
              </strong>
            </div>

            <div className="confirmation-details">

              <div className="confirmation-detail">
                <span>Items</span>

                <strong>
                  {orderDetails.items.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                </strong>
              </div>

              <div className="confirmation-detail">
                <span>Order Type</span>

                <strong>
                  {orderDetails.orderType}
                </strong>
              </div>

              <div className="confirmation-detail">
                <span>Payment</span>

                <strong>
                  {orderDetails.paymentMethod}
                </strong>
              </div>

              <div className="confirmation-detail">
                <span>Total</span>

                <strong>
                  ₹{orderDetails.total}
                </strong>
              </div>

            </div>

            <div className="confirmation-customer">

              <h3>
                Order Details
              </h3>

              <p>
                <strong>
                  {orderDetails.customer.name}
                </strong>
              </p>

              <p>
                {orderDetails.customer.phone}
              </p>

              {orderDetails.orderType === "Delivery" && (
                <p>
                  {orderDetails.customer.address},{" "}
                  {orderDetails.customer.city} -{" "}
                  {orderDetails.customer.pincode}
                </p>
              )}

            </div>

            <Link
              to="/"
              className="confirmation-home-btn"
            >
              BACK TO HOME →
            </Link>

            <Link
              to="/full-menu"
              className="confirmation-menu-link"
            >
              Order Something Else
            </Link>

          </div>

        </main>

        <Footer />
      </>
    );
  }

  /* =========================================
     EMPTY CART
  ========================================= */

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <main className="checkout-empty">

          <div className="checkout-empty-icon">
            🛒
          </div>

          <h1>
            Your Cart Is Empty
          </h1>

          <p>
            Add some delicious favourites before checking out.
          </p>

          <Link to="/full-menu">
            EXPLORE MENU →
          </Link>

        </main>

        <Footer />
      </>
    );
  }

  /* =========================================
     CHECKOUT PAGE
  ========================================= */

  return (
    <>
      <Navbar />

      <main className="checkout-page">

        {/* HEADER */}

        <section className="checkout-header">

          <p>
            CHECKOUT
          </p>

          <h1>
            Almost There!
          </h1>

          <span>
            Complete your details and place your order.
          </span>

        </section>

        <section className="checkout-content">

          {/* LEFT SIDE */}

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            {/* CUSTOMER DETAILS */}

            <div className="checkout-card">

              <h2>
                Customer Details
              </h2>

              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={customer.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group full-width">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={customer.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </div>

            {/* ORDER TYPE */}

            <div className="checkout-card">

              <h2>
                Order Type
              </h2>

              <div className="option-grid">

                <button
                  type="button"
                  className={
                    orderType === "Delivery"
                      ? "option-btn selected"
                      : "option-btn"
                  }
                  onClick={() =>
                    setOrderType("Delivery")
                  }
                >
                  🚗

                  <span>
                    Delivery
                  </span>

                </button>

                <button
                  type="button"
                  className={
                    orderType === "Pickup"
                      ? "option-btn selected"
                      : "option-btn"
                  }
                  onClick={() =>
                    setOrderType("Pickup")
                  }
                >
                  🏪

                  <span>
                    Pickup
                  </span>

                </button>

              </div>

            </div>

            {/* DELIVERY ADDRESS */}

            {orderType === "Delivery" && (
              <div className="checkout-card">

                <h2>
                  Delivery Address
                </h2>

                <div className="form-grid">

                  <div className="form-group full-width">

                    <label>
                      Address
                    </label>

                    <textarea
                      name="address"
                      placeholder="House / Flat / Street"
                      value={customer.address}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={customer.city}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      value={customer.pincode}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

              </div>
            )}

            {/* PAYMENT */}

            <div className="checkout-card">

              <h2>
                Payment Method
              </h2>

              <div className="payment-options">

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      paymentMethod ===
                      "Cash on Delivery"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <span>
                    💵 Cash on Delivery
                  </span>

                </label>

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    checked={
                      paymentMethod === "UPI"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <span>
                    📱 UPI
                  </span>

                </label>

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="Credit / Debit Card"
                    checked={
                      paymentMethod ===
                      "Credit / Debit Card"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <span>
                    💳 Credit / Debit Card
                  </span>

                </label>

              </div>

            </div>

            {/* ERROR MESSAGE */}

            {error && (
              <div
                style={{
                  padding: "14px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  background: "#ffe5e5",
                  color: "#b00020",
                  fontWeight: "600",
                }}
              >
                ❌ {error}
              </div>
            )}

            {/* PLACE ORDER */}

            <button
              type="submit"
              className="place-order-btn"
              disabled={loading}
            >
              {loading
                ? "PLACING ORDER..."
                : "PLACE ORDER →"}
            </button>

          </form>

          {/* RIGHT SIDE */}

          <aside className="checkout-summary">

            <h2>
              Order Summary
            </h2>

            <div className="checkout-items">

              {cart.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <div className="checkout-item-icon">
                    {item.icon}
                  </div>

                  <div className="checkout-item-info">

                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {item.quantity} × ₹{item.price}
                    </span>

                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                </div>

              ))}

            </div>

            <hr />

            <div className="checkout-total-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹{cartTotal}
              </strong>

            </div>

            <div className="checkout-total-row">

              <span>
                Taxes
              </span>

              <strong>
                Calculated at checkout
              </strong>

            </div>

            <hr />

            <div className="checkout-grand-total">

              <span>
                Total
              </span>

              <strong>
                ₹{cartTotal}
              </strong>

            </div>

            <Link
              to="/cart"
              className="back-cart-link"
            >
              ← Back to Cart
            </Link>

          </aside>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Checkout;
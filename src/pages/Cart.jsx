import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  return (
    <main className="cart-page">

      <section className="cart-header">
        <p>YOUR ORDER</p>
        <h1>Your Cart</h1>
        <span>
          Review your favourites before checking out.
        </span>
      </section>

      {cart.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>
            Looks like you haven't added anything yet.
          </p>

          <Link to="/full-menu" className="continue-shopping">
            EXPLORE MENU →
          </Link>
        </section>
      ) : (
        <section className="cart-content">

          <div className="cart-items">

            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <div className="cart-item-icon">
                  {item.icon}
                </div>

                <div className="cart-item-info">
                  <p>{item.category}</p>
                  <h2>{item.name}</h2>
                  <span>₹{item.price} each</span>
                </div>

                <div className="cart-quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <strong>{item.quantity}</strong>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <strong className="cart-item-total">
                  ₹{item.price * item.quantity}
                </strong>

                <button
                  className="remove-item"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  ×
                </button>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₹{cartTotal}</strong>
            </div>

            <div className="summary-row">
              <span>Taxes</span>
              <strong>Calculated at checkout</strong>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{cartTotal}</strong>
            </div>

            <Link
            to="/checkout"
            className="checkout-btn"
            >
                PROCEED TO CHECKOUT →
            </Link>


           

            <Link
              to="/full-menu"
              className="continue-link"
            >
              ← Continue Shopping
            </Link>

          </div>

        </section>
      )}

    </main>
  );
}

export default Cart;
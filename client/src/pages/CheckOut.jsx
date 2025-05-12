import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "../assets/styles/CheckOut.css";

function CheckOut() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "Credit Card",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch cart from localStorage on load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);

      const totalPrice = parsedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an order summary from local data
    const order = {
      shippingDetails: formData,
      items: cartItems,
      totalPrice: total,
    };

    console.log("Order placed:", order);
    alert("Order placed successfully!");

    // Clear the cart after placing the order
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <h2>Checkout</h2>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <p>{item.name || "Product"} x {item.quantity}</p>
              <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <hr />
          <p><strong>Total: Rs. {total.toLocaleString()}</strong></p>
        </div>

        {/* Shipping and Payment Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Details</h3>
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <h3>Payment Details</h3>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>

          {formData.paymentMethod === "Credit Card" && (
            <>
              <input
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
              <input
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
              <input
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;

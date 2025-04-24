
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import { useState } from "react";
import "../assets/styles/Cart.css"; // Optional CSS

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "2 Piece Embroidered Cotton Suit | MBMS-2P25-01",
      image: "https://picsum.photos/100",
      size: "S",
      color: "White",
      price: 10490,
      quantity: 1,
    },
    {
      id: 2,
      title: "Men's Classic Black Kurta",
      image: "https://picsum.photos/101",
      size: "M",
      color: "Black",
      price: 8490,
      quantity: 2,
    },
  ]);

  const handleIncrement = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const handleDecrement = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
  };

  const handleDelete = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
  };
  

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-heading">Shopping Bag ({cartItems.length} items)</h2>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
              />
            ))}
          </div>

          <div className="cart-summary">
            <h3>SUBTOTAL</h3>
            <p>Rs. {total.toLocaleString()}</p>
            <button className="checkout-btn">CHECK OUT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

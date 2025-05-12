/*import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = "66407cfb83d632fb54ad57f1"; // Replace with real user ID or auth

  // 1. Fetch cart from server
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:5000/cart");
        const userCart = res.data.find(cart => cart.userId === userId);
        if (userCart) {
          // Add _id as itemId for later updates
          const formattedItems = userCart.items.map((item, index) => ({
            ...item,
            id: item._id || index, // fallback to index
          }));
          setCartItems(formattedItems);
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchCart();
  }, []);

  const handleIncrement = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
    // Optionally send PUT request here
  };

  const handleDecrement = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
    // Optionally send PUT request here
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      const updated = cartItems.filter(item => item.id !== id);
      setCartItems(updated);
    } catch (err) {
      console.error("Error deleting cart item:", err);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/CheckOut");
  };

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
            <button className="checkout-btn" onClick={handleCheckout}>
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;*/

import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = "66407cfb83d632fb54ad57f1"; // Replace with real user ID or auth

  // 1. Fetch cart from the server or fallback to localStorage
  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Fetch cart from the server
        const res = await axios.get(`http://localhost:5000/cart?userId=${userId}`);
        const userCart = res.data.find(cart => cart.userId === userId);
        if (userCart) {
          // Add _id as itemId for later updates
          const formattedItems = userCart.items.map((item, index) => ({
            ...item,
            id: item._id || index, // fallback to index
          }));
          setCartItems(formattedItems);
          // Also store cart data in localStorage for offline usage
          localStorage.setItem("cart", JSON.stringify(formattedItems));
        } else {
          // Fallback to localStorage if server cart is empty
          const localCart = JSON.parse(localStorage.getItem("cart")) || [];
          setCartItems(localCart);
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
        // Fallback to localStorage on error
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(localCart);
      }
    };
    fetchCart();
  }, [userId]);

  // 2. Handle increment/decrement of quantity
  const handleIncrement = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
    updateCartInLocalStorage(updated);
    updateCartOnServer(updated);
  };

  const handleDecrement = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
    updateCartInLocalStorage(updated);
    updateCartOnServer(updated);
  };

  // 3. Handle delete
  const handleDelete = async (id) => {
  try {
    
    // Send DELETE request to the server
    const res = await axios.delete(`http://localhost:5000/cart/item/${id}`); // Make sure the route is correct on the server
    console.log("Item deleted:", res);

    // Update local state and localStorage
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    

  } catch (err) {
    console.error("Error deleting cart item:", err);
  }
};


  // 4. Update cart in localStorage
  const updateCartInLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 5. Update cart on the server
  const updateCartOnServer = async (updatedCart) => {
    try {
      const cartData = { userId, items: updatedCart };
      await axios.put("http://localhost:5000/cart", cartData); // Update cart on the server
    } catch (err) {
      console.error("Error updating cart on server:", err);
    }
  };

  // 6. Calculate the total price
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 7. Handle checkout
  const handleCheckout = () => {
    navigate("/CheckOut");
  };

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
            <button className="checkout-btn" onClick={handleCheckout}>
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;


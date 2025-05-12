import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/ProductDetail.css";
import { BsHandbag } from "react-icons/bs";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE}/products/detail/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };

    // Fetch cart data from localStorage
    const fetchCartFromLocalStorage = () => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(cartData);
    };

    fetchProduct();
    fetchCartFromLocalStorage();
  }, [id]);

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Add item to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      item => item.productId === product._id && item.size === selectedSize
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1; // Increment quantity if the product already exists in the cart
    } else {
      updatedCart.push({
        productId: product._id,
        size: selectedSize,
        quantity: 1,
        price: product.price,
      });
    }

    // Update localStorage with the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update state
    alert("Item added to cart!");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product-detail-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details">
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
          </div>
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? "selected" : ""}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
          <button className="Add-to-cart-btn" onClick={handleAddToCart}>
            <BsHandbag /> Add To Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;

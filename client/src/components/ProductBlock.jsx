import React from "react";
import { Link } from "react-router-dom"
import { BsHandbag } from "react-icons/bs";
import "../assets/styles/ProductBlock.css";


function ProductBlock({Products}){
  return(
    <div className="product-grid">
      {Products.map((product,index)=>(
        <div className="product-card">
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
          </Link>
          <button> <BsHandbag/> Add To Cart</button>
          <div className="product-info">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">Rs. {product.price}</p>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default ProductBlock
/*
import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import "../assets/styles/ProductBlock.css";
import axios from "axios";

function ProductBlock({ Products }) {
  const handleAddToCart = async (product) => {
    try {
      const payload = {
        productId: product._id,
        quantity: 1,
        userId: "661f5d59db25decd63bd12ab", // Replace with dynamic userId if logged-in user
        price: product.price,
      };

      const res = await axios.post("http://localhost:5000/cart", payload, {
        withCredentials: true, // Only if using cookies/session
      });

      alert("Product added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add to cart. Please try again.");
    }
  };

  return (
    <div className="product-grid">
      {Products.map((product, index) => (
        <div className="product-card" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </Link>
          <button onClick={() => handleAddToCart(product)}>
            <BsHandbag /> Add To Cart
          </button>
          <div className="product-info">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">Rs. {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductBlock;
*/
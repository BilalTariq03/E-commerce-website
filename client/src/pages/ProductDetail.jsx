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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/detail/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
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
          <button className="Add-to-cart-btn">
            <BsHandbag /> Add To Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;

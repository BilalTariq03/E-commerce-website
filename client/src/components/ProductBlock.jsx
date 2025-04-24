import React from "react";
import { Link } from "react-router-dom"
import { BsHandbag } from "react-icons/bs";
import "../assets/styles/ProductBlock.css";


function ProductBlock({Products}){
  return(
    <div className="product-grid">
      {Products.map((product,index)=>(
        <div className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
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
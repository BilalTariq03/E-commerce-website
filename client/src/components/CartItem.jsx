import React from "react";
import "../assets/styles/CartItem.css";
import { MdDelete } from "react-icons/md";

function CartItem({ item, onIncrement, onDecrement,onDelete }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />

      <div className="cart-item-info">
        <h4 className="cart-item-title">{item.title}</h4>
        <p>Size: {item.size}</p>
        <p>Color: {item.color}</p>

        <div className="cart-quantity-controls">
          <button onClick={() => onDecrement(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item.id)}>+</button>
        </div>
      </div>

      <div className="cart-item-price">
        Rs. {(item.price * item.quantity).toLocaleString()}
      </div>

      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        <MdDelete size={20} />
      </button>

    </div>
  );
}

export default CartItem;

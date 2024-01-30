// components/ShoppingCart.jsx
import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <li>
      {item.name} - ${item.price} - Quantity: {item.quantity}
    </li>
  );
};

const ShoppingCart = ({ cartItems }) => {
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </ul>
          <p>Total: ${totalCost}</p>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

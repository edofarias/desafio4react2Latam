// components/Navbar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    // Navigate to the "/cart" route
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <h1>¡Mama Mía!</h1>
      <button className="cart-button" onClick={handleCartClick}>
        Cart
      </button>
    </nav>
  );
};

export default Navbar;



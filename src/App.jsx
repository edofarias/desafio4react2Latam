// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PizzaList from "./components/PizzaList";
import Navbar from "./components/Navbar";
import PizzaDetails from "./components/PizzaDetails.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import "./App.css";

const Home = ({ pizzas, onAddToCart }) => {
  return (
    <div>
      <h1>Menú</h1>
      <PizzaList pizzas={pizzas} onAddToCart={onAddToCart} />
    </div>
  );
};

// Cart component in App.jsx
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ShoppingCart cartItems={cartItems} />
      )}
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};


const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("/pizzas.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const handleAddToCart = (pizza) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === pizza.id);

    if (existingItemIndex !== -1) {
      // If the pizza is already in the cart, increase the quantity
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return updatedCartItems;
      });
    } else {
      // If the pizza is not in the cart, add it with quantity 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...pizza, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home pizzas={pizzas} onAddToCart={handleAddToCart} />}
          />
          <Route path="/pizzas/:id" element={<PizzaDetails pizzas={pizzas} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

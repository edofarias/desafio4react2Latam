import React from "react";
import { Link } from "react-router-dom";

const PizzaCard = ({ pizza, onAddToCart }) => {
  const { id, img, name, price } = pizza;

  const handleAddToCart = () => {
    onAddToCart(pizza);
  };

  return (
    <div className="pizza-card">
      <Link to={`/pizzas/${id}`}>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PizzaCard;

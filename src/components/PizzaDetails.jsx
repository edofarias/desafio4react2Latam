// components/PizzaDetails.jsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const PizzaDetails = ({ pizzas }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook
  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <p>Pizza not found</p>;
  }

  const { img, name, price, desc, ingredients } = pizza;

  const goBack = () => {
    // Use the navigate function to navigate back
    navigate(-1);
  };

  return (
    <div>
      <h2>{name} Details</h2>
      <img src={img} alt={name} />
      <p>Price: ${price}</p>
      <p>{desc}</p>
      <p>Ingredients: {ingredients.join(", ")}</p>
      <Link to="/">Back</Link>
      {/* Alternatively, you can use the navigate function */}
      {/* <button onClick={goBack}>Back</button> */}
    </div>
  );
};

export default PizzaDetails;

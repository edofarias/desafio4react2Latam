import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzas, onAddToCart, onDetails }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={onAddToCart} onDetails={onDetails} />
      ))}
    </div>
  );
};

export default PizzaList;

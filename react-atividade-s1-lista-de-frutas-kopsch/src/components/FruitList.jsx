import { useState } from "react";
import "./styles.css";

function FruitList() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () =>
    setFruits(
      fruits.filter((elm) => {
        return elm.color === "red";
      })
    );

  const totalPrice = fruits.reduce((acc, elm) => {
    return acc + elm.price;
  }, 0);

  return (
    <div className="container">
      <h3 className="total-price">Preço total: {totalPrice}</h3>
      <ul className="fruit-list">
        {fruits.map((fruits, index) => (
          <li className="fruit-list__item" key={index}>
            {fruits.name}
          </li>
        ))}
      </ul>
      <button className="filter-button" onClick={filterRedFruits}>
        Filtrar frutas vermelhas
      </button>
    </div>
  );
}

export default FruitList;

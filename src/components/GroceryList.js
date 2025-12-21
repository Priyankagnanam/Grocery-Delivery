import React from 'react';
import groceries from '../data/groceries.json';

const GroceryList = ({ supermarket, onAddToCart }) => {
  if (!supermarket) {
    return <div>Please select a supermarket</div>;
  }

  const supermarketGroceries = groceries.filter((grocery) =>
    supermarket.groceries.includes(grocery.id)
  );

  return (
    <div>
      <h2>{supermarket.name}</h2>
      <ul>
        {supermarketGroceries.map((grocery) => (
          <li key={grocery.id}>
            {grocery.name} - ${grocery.price}
            <button onClick={() => onAddToCart(grocery)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;

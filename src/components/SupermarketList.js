import React from 'react';
import supermarkets from '../data/supermarkets.json';

const SupermarketList = ({ onSelectSupermarket, selectedSupermarket }) => {
  return (
    <div>
      <h2>Supermarkets</h2>
      <ul>
        {supermarkets.map((supermarket) => (
          <li
            key={supermarket.id}
            className={selectedSupermarket?.id === supermarket.id ? 'selected' : ''}
            onClick={() => onSelectSupermarket(supermarket)}
          >
            {supermarket.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupermarketList;

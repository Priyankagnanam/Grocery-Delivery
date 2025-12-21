import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      {cartItems.length > 0 && (
        <button onClick={onCheckout}>Checkout</button>
      )}
    </div>
  );
};

export default Cart;

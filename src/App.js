import React, { useState } from 'react';
import './App.css';
import SupermarketList from './components/SupermarketList';
import GroceryList from './components/GroceryList';
import Cart from './components/Cart';

function App() {
  const [selectedSupermarket, setSelectedSupermarket] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleSelectSupermarket = (supermarket) => {
    setSelectedSupermarket(supermarket);
    setCheckoutComplete(false);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCheckout = () => {
    setCartItems([]);
    setCheckoutComplete(true);
  };

  const handleGoBack = () => {
    setSelectedSupermarket(null);
    setCheckoutComplete(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery Delivery</h1>
      </header>
      <main className="App-main">
        {checkoutComplete ? (
          <div className="checkout-success">
            <h2>Checkout Successful!</h2>
            <p>Your order has been placed.</p>
            <button onClick={handleGoBack}>Go Back</button>
          </div>
        ) : (
          <>
            <div className="supermarket-list">
              <SupermarketList
                onSelectSupermarket={handleSelectSupermarket}
                selectedSupermarket={selectedSupermarket}
              />
            </div>
            <div className="grocery-list">
              <GroceryList
                supermarket={selectedSupermarket}
                onAddToCart={handleAddToCart}
              />
            </div>
            <div className="cart">
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onCheckout={handleCheckout}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

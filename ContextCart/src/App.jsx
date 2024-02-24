// App.js
import React from 'react';
import Products from './components/Products';
import { CartProvider } from './components/Cartcontext';
import CartItem from './components/CartItem';
import './components/CartItem.css'

const App = () => {
  return (
    <CartProvider>
    <div className="app">
      <div className="products">
        <Products />
      </div>
      <div className="cart">
        
        <CartItem />
      </div>
    </div>
  </CartProvider>
);
  
};

export default App;


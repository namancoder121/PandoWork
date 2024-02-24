import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';
import './CartItem.css'; // Import your CSS file

const CartItem = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item-container">
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;

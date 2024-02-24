// Products.js
import React from 'react';
import Product from './Product'
import { CartContext } from './Cartcontext';
import CartItem from './CartItem';
const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
   
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} />
      ))}
      {/* <CartItem/> */}
    </div>
  );
};

export default Products;

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addToCart = (product) => {
    const cartItem = { ...product, cartItemId: Date.now() }; // Unique cartItemId for each item
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  // Remove item from the cart
  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + parseInt(product.product_cost), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

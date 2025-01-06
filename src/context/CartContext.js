import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const storedPrice = JSON.parse(localStorage.getItem('cartItems_price'));
  const [cartItems, setCartItems] = useState(storedCartItems);
  let [totalPrice, setTotalPrice] = useState(storedPrice);

  const addToCart = (item, discounted_price) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotalPrice(totalPrice + parseFloat(discounted_price));
  };

  const removeFromCart = (item, price) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);

    setTotalPrice(totalPrice - price);
  };


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('cartItems_price', JSON.stringify(totalPrice));
  }, [totalPrice]);

  console.log('storedPrice', storedPrice)
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,totalPrice, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
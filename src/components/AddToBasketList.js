import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import BasketItem from './BasketItem';
import TotalPrice from './TotalPrice';

function AddToBasketList() {
  const { cartItems, removeFromCart,totalPrice } = useCart();

  const handleDeleteItem = (deletedItem, deletedPrice) => {
    removeFromCart(deletedItem, deletedPrice);
  };  

  return (
    <>
      <div className="container custom-container mb-5">
        <p className='mt-3'>My Basket</p>

        {cartItems.map((item, index) => (
          <BasketItem 
          index={index} 
          key={index} 
          item={item} 
          onDelete={(deletedItem, deletedPrice) => handleDeleteItem(deletedItem, deletedPrice)}  />
        ))}        

        <TotalPrice />
      </div>
    </>
  )
}

export default AddToBasketList;
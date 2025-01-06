import React from 'react';
import { useCart } from '../context/CartContext';

function TotalPrice() {
  const { totalPrice } = useCart();

  return (
    <>
        <div className='d-flex justify-content-end text-align-center align-items-center my-auto'>
        <div>
          <div className='d-flex justify-content-between mt-3'>
            <p>Total</p>
            <p>:</p>
            <p>{`Rs. ${totalPrice.toFixed(2)}`}</p>
          </div>
          <p className='line'></p>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-dark'>Pay Now</button>
          </div>

        </div>
        </div>
    </>
  )
}
export default TotalPrice;

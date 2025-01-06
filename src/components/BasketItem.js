import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

function BasketItem({ onDelete, item, index, getCount, updateTotalPrice }) {
  let previousCount = JSON.parse(localStorage.getItem(`cartCount_${index}`)) || 1;
  let [count, setCount] = useState(previousCount);
  let { setTotalPrice } = useCart();


  useEffect(() => {
    localStorage.setItem(`cartCount_${index}`, JSON.stringify(count));
  }, [count, index]);


  let discountedPrice = (item.discounted_price * count).toFixed(2);
  let actualPrice = (item.actual_price * count).toFixed(2);
  let savePrice = (actualPrice - discountedPrice).toFixed(2);

  if (count < 1) {
    alert("You can't select 0 Item")
    count = 1
    discountedPrice = (item.discounted_price * count).toFixed(2);
    savePrice = (item.actual_price - item.discounted_price).toFixed(2);
  }

  const handleDelete = () => {
    onDelete(item, discountedPrice);
  };

  const handleIcrCount = (index) => {
    setCount(() => {
      const updatedCounts = count + 1
      setTotalPrice((prevTotalPrice) => prevTotalPrice + (item.discounted_price * 1));
      localStorage.setItem(`cartCount_${index}`, JSON.stringify(updatedCounts));
      return updatedCounts;
    });
  };

  const handleDcrCount = (index) => {
    setCount(() => {
      const updatedCounts = count - 1
      setTotalPrice((prevTotalPrice) => prevTotalPrice - (item.discounted_price * 1));
      localStorage.setItem(`cartCount_${index}`, JSON.stringify(updatedCounts[index]));
      return updatedCounts;
    });
  };

  return (
    <>
      <div className="add-to-card card mb-1">
        <div className="card-body d-flex">
          <div className="card-img d-flex justify-content-between align-items-center">
            <div className='border'>
              <img src={item.imgSrc} alt="card image" className='img-fluid' style={{ maxWidth: '100px' }} />

            </div>
            <div className='title'>
              <p className='text-muted'>{item.category} {index}</p>
              <p className='name'>{item.name} 1 kg</p>
              <p className='text-muted'>1 x 80.00</p>
            </div>
            <div className='d-flex amount'>
              <span onClick={handleDcrCount}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash border rounded-circle" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
              </span>
              <p className='mx-2 count'>{count}</p>
              <span onClick={handleIcrCount}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus border rounded-circle" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </span>
            </div>
            <div className='price'>
              <p>Rs. {discountedPrice}</p>
              <p className='text-success'>Save Rs. {savePrice}</p>
            </div>
            <div className='cross' onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-x" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708" />
              </svg>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BasketItem;
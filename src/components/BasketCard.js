import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function BasketCard({ item }) {
  const { addToCart } = useCart();

  const handleAddToCartClick = (item) => {
    addToCart(item, item.discounted_price);
  };

  return (
    <>
      <div className="col-lg-3 item-card" key={item.id}>
        <div className='shadow'>
          <div className="card mb-4 p-2">
            <Link to={`/details/${item.id}`}>
            <img src={item.imgSrc} className="card-img-top" alt="bigbasket item" />
            </Link>
            <span className='off_on_product bg-success p-2'>{item.off_on_product}% OFF</span>
            <div className="card-body">
              <p className="text-sm">{item.category}</p>
              <h5 className="card-title">{item.name}</h5>
              <div className="mb-3">
                <label htmlFor="exampleSelect" className="form-label">Select an option:</label>
                <select className="form-select" id="exampleSelect">
                  <option value="" >{item.amount}</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <h5 className="card-title">₹{item.discounted_price} <span className='text-decoration-line-through'>₹{item.actual_price}</span></h5>

              <div className="mb-3">
                <label htmlFor="exampleSelect" className="form-label">Select an option:</label>
                <select className="form-select" id="exampleSelect">
                  <option value="">{item.sale}</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="d-flex">
                <span className='p-1 px-2 border me-2' title='Add to Fav'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                <span className='w-100'>
                  <button className='btn btn-outline-danger w-100' onClick={() => handleAddToCartClick(item)}>Add</button>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BasketCard;

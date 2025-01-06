import React from 'react';
import basketData from '../data.js/basketData';
import BankCard from './BankCard';
import BasketCard from './BasketCard';
import SlideCarousel from './Carousel';
import CategoryList from './CategoryList';
import DailyStapleCard from './DailyStapleCard';
import GroceryText from './GroceryText';

function Basket() {
    return (
        <>
            <div className='container custom-container'>
                <div className='row'>
                    <div className='header-category d-flex w-100'>
                        <CategoryList />
                    </div>

                    <div className='col-lg-12 my-4 discounted-img'>
                        <img src="https://source.unsplash.com/300x200/?grapes" className='img-fluid w-100' alt="discount show" style={{height: "250px", borderRadius: "20px"}} />
                        <span className='text-on-discounted-img text-center'>
                            <p className='m-0 p-0'>Upto</p>
                            <p className='m-0 p-0'>20%</p>
                        </span>
                    </div>

                    <h1>My Smart Basket</h1>

                    {basketData.slice(0,8).map((item) => (
                        <BasketCard item={item} key={item.id} />
                    ))}



                </div>
            </div>
        </>
    )
}

export default Basket;

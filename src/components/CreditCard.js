// Credit Card Component
import React, { useState } from "react";

const CreditCard = () => {
    const [cardNumber, setCardNumber] = useState('');
  
    const handleCardNumberChange = (e) => {
      let value = e.target.value.replace(/\D/g, '');
      value = value.match(/.{1,4}/g)?.join(' ') || '';
      setCardNumber(value);
    };
  
    const handleSave = () => {
      if (cardNumber.length === 19) {
        localStorage.setItem('creditCard', cardNumber);
        alert('Card saved successfully!');
      } else {
        alert('Please enter a valid card number.');
      }
    };
  
    return (
      <div className="credit-card-container">
        <h2>Enter Credit Card Details</h2>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19"
        />
        <button onClick={handleSave}>Save Card</button>
      </div>
    );
  };
  export default CreditCard;
  
import React from 'react';

const Cart = ({ cart, adjustQuantity, removeMovieFromCart }) => {
  const getTotalPrice = () =>
    cart.reduce((total, movie) => total + movie.price * movie.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cart.map((movie) => (
              <li key={movie.id}>
                <div>
                  <h3>{movie.title}</h3>
                  <p>Genre: {movie.genre}</p>
                  <p>Price: ${movie.price}</p>
                  <div>
                    <button
                      onClick={() => adjustQuantity(movie.id, movie.quantity - 1)}
                      disabled={movie.quantity <= 1}
                    >
                      -
                    </button>
                    <span> Quantity: {movie.quantity} </span>
                    <button
                      onClick={() => adjustQuantity(movie.id, movie.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ${movie.price * movie.quantity}</p>
                  <button onClick={() => removeMovieFromCart(movie.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

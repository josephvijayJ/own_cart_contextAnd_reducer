import React from 'react';
import { GetContext } from '../context/CartContext';

const CartItem = () => {
  const {
    state: { cart, total },
    removeFromCart,
    totalAmountInCart,
  } = GetContext();
  console.log(`The total is ${total}`);

  const totalinCart = cart
    .map((item) => item.price)
    .reduce((cur, acc) => cur + acc, 0);
  return (
    <>
      <h3>Cart Items</h3>
      {cart.length === 0
        ? 'No Items IN tHE cART'
        : cart.map((prod) => (
            <div key={prod.id} className="card" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src={prod.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{prod.productname}</h5>
                <p className="card-text">{prod.description}</p>
                <p className="card-text">${prod.price}</p>

                <button
                  onClick={() => removeFromCart(prod.id)}
                  className="btn btn-primary"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
      {cart ? <h4>Total: {totalinCart} </h4> : ''}
    </>
  );
};

export default CartItem;

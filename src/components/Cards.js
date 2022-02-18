import React from 'react';
import { GetContext } from '../context/CartContext';

const Cards = (props) => {
  const {
    state: { cart },
    addToCart,
  } = GetContext();
  //   console.log(addToCart);
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src={props.productInfo.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.productInfo.productname}</h5>
          <p className="card-text">{props.productInfo.description}</p>
          <p className="card-text">${props.productInfo.price}</p>

          <button
            onClick={() => addToCart(props.productInfo)}
            disabled={
              cart.find((ele) => ele.id == props.productInfo.id) ? true : false
            }
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;

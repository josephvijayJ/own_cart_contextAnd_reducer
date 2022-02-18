import { createContext, useContext, useReducer } from 'react';
import { reducerFn } from './reducerFn';
import { v4 as uuidv4 } from 'uuid';
const initialValue = {
  products: [
    {
      id: uuidv4(),
      description: 'Nice look and touch',
      productname: 'LED SMART TV',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-...',
      price: 50,
    },
  ],
  cart: [],
  total: 0,
};

const cartContext = createContext();

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducerFn, initialValue);

  const addToCart = (addedProduct) => {
    dispatch({ type: 'ADD_TO_CART', payload: addedProduct });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };
  const totalAmountInCart = () => {
    dispatch({ type: 'CART_TOTAL' });
  };

  return (
    <cartContext.Provider
      value={{ state, addToCart, removeFromCart, totalAmountInCart }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export const GetContext = () => {
  return useContext(cartContext);
};

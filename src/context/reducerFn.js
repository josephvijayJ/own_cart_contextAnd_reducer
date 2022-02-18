export const reducerFn = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('payload', action.payload);

      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      console.log('removing from cart');
      console.log('payload', action.payload);
      return {
        ...state,
        cart: [...state.cart].filter((id) => id.id !== action.payload),
      };
    case 'CART_TOTAL':
      return {
        ...state,
        cart: [...state.cart]
          .map((item) => item.price)
          .reduce((cur, acc) => cur + acc, 0),
      };
  }
};

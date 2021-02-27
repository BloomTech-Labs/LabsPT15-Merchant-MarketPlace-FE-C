import { requestStatus } from '../types/index';
import {
  FETCH_SHOPPING_CART_START,
  FETCH_SHOPPING_CART_END,
  SHOPPING_CART_EDIT_START,
  SHOPPING_CART_EDIT_END,
} from '../actions/index';

let active_cart = JSON.parse(localStorage.getItem('active_cart'));

const initialState = {
  cart: active_cart ? active_cart : [],
  status: requestStatus.ready,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOPPING_CART_START:
      return { ...state, status: requestStatus.loading };
    case FETCH_SHOPPING_CART_END:
      return { cart: action.payload, status: requestStatus.success };
    case SHOPPING_CART_EDIT_START:
      return { ...state, status: requestStatus.loading };
    case SHOPPING_CART_EDIT_END:
      return { cart: action.payload, status: requestStatus.success };
    default:
      return state;
  }
};

export default shoppingCartReducer;

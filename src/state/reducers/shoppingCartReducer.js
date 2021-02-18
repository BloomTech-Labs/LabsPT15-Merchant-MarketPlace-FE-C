import { requestStatus } from '../types/index';
import {
  FETCH_SHOPPING_CART_START,
  FETCH_SHOPPING_CART_END,
  SHOPPING_CART_EDIT_START,
  SHOPPING_CART_EDIT_END,
} from '../actions/index';

const initialState = {
  cart: [],
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
  }
};

export default shoppingCartReducer;

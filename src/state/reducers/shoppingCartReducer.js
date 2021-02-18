import { requestStatus } from '../types/index';
import {
  FETCH_SHOPPING_CART_START,
  FETCH_SHOPPING_CART_END,
  SHOPPING_CART_EDIT_START,
  SHOPPING_CART_EDIT_END,
} from '../actions/index';
import cartReducer from '../../utils/cartQuantityReducer';

const initialState = {
  cart: [
    {
      id: 1,
      name: 'Persian rug',
      Desc: 'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      quantity: 3,
      prince_in_cents: 3400000,
      published: true,
      seller_id: '00ulthapbErVUwVJy4x6',
    },
    {
      id: 1,
      name: 'Persian rug',
      Desc: 'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      quantity: 2,
      prince_in_cents: 3400000,
      published: true,
      seller_id: '00ulthapbErVUwVJy4x6',
    },
  ],
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

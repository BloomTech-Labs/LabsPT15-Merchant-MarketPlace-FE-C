import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import addProductReducer from './addProductReducer';
import addItemImageReducer from './addItemImageReducer';
import shoppingCartReducer from './shoppingCartReducer';

const reducers = combineReducers({
  products: productsReducer,
  addProduct: addProductReducer,
  addItemImage: addItemImageReducer,
  shoppingCart: shoppingCartReducer,
});

export default reducers;

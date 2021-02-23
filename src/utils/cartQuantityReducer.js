function cartReducer(quantity, cartObj) {
  return quantity + cartObj.quantity;
}

export default function cartReduced(cart) {
  return cart.reduce(cartReducer, 0);
}

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import cartReducer from '../../../utils/cartQuantityReducer';

function ShoppingCart({ cart }) {
  // passes the active cart to a utility function that reduces the items in the cart array
  // to a number that represents the total amount of items
  const quantity = cartReducer(cart);

  return (
    <Badge count={quantity} showZero>
      <Link to="/myprofile/shoppingcart">
        <ShoppingCartOutlined />
      </Link>
    </Badge>
  );
}

const mapStateToProps = state => ({
  cart: state.shoppingCart.cart,
});

export default connect(mapStateToProps, {})(ShoppingCart);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import cartReducer from '../../../utils/cartQuantityReducer';

function ShoppingCart({ cart }) {
  const quantity = cartReducer(cart);

  return (
    <Badge count={quantity} showZero>
      <ShoppingCartOutlined />
    </Badge>
  );
}

const mapStateToProps = state => ({
  cart: state.shoppingCart.cart,
});

export default connect(mapStateToProps, {})(ShoppingCart);

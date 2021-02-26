import React, { useState, useEffect } from 'react';
import { editShoppingCart, fetchShoppingCart } from '../../../state/actions';
import { connect } from 'react-redux';
import BuyerNavBar from '../buyerNavBar';
import { List, Avatar, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import './shoppingCart.css';

function ShoppingCart(props) {
  const [cartArr, setCartArr] = useState(props.cart);
  useEffect(() => {
    props.editShoppingCart(cartArr);
    props.fetchShoppingCart();
  }, [cartArr]);

  const editCart = (quantity, item) => {
    item = {
      ...item,
      quantity: quantity,
    };

    props.cart.forEach((cartObj, i) => {
      if (cartObj.id === item.id) {
        if (item.quantity === 0) {
          props.cart.splice(i, 1);
        } else {
          props.cart[i] = item;
        }
      }
    });
    setCartArr(props.cart);
  };

  return (
    <>
      <BuyerNavBar />
      <div className="outerContainer">
        <div className="contents">
          <List
            itemLayout="vertical"
            bordered
            dataSource={props.cart}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="#" />}
                  title={
                    <Link to={`/myprofile/inventory/productpage/${item.id}`}>
                      {item.item_name}
                    </Link>
                  }
                  description={`$${item.price_in_cents / 100}`}
                />
                <div className="img-container">
                  <img alt="item picture" src={item.img} />
                </div>
                <div className="item-details">
                  {item.description}
                  <InputNumber
                    size="small"
                    min={0}
                    max={item.quantity_available}
                    defaultValue={item.quantity}
                    onChange={value => editCart(value, item)}
                  />
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.shoppingCart.cart,
});
export default connect(mapStateToProps, {
  editShoppingCart,
  fetchShoppingCart,
})(ShoppingCart);

import React from 'react';
import { fetchProducts } from '../../../state/actions';
import { connect } from 'react-redux';
import BuyerNavBar from '../buyerNavBar';
import { List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';

function ShoppingCart(props) {
  return (
    <>
      <BuyerNavBar />
      <div className="outerContainer">
        <div className="contents">
          <List
            size="xs"
            bordered
            dataSource={props.cart}
            renderItem={item => (
              <List.Item
                extra={<img width={50} alt="item picture" src={item.img} />}
              >
                <List.Item.Meta
                  avatar={<Avatar src="#" />}
                  title={
                    <Link to={`/myprofile/inventory/productpage/${item.id}`}>
                      {item.item_name}
                    </Link>
                  }
                  description={item.price_in_cents / 100}
                />
                {item.desc}
                <Button>test</Button>
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
export default connect(mapStateToProps, { fetchProducts })(ShoppingCart);

import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../../state/actions';
import { connect } from 'react-redux';
import BuyerNavBar from '../buyerNavBar';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { getDSData } from '../../../api';
import SearchResults from '../../sellerPages/inventory/current/searchResults';

function ShoppingCart(props) {
  const [img, setImg] = useState('');
  const { authState } = useOktaAuth();

  const imgGet = id => {
    getDSData(`${process.env.REACT_APP_API_URI}/photo/${id}`, authState)
      .then(res => setImg(res[0]['url']))
      .catch(err => {
        console.log('Img get fail.');
      });
  };

  // useEffect(() => {
  //   imgGet(image);
  // }, []);

  return (
    <>
      <BuyerNavBar />
      <div className="outerContainer">
        <div className="contents">
          <List
            bordered
            dataSource={props.cart}
            renderItem={item => (
              <List.Item
                extra={<img width={272} alt="logo" src={imgGet(item.id)} />}
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

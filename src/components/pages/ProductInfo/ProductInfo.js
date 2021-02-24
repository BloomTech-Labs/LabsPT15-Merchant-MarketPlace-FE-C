import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getDSData } from '../../../api';
import ProductCarousel from '../ProductPage/ProductCarousel';
import { Rate, Avatar, Tag, InputNumber, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { editShoppingCart } from '../../../state/actions';
import ShoppingCart from '../../common/shoppingCart/ShoppingCart';

const ProductInfo = ({ item, cart, editShoppingCart }) => {
  const [img, setImg] = useState('');
  const { authState } = useOktaAuth();
  const [quantity, setQuantity] = useState(1);
  const [cartObj, setCartObj] = useState({
    id: undefined,
    img: '',
    item_name: '',
    desc: '',
    quantity: 0,
    price_in_cents: undefined,
    seller_id: '',
  });
  const imgGet = id => {
    getDSData(`${process.env.REACT_APP_API_URI}/photo/${id}`, authState)
      .then(res => setImg(res[0]['url']))
      .catch(err => {
        console.log('Img get fail.');
      });
  };
  useEffect(() => {
    imgGet(item.id);
    console.log(cart);
  }, []);

  useEffect(() => {
    setCartObj({
      id: item.id,
      img: img,
      item_name: item.item_name,
      desc: item.desc,
      quantity: quantity,
      price_in_cents: item.price_in_cents,
      seller_id: item.seller_id,
    });
  }, [quantity, img]);

  const addToCart = () => {
    console.log(cartObj);
    var match = false;

    cart.forEach((item, i) => {
      if (item.id === cartObj.id) {
        match = true;
        if (cartObj.quantity === 0) {
          //remove from cart array
        } else {
          cart[i] = cartObj;
        }
      }
    });

    console.log('match: ', match);
    if (!match) {
      cart.push(cartObj);
    }
    console.log('cart: ', cart);

    editShoppingCart(cart);
  };

  let dollars = item.price_in_cents / 100;
  return (
    <div className="product-page">
      <div className="product-container">
        <div>
          {/* <ProductCarousel /> */}
          {/* {The carrousel avobe can be implemented later} */}
          <img src={img} />
        </div>

        <div className="item">
          <div className="name-price">
            <p>{item.item_name}</p>
            <p>${dollars}</p>
          </div>
          <div className="rating">
            <Rate />
          </div>
          <div className="store-name">
            <Avatar size="small" icon={<GlobalOutlined />} />
            <h3>Store Name</h3>
          </div>
          <p>location</p>
          <section>
            <p>{item.description}</p>
            {item.quantity_available !== 0 ? (
              <h2 style={{ color: 'green' }}>QTY: {item.quantity_available}</h2>
            ) : (
              <h2 style={{ color: 'red' }}>QTY: {item.quantity_available}</h2>
            )}
          </section>
          <InputNumber
            size="small"
            min={0}
            defaultValue={quantity}
            max={item.quantity_available}
            onChange={value => setQuantity(value)}
          />
          <Button onClick={addToCart}>Add to cart</Button>
        </div>
      </div>
      <section className="tags-container">
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.shoppingCart.cart,
});

export default connect(mapStateToProps, { editShoppingCart })(ProductInfo);

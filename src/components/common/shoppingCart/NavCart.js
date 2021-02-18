import React, { useState } from 'react';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

function ShoppingCart() {
  let persianRug = {
    id: 1,
    name: 'Persian rug',
    Desc: 'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
    quantity: 3,
    prince_in_cents: 3400000,
    published: true,
    seller_id: '00ulthapbErVUwVJy4x6',
  };
  const [activeCart, setActiveCart] = useState([]);

  const clickHandler = () => {
    setActiveCart([...activeCart, persianRug]);
  };

  return (
    <Badge count={activeCart.length} showZero>
      <ShoppingCartOutlined onClick={clickHandler} />
    </Badge>
  );
}

export default ShoppingCart;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './buyerNavStyles.css';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from '../../common';
import SearchBar from '../searchbar';

import NavCart from '../shoppingCart/NavCart';

function BuyerNavBar({ searchVisible, data, setData }) {
  const { authState, authService } = useOktaAuth();
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <NavLink to="/" activeStyle={{ color: 'black' }}>
            <span style={{ color: 'rebeccapurple' }}>MERCHANT</span> MARKETPLACE
          </NavLink>
        </div>
        <Link to="/myprofile">Seller Profile</Link>
        <Link to="/buyerprofile/lets_shop">Let's Shop</Link>
        <Link>Orders</Link>
        <Link>Payment</Link>
        <Link>Messages</Link>
        <NavCart />
        <Button handleClick={() => authService.logout()} buttonText="Logout" />
      </div>
    </div>
  );
}

export default BuyerNavBar;

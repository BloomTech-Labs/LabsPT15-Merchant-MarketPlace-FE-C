import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './buyerNavStyles.css';
import { useOktaAuth } from '@okta/okta-react';

function BuyerNavBar({ searchVisible, data, setData }) {
  const { authState, authService } = useOktaAuth();
  return (
    <div className="buyer-nav-container">
      <div className="buyer-nav">
        <div className="logo">
          <NavLink to="/" activeStyle={{ color: 'black' }}>
            <span style={{ color: 'rebeccapurple' }}>MERCHANT</span> MARKETPLACE
          </NavLink>
        </div>
        <Link to="/myprofile">Seller Profile</Link>
        <Link>Let's Shop</Link>
        <Link>Orders</Link>
        <Link>Favorites</Link>
      </div>
    </div>
  );
}

export default BuyerNavBar;

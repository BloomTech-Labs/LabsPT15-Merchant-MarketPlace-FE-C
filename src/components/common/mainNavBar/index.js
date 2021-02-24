import React, { useState, useEffect, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import { Button } from '../../common';
import '../navBar/navStyles.css';
import { useOktaAuth } from '@okta/okta-react';

function MainNavBar() {
  const { authState, authService } = useOktaAuth();

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          {/* <NavLink to="/" activeStyle={{ color: 'black' }}> */}
          <span style={{ color: 'rebeccapurple' }}>MERCHANT</span> MARKETPLACE
          {/* </NavLink> */}
        </div>

        {authState.isAuthenticated && (
          <NavLink
            className="link"
            activeStyle={{ color: 'white' }}
            to="/myprofile"
          >
            Seller Profile
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <NavLink
            className="link"
            activeStyle={{ color: 'white' }}
            to="/buyerprofile"
          >
            Buyer Profile
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        )}
        {!authState.isAuthenticated && (
          <Button handleClick={() => authService.login()} buttonText="Login" />
        )}
      </div>
    </div>
  );
}

export default MainNavBar;

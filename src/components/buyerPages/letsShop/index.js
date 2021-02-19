import React from 'react';
import MainNavBar from '../../common/mainNavBar';
import './shopNavStyles.css';
import { useOktaAuth } from '@okta/okta-react';
import BrowserBar from '../../common/browserBar';

function LetsShop({ searchVisible, data, setData }) {
  const { authState, authService } = useOktaAuth();
  return (
    <div>
      <MainNavBar />
      <section className="browse">
        <h1 className="title-1">Browse your favorite local store here!</h1>
        <div className="browse-bar">
          {' '}
          <BrowserBar />
        </div>
      </section>
    </div>
  );
}

export default LetsShop;

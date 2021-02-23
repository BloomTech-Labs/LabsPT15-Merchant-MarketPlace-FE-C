import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainNavBar from '../../common/mainNavBar';
import './landing.css';
import BrowserBar from '../../common/browserBar';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { fetchShoppingCart } from '../../../state/actions';

function Landing(props) {
  const { authState } = useOktaAuth();

  //  the use effect call is to populate the cart state upon login.
  //  due to the decision to hand off auth logic to Okta completely, including token logic, I had trouble incorporating
  //  the action into the login process. This was the next best step I could think of off the cuff. Might incorporate
  //  fetched flag state logic to prevent multiple calls.
  useEffect(() => {
    console.log(authState);
    if (authState.isAuthenticated) {
      props.fetchShoppingCart();
    }
  }, [authState]);

  return (
    <div>
      <MainNavBar />
      <section className="browse">
        <h1 className="title-1">Browse your favorite local store here!</h1>
        <h1>Support your community's business!</h1>
        <div className="browse-bar">
          {' '}
          <BrowserBar />
        </div>
      </section>
      <h1 className="title-2">Top rate merchants</h1>
      <section className="top-rated">
        <div className="top-img">1</div>
        <div className="top-img">2</div>
        <div className="top-img">3</div>
      </section>
    </div>
  );
}

export default connect(null, { fetchShoppingCart })(Landing);

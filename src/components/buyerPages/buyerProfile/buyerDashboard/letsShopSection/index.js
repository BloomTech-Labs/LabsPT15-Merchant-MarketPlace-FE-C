import React from 'react';
import { Link } from 'react-router-dom';

const LetsShopSection = () => {
  return (
    <div>
      <section className="letsShopHeader">
        <h2>Lets Shop</h2>
        <div className="browse-bar">
          {' '}
          <Link to="/buyerprofile/lets_shop">Lets Go Shopping</Link>
        </div>
      </section>
    </div>
  );
};

export default LetsShopSection;

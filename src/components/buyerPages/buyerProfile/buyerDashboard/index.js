import React from 'react';
import './buyerDashboard.css';
import LetsShopSection from './letsShopSection';
import OpenOrdersSection from './openOrdersSection';
import FavoritesSection from './favoritesSection';

function BuyerDashboard() {
  return (
    <div className="buydashboard">
      <div className="buydashItem">
        <LetsShopSection />
      </div>
      <div className="buydashItem">
        <OpenOrdersSection />
      </div>
      <div className="buydashItem">
        <FavoritesSection />
      </div>
    </div>
  );
}

export default BuyerDashboard;

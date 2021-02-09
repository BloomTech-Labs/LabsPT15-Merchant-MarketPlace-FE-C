import React from 'react';
import { Link } from 'react-router-dom';

function OpenOrdersSection() {
  return (
    <>
      <h2>Orders</h2>
      <h4>Active</h4>

      <Link className="activeLink">
        <p className="activeLink">All Active Orders</p>
      </Link>
      <h4>Fullfiled & cancelled</h4>
    </>
  );
}
export default OpenOrdersSection;

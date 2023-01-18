import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Plants of many kinds</p>
      </div>

      <div className="products-container">
        {['Product1', 'Product2'].map((product) => product)}
      </div>

      <FooterBanner></FooterBanner>
    </>
  )
}

export default Home
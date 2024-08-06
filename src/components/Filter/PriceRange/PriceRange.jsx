import React from "react";
import "./PriceRange.scss";

const PriceRange = (props) => {
  return (
    <div className={`price-range ${props.className}`}>
      <h3 className="price-range__title">Price Range</h3>
      <div className="price-range__wrapper">
        <div className="price-range__inputbox">
          <label htmlFor="MIN-PRICE">Min Price</label>
          <input type="number" id="MIN-PRICE" placeholder="Min Price" />
        </div>
        <div className="price-range__inputbox">
          <label htmlFor="MAX-PRICE">Max Price</label>
          <input type="number" id="MAX-PRICE" placeholder="Max Price" />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;

import React from "react";
import "./CartTotalCost.scss"

function CartTotalCost() {
  return (
    <div className="total-cart-items">
      <span className="total-cart-items__count">
        total <span>3</span> items
      </span>
      <span className="total-cart-items__cost">usd 200</span>
    </div>
  );
}
export default CartTotalCost;

import React, { useState } from "react";
import "./CartControl.scss";

/*
    @function : CartControl
    @description : component function for adding/removing cart items
    @param : props object
  */
function CartControl(props) {
  const [itemCount, setItemCount] = useState(1); //initial item count
  const minValue = 1; //minimum value under which item cannot be added
  const maxValue = 5; //maximum value above which item cannot be added

  /*
    @function : handleClick
    @description : function that increases/decreases item count when clicked on add/remove button
    @param : event object
  */
  function handleClick(e) {
    e.preventDefault();
    //condition for item addition
    if (e.target.parentNode.classList.contains("controls__plus")) {
      if (itemCount != maxValue) {
        setItemCount((prevItemCount) => {
          return prevItemCount + 1;
        });
      }
    } 
    //condition for item removal
    else if (e.target.parentNode.classList.contains("controls__minus")) {
      if (itemCount != minValue) {
        setItemCount((prevItemCount) => {
          return prevItemCount - 1;
        });
      }
    }
  }

  return (
    <div className="controls">
      <a href="" className="controls__minus" onClick={handleClick}>
        <img
          src="./assets/images/icons/productminus.svg"
          alt="minus a product"
        />
      </a>
      <span className="controls__number">{itemCount}</span>

      <a href="" className="controls__plus" onClick={handleClick}>
        <img src="./assets/images/icons/productadd.svg " alt="add a product" />
      </a>
    </div>
  );
}

export default CartControl;

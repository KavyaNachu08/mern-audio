import React from "react";
import "./AddToCartPage.scss";
import CartTotalCost from "../../components/CartTotalCost/CartTotalCost";
import CheckoutCart from "../../components/ProductActionButtonWithArrow/ProductActionButtonWithArrow";
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
import TitleComp from "../../components/TitleComp/TitleComp";
import { faChevronLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function AddToCartPage() {
  return (
    <div className="cart-container">
      <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        state="show"
        title="shopping cart"
        rightIcon={faTrash}
      ></TitleComp>
      <ProductItem hasControls={true}></ProductItem>
      <CartTotalCost></CartTotalCost>
      <CheckoutCart
        title="checkout button"
        ariaLabelText="add this item to cart"
        buttonText="proceed to checkout"
      />
    </div>
  );
}

export default AddToCartPage;

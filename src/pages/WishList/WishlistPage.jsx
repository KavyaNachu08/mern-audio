import React from "react";
import "./WishlistPage.scss";
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
import ProductActionButton from "../../components/ProductActionButton/ProductActionButton";
import TitleComp from "../../components/TitleComp/TitleComp";
import { faChevronLeft, faTrash} from "@fortawesome/free-solid-svg-icons";
function WishlistPage() {

  return (
    
    <div className="wishlist-item-container">
       <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        state="show"
        title="whislist"
        rightIcon={faTrash}
         ></TitleComp>
      <ProductItem ></ProductItem>
      <ProductActionButton
        title="add to cart"
        ariaLabelText="add this item to cart"
        buttonText="add to cart"
      />

    </div>
    
  );
}

export default WishlistPage;

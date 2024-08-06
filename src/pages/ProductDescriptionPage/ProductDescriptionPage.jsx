import React, { useState } from "react";
import "./ProductDescriptionPage.scss";
import ProductOverview from "../../components/ProductDetails/ProductOverview/ProductOverview";
import ProductFeatures from "../../components/ProductDetails/ProductFeatures/ProductFeatures";
import ProductSpecification from "../../components/ProductDetails/ProductSpecification/ProductSpecification";
import ProductActionButton from "../../components/ProductActionButton/ProductActionButton";
import ProductActionButtonWithArrow from "../../components/ProductActionButtonWithArrow/ProductActionButtonWithArrow";
import TitleComp from "../../components/TitleComp/TitleComp";
import {
  faChevronLeft,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
function ProductDescriptionPage() {
  const [selectedNavItem, setSelectedNavItem] = useState("overview");
  const [wishListState, setWishListState] = useState(false); //flag that tells whether the item is wishlisted

  const setActive = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <>
      <TitleComp
        leftIcon={faChevronLeft}
        rightIcon={faCartShopping}
        rightPath="/cart"
      ></TitleComp>
      <div className='product-description'>
        <span className='product-description__price'>USD 350</span>
        <h2 className='product-description__title'>
          tma-2 <br /> hd wireless
        </h2>
        <div className='product-description__contents'>
          <nav
            className='product-description__contents__nav'
            role='navigation'
            aria-label='Product Details Navigation'
          >
            <ul className='list'>
              <li className='list__item'>
                <button
                  id='tab-1'
                  type='button'
                  role='tab'
                  aria-selected={selectedNavItem === "overview"}
                  aria-controls='tabpanel-1'
                  onClick={() => setActive("overview")}
                  className={selectedNavItem === "overview" ? "active" : ""}
                >
                  overview
                </button>
              </li>
              <li className='list__item'>
                <button
                  id='tab-2'
                  type='button'
                  role='tab'
                  aria-selected={selectedNavItem === "features"}
                  aria-controls='tabpanel-2'
                  onClick={() => setActive("features")}
                  className={selectedNavItem === "features" ? "active" : ""}
                >
                  features
                </button>
              </li>
              <li className='list__item'>
                <button
                  id='tab-3'
                  type='button'
                  role='tab'
                  aria-selected={selectedNavItem === "specification"}
                  aria-controls='tabpanel-3'
                  onClick={() => setActive("specification")}
                  className={
                    selectedNavItem === "specification" ? "active" : ""
                  }
                >
                  specification
                </button>
              </li>
            </ul>
          </nav>

          {selectedNavItem === "overview" && (
            <ProductOverview
              wishListState={wishListState}
              setWishListState={setWishListState}
              id='tabpanel-1'
            />
          )}
          {selectedNavItem === "features" && (
            <ProductFeatures id='tabpanel-2' />
          )}
          {selectedNavItem === "specification" && (
            <ProductSpecification id='tabpanel-3' />
          )}
        </div>

        <ProductActionButton
          title='add to cart'
          ariaLabelText='add this item to cart'
          buttonText='add to cart'
        />
      </div>
    </>
  );
}

export default ProductDescriptionPage;

import "./ProductOverview.scss";
import ProductImage from "../ProductImage/ProductImage";
import ReviewCard from "./ReviewCard/ReviewCard";
import MoreProducts from "../../MoreProducts/MoreProducts";
import SuggestedProductCard from "./SuggestedProductCard/SuggestedProductCard";
import WishListBtn from "../../WishListBtn/WishListBtn";
import { useState } from "react";
function ProductOverview(props) {
  const productId = props.id;
  const { wishListState, setWishListState } = props; //flag of whether is item is wishlisted from parent component
  return (
    <div className='product-overview' id={productId}>
      <ul className='product-overview__images-container'>
        <WishListBtn
          wishListState={wishListState}
          setWishListState={setWishListState}
        />
        <ProductImage
          image={`./assets/images/productImages/productimage1.png`}
        ></ProductImage>
        <ProductImage
          image={`./assets/images/productImages/productimage1.png`}
        ></ProductImage>
        <ProductImage
          image={`./assets/images/productImages/productimage1.png`}
        ></ProductImage>
      </ul>
      <div className='product-overview__user-reviews'>
        <h3 className='product-overview__user-reviews__heading'>
          review (102)
        </h3>
        <ul className='product-overview__user-reviews__container'>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </ul>
        <a
          href='/'
          aria-label='show more reviews'
          className='product-overview__user-reviews__see-more-reviews-btn'
        >
          See All Reviews
        </a>
      </div>
      <MoreProducts heading='more products'></MoreProducts>
    </div>
  );
}

export default ProductOverview;

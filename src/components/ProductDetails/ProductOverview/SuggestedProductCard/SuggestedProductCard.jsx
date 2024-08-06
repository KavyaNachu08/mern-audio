import "./SuggestedProductCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function SuggestedProductCard(props) {
  const productName = props.productName; // name of the product
  const productPrice = props.productPrice; //price of the product
  const hasRatingDetails = props.hasRatingDetails; //a flag that shows whether product rating is shown
  return (
    <Link
      to="/productdetails"
      className="suggested-product-card"
      title={productName}
      aria-label={productName}
    >
      <div className="suggested-product-card__image">
        <img
          src="./assets/images/productImages/suggestedProductImage1.png"
          alt="suggested product"
        />
      </div>
      <h3 className="suggested-product-card__title">{productName}</h3>
      <span className="suggested-product-card__price">USD {productPrice}</span>
      {hasRatingDetails && (
        <div className="suggested-product-card__rating-container">
          <div className="suggested-product-card__rating-container__rating-review">
            <div className="rating">
              <span className="rating__star-icon">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.50002 1.41666L6.91627 4.28583L10.0834 4.74875L7.79169 6.98083L8.33252 10.1342L5.50002 8.64458L2.66752 10.1342L3.20835 6.98083L0.916687 4.74875L4.08377 4.28583L5.50002 1.41666Z"
                    fill="#FFC120"
                  />
                </svg>
              </span>
              <span className="rating-value">4.2</span>
            </div>
            <span className="reviews">86 Reviews</span>
          </div>
          <span className="suggested-product-card__rating-container__option-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10C10.8334 9.53977 10.4603 9.16667 10.0001 9.16667C9.53984 9.16667 9.16675 9.53977 9.16675 10C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z"
                stroke="#7F7F7F"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0001 5C10.4603 5 10.8334 4.62691 10.8334 4.16667C10.8334 3.70643 10.4603 3.33334 10.0001 3.33334C9.53984 3.33334 9.16675 3.70643 9.16675 4.16667C9.16675 4.62691 9.53984 5 10.0001 5Z"
                stroke="#7F7F7F"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0001 16.6667C10.4603 16.6667 10.8334 16.2936 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2936 9.53984 16.6667 10.0001 16.6667Z"
                stroke="#7F7F7F"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      )}
    </Link>
  );
}

export default SuggestedProductCard;

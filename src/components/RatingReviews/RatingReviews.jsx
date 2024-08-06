import "./RatingReviews.scss";
function RatingReviews(props) {
  const totalRatings = props.totalRatings; // total ratings for the product
  const rating = props.productRating; // rating of the product

  return (
    <div className="rating-review-settings-wrapper">
      <div className="rating-review-settings-wrapper__rating-review">
        <div className="rating-review-settings-wrapper__rating-review__rating">
          <div className="star-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99998 1.33333L10.06 5.50666L14.6666 6.18L11.3333 9.42666L12.12 14.0133L7.99998 11.8467L3.87998 14.0133L4.66665 9.42666L1.33331 6.18L5.93998 5.50666L7.99998 1.33333Z"
                fill="#FFC120"
                stroke="#FFC120"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span className="rating">{rating}</span>
        </div>
        <span className="rating-review-settings-wrapper__rating-review__reviews">
          {totalRatings} Reviews
        </span>
      </div>
      <div className="rating-review-settings-wrapper__option-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10C10.8334 9.53976 10.4603 9.16667 10 9.16667C9.53978 9.16667 9.16669 9.53976 9.16669 10C9.16669 10.4602 9.53978 10.8333 10 10.8333Z"
            stroke="#7F7F7F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 5C10.4603 5 10.8334 4.6269 10.8334 4.16667C10.8334 3.70643 10.4603 3.33333 10 3.33333C9.53978 3.33333 9.16669 3.70643 9.16669 4.16667C9.16669 4.6269 9.53978 5 10 5Z"
            stroke="#7F7F7F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 16.6667C10.4603 16.6667 10.8334 16.2936 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53978 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2936 9.53978 16.6667 10 16.6667Z"
            stroke="#7F7F7F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default RatingReviews;

import "./ReviewCard.scss";

function ReviewCard(props) {
  return (
    <li className="review-card">
      <div className="review-card__user-image">
        <img src="./assets/images/userImage.png" alt="image of user" />
      </div>
      <div className="review-card__content">
        <div className="review-card__content__name-time-wrapper">
          <div className="name-rating-wrapper">
            <h3 className="user-name">madelina</h3>
            <span className="time">1 Month ago</span>
          </div>
          <ul className="rating">
            <li>
                <img src="./assets/images/starFilled.png" alt="" />
            </li>
            <li>
                <img src="./assets/images/starFilled.png" alt="" />
            </li>
            <li>
                <img src="./assets/images/starFilled.png" alt="" />
            </li>
            <li>
                <img src="./assets/images/starFilled.png" alt="" />
            </li>
            <li>
                <img src="./assets/images/starFilled.png" alt="" />
            </li>
            
            
          </ul>
        </div>
        <p className="review-card__content__review">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="review-card__content__images">
            <li className="review-product-image-wrapper">
                <img src="./assets/images/reviewProductImage.png" alt="" />

            </li>
            <li className="review-product-image-wrapper">
                <img src="./assets/images/reviewProductImage.png" alt="" />

            </li>
            <li className="review-product-image-wrapper">
                <img src="./assets/images/reviewProductImage.png" alt="" />

            </li>
        </ul>
      </div>
    </li>
  );
}

export default ReviewCard;

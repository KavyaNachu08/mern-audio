import "./PopularProductCard.scss";
import RatingReviews from "../RatingReviews/RatingReviews";
function PopularProductCard(props) {
  const productName = props.productName; //name of the product
  const productImage = props.productImage; //path of the image of product
  const productPrice = props.productPrice; // price of the product

  return (
    <li className="popular-product-card">
      <a
        href="/"
        title={productName}
        className="popular-product-card__container"
      >
        <div className="popular-product-card__container__image-wrapper">
          <img src={productImage} alt="the product" />
        </div>
        <div className="popular-product-card__contents">
          <a
            href="/"
            className="popular-product-card__contents__name"
            aria-label={productName}
          >
            {productName}
          </a>
          <span className="popular-product-card__contents__price">
            USD {productPrice}
          </span>
          <RatingReviews totalRatings={86} productRating={4.2}></RatingReviews>
        </div>
      </a>
    </li>
  );
}

export default PopularProductCard;

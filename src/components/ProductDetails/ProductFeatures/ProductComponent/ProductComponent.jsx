import "./ProductComponent.scss";

function ProductComponent(props) {
  return (
    <li className="product-component-card">
      <div className="product-component-card__image">
        <img
          src="./assets/images/productImages/productComponentImages/componentImage1.png"
          alt="component of the product"
        />
      </div>
      <div className="product-component-card__content">
        <h2 className="product-component-card__content__title">
          aptx hd wirelss audio
        </h2>
        <p className="product-component-card__content__description">
          The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better
          than CD quality.
        </p>
      </div>
    </li>
  );
}

export default ProductComponent;

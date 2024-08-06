import "./ProductActionButtonWithArrow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function ProductActionButtonWithArrow(props) {
  const buttonText = props.buttonText; //text inside the button
  const ariaLabelText = props.ariaLabelText; //aria label of the button
  const title = props.title; //title of the button
  return (
    <div className="product-action-button-with-arrow-wrapper">
      <a
        href="/"
        aria-label={ariaLabelText}
        title={title}
        className="product-action-button-with-arrow-wrapper__button"
      >
        <span className="product-action-button-with-arrow-wrapper__button__text">
          {buttonText}
        </span>

        <span className="product-action-button-with-arrow-wrapper__button__icon">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </a>
    </div>
  );
}
export default ProductActionButtonWithArrow;

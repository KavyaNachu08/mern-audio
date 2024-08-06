import "./ProductFeatures.scss";
import ProductComponent from "./ProductComponent/ProductComponent";
function ProductFeatures(props) {
  const productId = props.id;
  return (
    <div className="product-features" id={productId}>
      <h3 className="product-features__title">highly detailed audio</h3>
      <p className="product-features__description">
        The speaker unit contains a diaphragm that is precision-grown from NAC
        Audio bio-cellulose, making it stiffer, lighter and stronger than
        regular PET speaker units, and allowing the sound-producing diaphragm to
        vibrate without the levels of distortion found in other speakers.{" "}
      </p>
      <ul className="product-features__components">
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
      </ul>
    </div>
  );
}

export default ProductFeatures;

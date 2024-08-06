import "./MoreProducts.scss";
import SuggestedProductCard from "../ProductDetails/ProductOverview/SuggestedProductCard/SuggestedProductCard";
function MoreProducts(props) {
  const heading = props.heading;
  return (
    <div className="more-products">
      <div className="more-products__heading-container">
        <h3 className="heading">{heading}</h3>
        <a href="#">see all</a>
      </div>
      <ul className="more-products__more-product-list">
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={false}
        ></SuggestedProductCard>
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={false}
        ></SuggestedProductCard>
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={false}
        ></SuggestedProductCard>
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={false}
        ></SuggestedProductCard>
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={false}
        ></SuggestedProductCard>
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={false}
        ></SuggestedProductCard>
      </ul>
    </div>
  );
}

export default MoreProducts;

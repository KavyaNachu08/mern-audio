import "./SearchProductPage.scss";
import TitleComp from "../../components/TitleComp/TitleComp";
import LatestSearchItem from "../../components/LatestSeachItem/LatestSeachItem";
import {
  faChevronLeft,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import PopularProductCard from "../../components/PopularProductCard/PopularProductCard";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
function SearchProductPage(props) {
  return (
    <div className="search-product-page">
      <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        state="show"
        title="Search"
        rightIcon={faCartShopping}
        rightPath = "/cart"
      ></TitleComp>
      <SearchComponent searchPageRedirect={false}></SearchComponent>
      <div className="search-product-page__latest-search">
        <h2 className="search-product-page__latest-search__heading">
          Latest Search
        </h2>
        <ul className="search-product-page__latest-search__list">
          <LatestSearchItem itemText="TMA2 Wireless"></LatestSearchItem>
          <LatestSearchItem itemText="Cable"></LatestSearchItem>
        </ul>
      </div>
      <div className="search-product-page__popular-products-container">
        <h2 className="search-product-page__popular-products-container__heading">
          Popular Product
        </h2>
        <ul className="search-product-page__popular-products-container__list">
          <PopularProductCard
            productName="TMA-2 Comfort Wireless "
            productImage="./assets/images/productImages/productImage1.png"
            productPrice={270}
          ></PopularProductCard>
          <PopularProductCard
            productName="TMA-2 Comfort Wireless "
            productImage="./assets/images/productImages/productImage1.png"
            productPrice={270}
          ></PopularProductCard>
        </ul>
      </div>
    </div>
  );
}

export default SearchProductPage;

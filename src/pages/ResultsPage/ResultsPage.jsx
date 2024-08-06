import React from "react";
import "./ResultsPage.scss";
import TitleComp from "../../components/TitleComp/TitleComp";
import PageHeaders from "../../components/PageHeaders/PageHeaders";
import FilterCategory from "../../components/FilterCategory/FilterCategory";
import SuggestedProductCard from "../../components/ProductDetails/ProductOverview/SuggestedProductCard/SuggestedProductCard";
import {
  faChevronLeft,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function ResultsPage() {
  return (
    <div className="results-page">
      <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        state=""
        title=" "
        rightIcon={faCartShopping}
        rightPath="/cart"
        leftPath='/searchPage'
      ></TitleComp>
      <PageHeaders heading="Results for" subHeading="TMA Wireless"></PageHeaders>
      <FilterCategory />
      <ul className="specified-product-list">
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />

        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
        <SuggestedProductCard
          productName="TMA-2 HD Wireless"
          productPrice={350}
          hasRatingDetails={true}
        />
      </ul>
    </div>
  );
}
export default ResultsPage;

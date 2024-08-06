import React from "react";
import Category from "./../Category/Category";
import "./FilterPage.scss";
import SortBy from "./../SortBy/SortBy";
import PriceRange from "./../PriceRange/PriceRange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FilterPage = (props) => {
  let filterData = {
    category: "headphones",
    sortby: "",
    priceRange: {
      min: 0,
      max: 100,
    },
  };

  function close() {
    props.setOpen(!props.open);
  }

  function applyFilter() {
    close();
  }
  return (
    <div className={`filter-page ${props.open ? "show" : ""}`}>
      <div className="filter-page__header">
        <h2 className="filter-page__header__title">Filter</h2>
        <button className="filter-page__header__close" onClick={close}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <Category className="filter-page__filters" />
      <SortBy className="filter-page__filters" />
      <PriceRange className="filter-page__filters" />
      <button className="filter-page__btn-apply" onClick={applyFilter}>
        Apply Filter
      </button>
    </div>
  );
};

export default FilterPage;

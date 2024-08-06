import React from "react";
import "./SortBy.scss";
import getParentComp from "../../../helpers/GetParentComp";

const SortBy = (props) => {
  function selectSort(ev) {
    ev.preventDefault();

    const sortList = getParentComp(ev, "sort-by__list");

    const prevActive = sortList.querySelector(".active");
    const currActive = getParentComp(ev, "sort-by__list__item");

    prevActive.classList.remove("active");
    currActive.classList.add("active");
  }
  return (
    <div className={`sort-by ${props.className}`}>
      <h3 className="sort-by__title">Sort By</h3>
      <ul className="sort-by__list" onClick={selectSort}>
        <li className="sort-by__list__wrapper">
          <a href="" className="sort-by__list__item active">
            Popularity
          </a>
        </li>
        <li className="sort-by__list__wrapper">
          <a href="" className="sort-by__list__item">
            Newest
          </a>
        </li>
        <li className="sort-by__list__wrapper">
          <a href="" className="sort-by__list__item">
            Oldest
          </a>
        </li>
        <li className="sort-by__list__wrapper">
          <a href="" className="sort-by__list__item">
            High Price
          </a>
        </li>
        <li className="sort-by__list__wrapper">
          <a href="" className="sort-by__list__item">
            Low Price
          </a>
        </li>
        <li className="sort-by__list__wrapper">
          <a href="" className="sort-by__list__item">
            Review
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SortBy;

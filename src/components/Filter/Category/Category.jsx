import React from "react";
import "./Category.scss";
import getParentComp from "../../../helpers/GetParentComp";

const Category = (props) => {
  function selectCategory(ev) {
    ev.preventDefault();

    const categoryList = getParentComp(ev, "category__list");

    const prevActive = categoryList.querySelector(".active");
    const currActive = getParentComp(ev, "category__list__item");

    prevActive.classList.remove("active");
    currActive.classList.add("active");
  }

  return (
    <div className={`category ${props.className}`}>
      <h3 className="category__title">Category</h3>
      <ul className="category__list" onClick={selectCategory}>
        <li className="category__list__wrapper">
          <a href="" className="category__list__item active">
            Headphone
          </a>
        </li>
        <li className="category__list__wrapper">
          <a href="" className="category__list__item">
            Headband
          </a>
        </li>
        <li className="category__list__wrapper">
          <a href="" className="category__list__item">
            Earpads
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Category;

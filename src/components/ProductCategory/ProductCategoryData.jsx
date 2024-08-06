import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ProductCategoryData.scss";

export default function CategoryData({data}) {

    return (
        <ul className="category-data">
            { data.map((eachItem,index) => 
                <li className="category-data__item" key={index}>
                    <div className="category-data__item__text">
                        <h3>{eachItem.title}</h3>
                        <a href="#">Shop now <FontAwesomeIcon className="category-data__item-btn-icon" aria-hidden="true" icon={faArrowRight} /></a>
                    </div>
                    <div className="category-data__item__media">
                        <img src={eachItem.img} alt="Product Image" />
                    </div>
                </li>)
            }
      </ul>
    )
}
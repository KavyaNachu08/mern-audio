import "./LatestSearchItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faXmark } from "@fortawesome/free-solid-svg-icons";

function LatestSearchItem(props) {
  const itemText = props.itemText; //recent searched item

  return (
    <li className="latest-search-item">
      <a
        href="/"
        className="latest-search-item__link"
        aria-label={itemText}
        title={itemText}
      >
        <div className="latest-search-item__link__icon-text-wrapper">
          <FontAwesomeIcon icon={faClock} />
          <span className="latest-search-item__link__icon-text-wrapper__text">
            {itemText}
          </span>
        </div>
        <FontAwesomeIcon icon={faXmark} />
      </a>
    </li>
  );
}

export default LatestSearchItem;

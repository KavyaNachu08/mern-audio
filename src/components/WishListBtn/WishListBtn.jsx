// WishListBtn.jsx
import "./WishListBtn.scss";
import { faHeart as notWishlistedHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as wishlistedHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WishListBtn(props) {
  const { wishListState, setWishListState } = props;

  const wishListItem = () => {
    setWishListState(!wishListState);
  };
  return (
    <div className='wish-list-btn' onClick={wishListItem}>
      {wishListState ? (
        <FontAwesomeIcon icon={wishlistedHeart} className='wish-listed' />
      ) : (
        <FontAwesomeIcon
          icon={notWishlistedHeart}
          className='not-wish-listed'
        />
      )}
    </div>
  );
}

export default WishListBtn;

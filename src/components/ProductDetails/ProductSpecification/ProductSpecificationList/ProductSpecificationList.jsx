import "./ProductSpecificationList.scss";

function ProductSpecificationList(props) {
  return (
    <ul className="product-specification-list">
      <li className="product-specification-list__item">
        <span className="category list-text">category</span>
        <span className="category-text list-text">headphone</span>
      </li>
      <li className="product-specification-list__item">
        <span className="category list-text">headphone type</span>
        <span className="category-text list-text">hybrid ANC</span>
      </li>
      <li className="product-specification-list__item">
        <span className="category list-text">driver size</span>
        <span className="category-text list-text">40 mm drivers</span>
      </li>
      <li className="product-specification-list__item">
        <span className="category list-text">playing time</span>
        <span className="category-text list-text">
          65 hours (54 Hours with ANC)
        </span>
      </li>
      <li className="product-specification-list__item">
        <span className="category list-text">charging time</span>
        <span className="category-text list-text">1 hour</span>
      </li>
      <li className="product-specification-list__item">
        <span className="category list-text">noise cancellation</span>
        <span className="category-text list-text">upto 33db</span>
      </li>
      <li className="product-specification-list__item">
        <span className="category list-text">for consumer complaints</span>
        <span className="category-text list-text">
          022-6918-1920 info@imaginemarketingindia.com Imagine Marketing Limited
          Address: Unit No. 204&205, D-wing & E-wing, Corporate Avenue, Andheri
          Ghatkopar Link Road, Andheri East, Mumbai-400093
        </span>
      </li>
    </ul>
  );
}

export default ProductSpecificationList;

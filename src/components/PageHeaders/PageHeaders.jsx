import React from "react";
import "./PageHeaders.scss";


function PageHeaders(props) {
    const heading = props.heading; //heading 
    const subHeading= props.subHeading; //subheading
  return (
    <div className="page-title-container">
      <h2 className="page-title-container__main-heading">{heading}</h2>
      <span className="page-title-container__sub-heading">{subHeading}</span>
    </div>
  );
}
export default PageHeaders;

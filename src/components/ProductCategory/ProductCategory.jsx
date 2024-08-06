import { useState } from "react";
import data from "./fakeData";
import CategoryHeader from "./CategoryHeader";
import ProductCategoryData from'./ProductCategoryData';


export default function ProductCategory() {
    const [activeButton, setActiveButton] = useState("Headphone");

    function changeCategoryData(selectedButton) {
        setActiveButton(() => selectedButton);
    }


    return(
        <>
           <CategoryHeader headerData={data.headerData} activeButton={activeButton} changeCategoryData={changeCategoryData}/>
           <ProductCategoryData data={data.categoryData[activeButton]}/>
        </>
    )
}

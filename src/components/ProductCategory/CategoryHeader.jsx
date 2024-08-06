import "./CategoryHeader.scss";

export default function CategoryHeader({headerData, activeButton, changeCategoryData}) {
    console.log(headerData)

    function categoryButtonHandler(event) {
        changeCategoryData(event.target.getAttribute('data-category'));
    }

    return (
        <menu className="category-header">
            { headerData.map((data, index) => 
                <button key={index} className={`category-header__button ${activeButton===data ? 'category-header__button--active':undefined}`} data-category={data} onClick={categoryButtonHandler}>{data}</button>
            )}
        </menu>
    )
}
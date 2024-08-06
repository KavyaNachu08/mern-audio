import './ProductImage.scss';

function ProductImage(props)
{
    const image = props.image;
    
    return(
        <li className='product-image'>
            <img src={image} alt="image of the product" />
        </li>
    )
}

export default ProductImage;
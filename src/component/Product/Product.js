import './product.css';

export default function Product ({ image_url, title }) {
    return (
        <div className='product-container'>
            <img src={image_url} alt='product picture' className='product-img'/>
            <h3>{title}</h3>
            <span className='product-detail'>product detail</span>
        </div>
    )
}
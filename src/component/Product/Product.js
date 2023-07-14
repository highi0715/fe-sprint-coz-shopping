import './product.css';

export default function Product ({ image_url, title, type, products }) {
    // return (
    //     // <div className='product-container'>
    //     //     <img src={image_url} alt='product picture' className='product-img'/>
    //     //     <h3>{title}</h3>
    //     //     <span className='product-detail'>product detail</span>
    //     // </div>
        
    // )
    switch (type) {
        case "Product":
            return ( 
                <div className='product-container'>
                    <img src={image_url} alt='product picture' className='product-img'/>
                    <div className='product-title'>
                        <h3>{title}</h3>
                        <span className='discount-percent'>{products.discountPercentage}%</span>
                    </div>
                    <div className='price'>{products.price}원</div>
                </div>
            )
            
            
        case "Category":
            return (
                <div className='product-container'>
                    <img src={image_url} alt='product picture' className='product-img'/>
                    <h3>#{title}</h3>
                    <br/>
                </div>
            )
        case "Exhibition":
            return (
                <div className='product-container'>
                    <img src={image_url} alt='product picture' className='product-img'/>
                    <h3>{title}</h3>
                    <div className='sub-title'>{products.sub_title}</div>
                </div>
            )
        case "Brand":
            return (
                <div className='product-container'>
                    <img src={products.brand_image_url} alt='product picture' className='product-img'/>
                    <h3 className='brand-title'>
                        <span>{products.brand_name}</span>
                        <span>관심고객수</span>
                    </h3>
                    <div className='follower'>{products.follower}</div>
                </div>
            )       
    }
}
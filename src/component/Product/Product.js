import './product.css';
import React,{useMemo} from 'react';

export default function Product ({ image_url, title, type, products, bookmarkedProducts , updateBookmarkedProducts, }) {
    const price = new Intl.NumberFormat().format(products.price);
    const follower = new Intl.NumberFormat().format(products.follower);
    const isBookmarked = useMemo(() => {
        return bookmarkedProducts.some((p) => p.id === products.id);
      }, [bookmarkedProducts, products.id]);
    
    
    const toggleBookmark = () => {
        if (isBookmarked) {
          updateBookmarkedProducts(products.id, "remove");
        } else {
          updateBookmarkedProducts(products.id, "add");
        }
      };

    switch (type) {
        case "Product":
            return ( 
                <div className='product-container' key={products.id}>
                    <div className='img-wrap'>
                        <img src={image_url} alt='product picture' className='product-img'/>
                        <img src = {isBookmarked ? '/images/bookmarkOn.png' : '/images/bookmarkOff.png'} className='bookmark' onClick={toggleBookmark}/>
                    </div>
                    <div className='product-title'>
                        <h3>{title}</h3>
                        <span className='discount-percent'>{products.discountPercentage}%</span>
                    </div>
                    <div className='price'>{price}원</div>
                </div>
            )
            
            
        case "Category":
            return (
                <div className='product-container'>
                    <div className='img-wrap'>
                        <img src={image_url} alt='product picture' className='product-img'/>
                        <img src = {isBookmarked ? '/images/bookmarkOn.png' : '/images/bookmarkOff.png'} className='bookmark' onClick={toggleBookmark}/>
                    </div>
                    <h3>#{title}</h3>
                    <br/>
                </div>
            )
        case "Exhibition":
            return (
                <div className='product-container'>
                    <div className='img-wrap'>
                        <img src={image_url} alt='product picture' className='product-img'/>
                        <img src = {isBookmarked ? '/images/bookmarkOn.png' : '/images/bookmarkOff.png'} className='bookmark' onClick={toggleBookmark}/>
                    </div>
                    <h3>{title}</h3>
                    <div className='sub-title'>{products.sub_title}</div>
                </div>
            )
        case "Brand":
            return (
                <div className='product-container'>
                    <div className='img-wrap'>
                        <img src={products.brand_image_url} alt='product picture' className='product-img'/>
                        <img src = {isBookmarked ? '/images/bookmarkOn.png' : '/images/bookmarkOff.png'} className='bookmark' onClick={toggleBookmark}/>
                    </div>
                    <h3 className='brand-title'>
                        <span>{products.brand_name}</span>
                        <span>관심고객수</span>
                    </h3>
                    <div className='follower'>{follower}</div>
                </div>
            )       
    }
}
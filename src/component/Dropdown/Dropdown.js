import React from 'react';
import "./dropdown.css";   
import { Link } from 'react-router-dom';

export default function Dropdown ({ onAnimationEnd }) {
     return (
        <ul className="dropdown-menu fade-in" onAnimationEnd={onAnimationEnd}>
            <li className="hello-li">승연님, 안녕하세요!</li>
            <Link to = "/products/list" className="product-li"> 
                <div>
                    <img src="/images/productIcon.png" alt="product icon" />
                    <span>상품리스트 페이지</span>
                </div></Link>
            <Link to = "/bookmark" className="bookmark-li"> 
                <div>
                    <img src="/images/bookmarkIcon.png" alt="bookmark icon" />
                    <span>북마크 페이지</span>
                </div>
            </Link>
        </ul>
    )
}
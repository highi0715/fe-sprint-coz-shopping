import "./filter.css";





export default function Filter() {
    return (
        <ul>
            <li>
                <img src="/images/all.png" alt="all" />
                <span>전체</span>
            </li>
            <li>
                <img src="/images/product.png" alt="product" />
                <span>상품</span>
            </li>
            <li>
                <img src="/images/category.png" alt="category" />
                <span>카테고리</span>
            </li>
            <li>
                <img src="/images/gift.png" alt="gift" />
                <span>기획전</span>
            </li>
            <li>
                <img src="/images/brand.png" alt="brand" />
                <span>브랜드</span>
            </li>
        </ul>
    )
}
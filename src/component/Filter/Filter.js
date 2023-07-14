import "./filter.css";

export default function Filter() {
    return (
        <ul>
            <li>
                <img src="all.png" alt="all" />
                <span>전체</span>
            </li>
            <li>
                <img src="product.png" alt="product" />
                <span>상품</span>
            </li>
            <li>
                <img src="category.png" alt="category" />
                <span>카테고리</span>
            </li>
            <li>
                <img src="gift.png" alt="gift" />
                <span>기획전</span>
            </li>
            <li>
                <img src="brand.png" alt="brand" />
                <span>브랜드</span>
            </li>
        </ul>
    )
}
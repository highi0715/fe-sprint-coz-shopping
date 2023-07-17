import Product from "../component/Product/Product"
import "./main.css"
import { Link } from "react-router-dom";

export default function Main({products, bookmarkedProducts, updateBookmarkedProducts}) {
    const selectedData = products.slice(0,4);
    const selectedBookmarkData = bookmarkedProducts.slice(0,4);
    return (
        <section>
            <Link to = "/products/list" className="list-title">상품 리스트</Link>
            <ul>
            {selectedData.map((product) => (
                <Product
                    key={product.id}
                    image_url={product.image_url}
                    title={product.title}
                    type={product.type}
                    products={product}
                    bookmarkedProducts={bookmarkedProducts}
                    updateBookmarkedProducts={updateBookmarkedProducts}
                />
            ))}
            </ul>
            <Link to="/bookmark"className="list-title">북마크 리스트</Link>
            <ul>
            {selectedBookmarkData.map((product) => (
                <Product
                    key={product.id}
                    image_url={product.image_url}
                    title={product.title}
                    type={product.type}
                    products={product}
                    bookmarkedProducts={bookmarkedProducts}
                    updateBookmarkedProducts={updateBookmarkedProducts}
                />
            ))}
            </ul>
        </section>
    )
}
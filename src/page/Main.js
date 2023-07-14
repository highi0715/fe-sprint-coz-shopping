import Product from "../component/Product/Product"
import "./main.css"
import { Link } from "react-router-dom";
export default function Main({products}) {
    const selectedData = products.slice(0,4);
    return (
        <section>
            <Link to = "/products/list" className="list-title">상품 리스트</Link>
            <ul>
            {selectedData.map((products) => {
                return <Product key={products.id} title={products.title} image_url={products.image_url} type={products.type}
                products={products}></Product>
            })}
            </ul>
            <Link to="/bookmark"className="list-title">북마크 리스트</Link>
        </section>
    )
}
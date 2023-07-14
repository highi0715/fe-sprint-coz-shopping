import Product from "../component/Product/Product"
import "./main.css"

export default function Main({products}) {
    return (
        <section>
            <div className="list-title">상품 리스트</div>
            <ul>
            {products.map((products) => {
                return <Product key={products.id} title={products.title} image_url={products.image_url} type={products.type}
                products={products}></Product>
            })}
            </ul>
            <div className="list-title">북마크 리스트</div>
        </section>
    )
}
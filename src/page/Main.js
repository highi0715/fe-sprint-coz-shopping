import Header from "../component/Header/Header"
import Footer from "../component/Footer/Footer"
import Product from "../component/Product/Product"
import "./main.css"

export default function Main({products}) {
    return (
        <section>
            <Header />
            <div className="list-title">상품 리스트</div>
            <ul>
            {products.map((products) => {
                return <Product key={products.id} title={products.title} image_url={products.image_url}></Product>
            })}
            </ul>
            <div className="list-title">북마크 리스트</div>
            <Footer />
        </section>
    )
}
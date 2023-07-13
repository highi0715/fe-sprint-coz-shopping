import Header from "../component/Header"
import Footer from "../component/Footer"
import Filter from "../component/Filter"
import "./main.css"

export default function Main() {
    return (
        <section>
            <Header />
            <div className="list-title">상품 리스트</div>
            <Filter/>
            <div className="list-title">북마크 리스트</div>
            <Footer />
        </section>
    )
}
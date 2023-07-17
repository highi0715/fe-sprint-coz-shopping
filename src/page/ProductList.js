import Filter from "../component/Filter/Filter";
import Product from "../component/Product/Product";
import "./productList.css";

export default function ProductList({products, bookmarkedProducts, updateBookmarkedProducts}) {
    return (
        <section>
            <Filter />
            <ul className="product-list">
                {products.map((product) => {
                return <Product 
                key={product.id}
                image_url={product.image_url}
                title={product.title}
                type={product.type}
                products={product}
                bookmarkedProducts={bookmarkedProducts}
                updateBookmarkedProducts={updateBookmarkedProducts} />
            })}
            </ul>
        </section>
    )
}
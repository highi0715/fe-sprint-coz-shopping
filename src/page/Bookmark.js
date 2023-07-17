import Filter from "../component/Filter/Filter"
import Product from "../component/Product/Product"

export default function Bookmark({ bookmarkedProducts, updateBookmarkedProducts }) {
    return (
        <section>
            <Filter />
            <ul className="product-list"> {bookmarkedProducts.map((product) => (
            <Product
                key={product.id}
                image_url={product.image_url}
                title={product.title}
                type={product.type}
                products={product}
                bookmarkedProducts={bookmarkedProducts}
                updateBookmarkedProducts={updateBookmarkedProducts} />
      ))}</ul>
        </section>
    )
}
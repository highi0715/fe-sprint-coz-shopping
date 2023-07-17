import Main from "./page/Main";
import "./bass.css";
import { useEffect, useState } from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./page/ProductList";
import Bookmark from "./page/Bookmark";

function App() {
  const [products, setProducts] = useState([]);
  const [bookmarkedProducts, setBookmarkedProducts] = useState(() => {
    const storedBookmarkedProducts = localStorage.getItem("bookmarkedProducts");
    return storedBookmarkedProducts ? JSON.parse(storedBookmarkedProducts) : [];
  });

  useEffect(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => res.json())
    .then(json => {
      setProducts(json)
    })
  },[])

  const updateBookmarkedProducts = (productId, action) => {
    if (action === "add") {
      // 상품 추가
      setBookmarkedProducts((prevState) => [
        ...prevState,
        products.find((product) => product.id === productId),
      ]);
    } else if (action === "remove") {
      // 상품 제거
      setBookmarkedProducts((prevState) =>
        prevState.filter((product) => product.id !== productId)
      );
    }
  };

  useEffect(() => {
    // 최초 실행 시 로컬 스토리지에서 아이템을 가져옴
    if (!bookmarkedProducts.length) {
      const storedBookmarkedProducts = localStorage.getItem("bookmarkedProducts");
      if (storedBookmarkedProducts) {
        setBookmarkedProducts(JSON.parse(storedBookmarkedProducts));
      }
    } else { // 그렇지 않다면 변경된 bookmarkedProducts를 저장
      localStorage.setItem("bookmarkedProducts", JSON.stringify(bookmarkedProducts));
    }
  }, [bookmarkedProducts]);


  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Routes>
      <Route path="/" element={<Main key={products.id} products={products} bookmarkedProducts={bookmarkedProducts}
          updateBookmarkedProducts={updateBookmarkedProducts} />}/>
      <Route path="/products/list" element={<ProductList key={products.id} products={products} bookmarkedProducts={bookmarkedProducts}
          updateBookmarkedProducts={updateBookmarkedProducts} />}/>
      <Route path="/bookmark" element={<Bookmark  bookmarkedProducts={bookmarkedProducts}
            updateBookmarkedProducts={updateBookmarkedProducts}/>}/>
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

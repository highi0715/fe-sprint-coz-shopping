import Main from "./page/Main";
import "./bass.css";
import { useEffect, useState } from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ProductList from "./page/ProductList";
import Bookmark from "./page/Bookmark";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => res.json())
    .then(json => {
      setProducts(json)
    })
  },[])

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Main key={products.id} products={products} />}/>
      <Route path="/products/list" element={<ProductList />}/>
      <Route path="/bookmark" element={<Bookmark />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

import Main from "./page/Main";
import "./bass.css";
import { useEffect, useState } from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";


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
    <div className="App">
      <Header />
      <Main key={products.id} products={products}></Main>
      <Footer />
    </div>
  );
}

export default App;

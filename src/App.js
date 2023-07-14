import Main from "./page/Main";
import "./bass.css";
import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
    .then(res => res.json())
    .then(json => {
      setProducts(json)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Main key={products.id} products={products}></Main>
      </header>
    </div>
  );
}

export default App;

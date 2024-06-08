import { useState } from "react";
import "./css/App.css";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";

function App() {
  const [products] = useState([
    { id: 1, name: "사과", price: 1000 },
    { id: 2, name: "바나나", price: 500 },
    { id: 3, name: "체리", price: 2000 },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>서머의 쇼핑카트</h1>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </header>
    </div>
  );
}

export default App;

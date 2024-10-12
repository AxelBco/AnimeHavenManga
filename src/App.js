import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; 
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ItemDetailContainer addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;

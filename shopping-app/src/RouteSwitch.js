import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Products from "./Products/Products.js"
import Cart from "./Cart/Cart";
import Item from "./Item/Item";
import wines from "./wines.js";
import Header from "./Header";
import Footer from "./Footer";


const RouteSwitch = () => {
  const [products, setProducts] = useState([]);
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    setProducts(wines);
  }, [])

  const getProductById = (id) => (
    products.find(product => product.id === id)
  );

  const handleAddToCart = (id, newAmount) => {
    if(cart.find(cartItem => cartItem.id === id)){
      setCart(cart => cart.map(cartItem => {
        if(cartItem.id === id) return {...cartItem, amount: cartItem.amount + newAmount}
        return cartItem
      }));
      return;
    }
    setCart([...cart, {...getProductById(id), amount: newAmount}])
  }

  const reducer = (acc, current) => acc + current;

  const getCartSize = () => (
    cart.map(cartItem => cartItem.amount).reduce(reducer, 0)
  );

  const getCartTotal = () => (
    cart.map(cartItem => (cartItem.price * cartItem.amount)).reduce(reducer,0).toFixed(2)
  );

  const handleCartDelete = (id) => {
    setCart(cart.filter(cartItem => cartItem.id !== id))
  };

  return (
    <BrowserRouter basename="/shopping-cart/">
      <Header getCartSize={getCartSize}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products wines={products}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} getCartTotal={getCartTotal} getCartSize={getCartSize} handleCartDelete={handleCartDelete} />} />
        {wines.map((wine) => (
          <Route key={wine.id} path={`/products/${wine.url}`} element={<Item item={wine} handleAddToCart={handleAddToCart} />}/>
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
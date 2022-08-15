import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Products from "./Products/Products.js"
import Cart from "./Cart/Cart";
import Item from "./Item/Item";
import wines from "./wines.js";

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(wines);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products wines={products}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {wines.map((wine) => (
          <Route key={wine.id} path={`/shop/${wine.id}`} element={<Item item={wine} />}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
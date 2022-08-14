import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Products from "./Products/Products.js"
import Cart from "./Cart/Cart";
import products from "./wines.js";

const RouteSwitch = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    setWines(products);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products wines={wines}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
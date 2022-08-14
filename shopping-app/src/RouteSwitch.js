import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Products from "./Products/Products.js"
import Cart from "./Cart/Cart"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
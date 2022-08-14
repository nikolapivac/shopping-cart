import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import CallToAction from "./CallToAction";
import Info from "./Info";
import Testimonies from "./Testimonies";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <CallToAction />
      <Info />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default Home;

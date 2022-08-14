import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import CallToAction from "./CallToAction";
import Info from "./Info";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <CallToAction />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;

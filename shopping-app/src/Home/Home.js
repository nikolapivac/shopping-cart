import React from "react";
import CallToAction from "./CallToAction";
import Info from "./Info";
import Testimonies from "./Testimonies";

const Home = () => {
  return (
    <div className="Home">
      <CallToAction />
      <Info />
      <Testimonies />
    </div>
  );
}

export default Home;

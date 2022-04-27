/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Info from "../components/Info";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src="/profile.jpg" className="img-fluid" />
          <Info />
        </div>
        <div className="col-md-9 position-relative">
          <div className="container mt-4">
            <Content />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

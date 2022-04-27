/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Info from "../components/Info";
import styles from "./ProductServicesPage.module.css";

function ProductsServicesPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src="/profile.jpg" className="img-fluid" />
          <Info />
        </div>
        <div className="col-md-9">
          <div className="container mt-4">
            <h1 className="text-info">
              Products & Services{" "}
              <Link
                className={
                  "btn btn-info text-light rounded-pill px-4 py-2" +
                  styles.float_end
                }
                to="/"
              >
                Back to Portfolio
              </Link>
            </h1>
            <p>
              These are the lists of my products and service that I have
              rendered all through out my career of being a Developer. Some of
              the projects are Made out of my passion in creating Application.
              Others are made through my Duty as a Freelance and Employee
            </p>

            {/* cards */}
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a short card.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end cards */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsServicesPage;

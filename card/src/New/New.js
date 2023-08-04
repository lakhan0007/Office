import React from "react";
import "./New.css";
import image from "./image.png";
import logo from "./logo2.png";

export default function New() {
  return (
    <>
      <div className="container pt-5">
        <div className="row column-rev">
          <div className="col-md-6 ">
            <div className="logo">
              <img
                src={logo}
                alt="BigCo Inc. logo"
                className="mb-logo-sz img-fluid"
              />
            </div>
            <div className="head">
              <h1>COMING</h1>
              <p>SOON</p>
            </div>
            <div className="icon">
              <p>+91- 9664073873 | </p>
              <a href="https://www.facebook.com/diwamjewels">
                <i class="fa-brands fa-facebook" />
              </a>
              <a href="https://twitter.com/DiwamJewels">
                <i class="fa-brands fa-twitter" />
              </a>
              <a href="https://www.instagram.com/diwamjewels/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="add">
              <p>
                <b> Showroom Address : </b> 101 Ground Floor, Gurukripa Enclave,
                pump, <br /> Near Old Ramgarh Mod Bus Stand , IndusInd Bank,
                302002, JAIPUR
              </p>

              <h2> https://diwamjewels.com/</h2>
            </div>
          </div>
          <div className="col-md-6">
            {/* <div className="img"> */}
            <img
              src={image}
              alt="BigCo Inc. logo"
              className="img-fluid image-product"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

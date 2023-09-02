import React from "react";
import "./order.css";
import img1 from "./1.webp";
import img2 from "./2.png";

export default function order() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 box">
            {/* <div className="box-1"></div> */}
            <OrderFilter />
          </div>
          <div className="col-md-10">
            <OrderSearch />
            <OrderBox />
          </div>
        </div>
      </div>
    </>
  );
}

const OrderFilter = () => {

  return (
    <>
      <h3>Filters</h3>
      <hr />

      <form className="checkbox" >
        <p className="head-1"> <b>ORDER STATUS </b></p>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        />{" "}
        &#160;
        <label for="vehicle1">On the way</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />{" "}
        &#160;
        <label for="vehicle2"> Delivered</label>
        <br />
        <input  
          type="checkbox"
          name="vehicle3"
        />
        &#160;
        <label for="vehicle3"> cancelled</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="Boat"
        />{" "}
        &#160;
        <label for="vehicle3"> Returned</label>
        <br />

      <hr />
   
        <p className="head-2"><b>ORDER TIME</b></p>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        />{" "}
        &#160;
        <label for="vehicle1">Last 30 days</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />{" "}
        &#160;
        <label for="vehicle2"> 2022</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="Boat"
        />{" "}
        &#160;
        <label for="vehicle3"> 2021</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="Boat"
        />{" "}
        &#160;
        <label for="vehicle3"> 2020</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="Boat"
        />{" "}
        &#160;
        <label for="vehicle3"> 2019</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="Boat"
        />{" "}
        &#160;
        <label for="vehicle3"> Older</label>
        <br />
      </form>
    </>
  );
};

const OrderSearch = () => {
  return (
    <>
      <div className="search">
        <input type="search " placeholder="  Search your orders here" />
        <button>Search Orders</button>
      </div>
    </>
  );
};
const OrderBox = () => {
  return (
    <>  
      <div className="row box-1">
        <div className="col-2 ">
          <img src={img1} alt="" className="img-3"/>
        </div>
        <div className="col-4 order-content">
          
          <p className="order-content-1"><b> Boult Audio proBass Fcharge with 40 hrs...</b> </p>
          <p className="order-content-2"> Color: Black,Red</p>
          
         
        </div>
        <div className="col-2 order-price">
          <p> <b>₹899</b> </p>
         
        </div>
        <div className="col-4 order-address">
          <p className="order-addressp-1"> <b>Delivered on Aug 09</b> </p>
          <p className="order-addressp-2">Your item has been delivered</p>
          <p className="order-addressp-3">★ Rate & Review Product</p>
         
        </div>
        <div className="col-2 ">
          <img src={img2} alt="" className="img-3"/>
          <p></p>
        </div>
        <div className="col-4 order-content">
          
          <p className="order-content-1"><b> Extended Warranty for Headphones(1 year)</b> </p>
         
        </div>
        <div className="col-2 order-price">
          <p> <b>₹47 + <i className="bi bi-coin text-warning"/> 2</b> </p>
         
        </div>
        <div className="col-4 order-address">
          <p className="order-addressp-1"> <b>Delivered on Aug 09</b> </p>
          <p className="order-addressp-2">Your item has been delivered</p>
          {/* <p className="order-addressp-3">★ Rate & Review Product</p> */}
         
        </div>
      </div>
    </>
  );
};

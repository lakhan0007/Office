import { useState } from "react";
// import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import axios from "axios";
// import Policy from "./components/policy/Policy";
// import Condition from "./components/condiition/Condition";
// import Cancellation from "./components/cancel/Cancellation";
// import About from "./components/about/About";
// import DmjLogo from "./components/dmjLogo/New";
// import Sidebar from "./components/sidebar/Sidebar";
// import Form from "./components/form/form";
// import Contect from "./components/contectUs/ContactUs";
// import Model from "./components/model/model";
// import LoginButton from "./components/loginButton/Button"
// import OrderDetails from "./components/orderDetails/order";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/albums/";

function App() {
  const [countData, setCountryData] = useState([]);

  function fetchData() {
    axios.get(url).then((res) => {
      console.log(res.data[0]);
      setCountryData(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      {countData.map((count, index) => 
        index <= 10 && 
        <Card 
        id={count.id}
        title={count.title}
        />
        
      )}

      {/* <Policy/> */}
      {/* <Condition/> */}
      {/* <Cancellation/> */}
      {/* <About/> */}
      {/* <DmjLogo/> */}
      {/* <Form/>  */}
      {/* <Model/> */}
      {/* <Sidebar/> */}
      {/* <LoginButton/> */}
      {/* <OrderDetails/> */}
    </>
  );
}

export default App;

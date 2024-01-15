import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./top/Navbar";
import Card from "./card/Card";
import Property from "./card/Property";
import Home from "./card/Home";
import Footer from "./card/Footer";
import StaycationDetails from "./card/StaycationDetails";
import Success from "./component/Success";
import Failure from "./component/Failure";
import Razorpay from "./file/razorpay/Razorpay";
import ContactUsPage from "./card/ContactUsPage";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/razorpay" element={<Razorpay />} />
          <Route path="/card" element={<Card />} />
          <Route path="/property/:_id" element={<Property />} />
          <Route path="/propert/:_id" element={<StaycationDetails />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/failure" element={<Failure />} />
          <Route exact path="/contactuspage" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

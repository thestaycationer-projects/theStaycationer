import React from "react";
import "./HomePage.css";
import images from "../../images/tree-736885_1280.jpg";
import Component2 from "./component2";

export default function HomePage() {
  return (
    <div>
      <div className="container section-1">
        <div className="row">
          <div className="col-5 section-1a">
            <h1 className="section-1a-heading"> Stays that are for you </h1>{" "}
            <p className="section-1a-description">
              Our exclusive collection of extra - ordinary stays at magical
              locations that are hidden from plain sight.{" "}
            </p>{" "}
          </div>{" "}
          <div className="col-7 section-1b">
            <img
              className="section-1b-image"
              src="https://static.wixstatic.com/media/f58739_5188c35b39c04799bb752c8be54008a1~mv2.jpg/v1/fill/w_1154,h_753,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/INT_5683.jpg"
            />
          </div>{" "}
        </div>{" "}
      </div>
      <h1 className="container section-2"> OUR HOMES </h1>{" "}
      {/* <Component2 /> */}
    </div>
  );
}

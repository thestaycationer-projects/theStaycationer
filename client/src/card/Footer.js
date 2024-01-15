import React from "react";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(252 107 3 / 61%)" }}>
      <div className="container shadow-md ">
        <footer
          className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top"
          style={{
            fontFamily: "Marcellus, serif",
            font: "Marcellus-300",
            color: "#ffffff",
          }}
        >
          <div
            className="col mb-3"
            style={{
              fontFamily: "Marcellus, serif",
              font: "Marcellus-300",
              color: "#ffffff",
            }}
          ></div>

          <div className="col mb-3" style={{ fontSize: "1.5em" ,marginBottom: "20px"  }}>
            <h5>Top Location</h5>
            <ul
              className="nav flex-column"
              style={{
                fontFamily: "Marcellus, serif",
                font: "Marcellus-300",
                color: "#ffffff",
              }}
            >
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Dehradun
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Goa
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Mussoorie
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Bhimtal
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Leh,Ladkh
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3" style={{ fontSize: "1.5em" ,marginBottom: "20px"  }}> 
            <h5>Top Collections</h5>
            <ul
              className="nav flex-column"
              style={{
                fontFamily: "Marcellus, serif",
                font: "Marcellus-300",
                color: "#ffffff",
              }}
            >
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pet Friendly
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Beach Houses
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Couple Friendly
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  New Launched
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Romantic Hideaways
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3" style={{ fontSize: "1.5em" ,marginBottom: "20px" }}>
            <h5>Support</h5>
            <ul
              className="nav flex-column"
              style={{
                fontFamily: "Marcellus, serif",
                font: "Marcellus-300",
                color: "#ffffff",
              }}
            >
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Cancellation Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Term Of Use
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" style={{ fontSize: "1.5em" ,marginBottom: "20px" }}>
            <h5>About Us</h5>
            <ul
              className="nav flex-column"
              style={{
                fontFamily: "Marcellus, serif",
                font: "Marcellus-300",
                color: "#ffffff",
              }}
            >
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

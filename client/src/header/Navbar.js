import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail, IoIosCall } from "react-icons/io";

function Navbar() {
  // const customFontStyle = {
  //   fontFamily: "'Marcellus', sans-serif",
  // };

  return (
    <>
      <header>
        <div className="topHeader " style={{ height: "38.5px" }}>
          <nav
            className="navbar conatiner"
            style={{
              backgroundColor: "#fc6b03",
              color: "#FFFFFF",
            }}
          >
            <div
              className=" container topHeaderright d-flex"
              style={{ marginLeft: "-3px", padding: "0px 12px" }}
            >
              <ul
                className="d-flex list-unstyled"
                style={{
                  fontFamily: "Montserrat sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                <li className="mx-3">
                  <a
                    href="stay@thestaycationer.in"
                    className="text-decoration-none text-light font-weight-normal fs-6 mx-2"
                    style={{ fontSize: "18px", color: "blue" }}
                  >
                    <IoIosMail />
                    stay@thestaycationer.in
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    href="tel.+91 9999240001"
                    className="text-decoration-none text-light font-weight-normal fs-6"
                  >
                    <IoIosCall />
                    +91 9999240001
                  </a>
                </li>
              </ul>

              <div className="topHeaderright hstack gap-3">
                <ul className="d-flex list-unstyled" style={{ justifyContent: "flex-end" }}>
                  <li className="mx-3">
                    <FaFacebookF />
                  </li>
                  <li className="mx-3">
                    <FaYoutube />
                  </li>
                  <li className="mx-3">
                    <FaLinkedinIn />
                  </li>
                  <li className="mx-3">
                    <FaInstagram />
                  </li>
                  <li className="mx-3">
                    <FaTwitter />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="bottomHeader">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{
              backgroundColor: "#ffffff",
              padding: "10px 48px",
              height: "70.1px",
            }}
          >
            <div className="container-fluid">
              <img
                src="/images/logo.png"
                alt="error"
                height="150"
                width="200"
                style={{
                  objectFit: "contain",
                  verticalAlign: "middle",
                  marginLeft: "3rem",
                }}
              />
              <span style={{ fontFamily: "Marcellus" }}></span>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Properties
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active rounded"
                      style={{
                        backgroundColor: "#fc6b03",
                        color: "#FFFFFF",
                        margin: "0 5px",
                        fontFamily: "Marcellus",
                      }}
                      href="#"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active rounded"
                      style={{
                        backgroundColor: "#fc6b03",
                        color: "#FFFFFF",
                        margin: "0 5px",
                        fontFamily: "Marcellus",
                      }}
                      href="#"
                    >
                      List Your Property
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;

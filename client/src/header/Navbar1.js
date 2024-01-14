import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import {
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
export default function Navbar1() {
  return (
    <>
      <header>
        {/* TOP-HEADER-left */}
        <nav
          className="navbar"
          style={{ backgroundColor: "#fc6b03", height: "38.5px" }}
        >
          <div className="container">
            <ul className="navbar-nav ml-auto d-flex flex-row align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link text-decoration-none d-flex align-items-center"
                  href="mailto:stay@thestaycationer.in"
                  style={{
                    margin: "0 10px",
                    marginTop: "-9px",
                    color: "#ffffff",
                    fontFamily: "Montserratt, sansSerif",
                    fontSize: "18px",
                    fontWeight: "400",
                    font: "Montserratt-700",
                  }}
                >
                  <FaEnvelope className="me-2" />
                  stay@thestaycationer.in
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-decoration-none d-flex align-items-center"
                  href="tel:+91 9999240001"
                  style={{
                    margin: "0 10px",
                    marginTop: "-9px",
                    color: "#ffffff",
                    fontFamily: "Montserratt, sansSerif",
                    fontSize: "18px",
                    fontWeight: "400",
                    font: "Montserratt-700",
                  }}
                >
                  <FaPhone className="me-2" />
                  +91 9999240001
                </a>
              </li>
            </ul>
            {/* TOP-HEADER-RIGHT */}
            <ul class="nav justify-content-end ">
              <li class="nav-item bg-white">
                <a class="nav-link active" aria-current="page" href="#">
                <FaFacebookF />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <FaYoutube />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <FaLinkedinIn />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"> 
                <FaInstagram /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

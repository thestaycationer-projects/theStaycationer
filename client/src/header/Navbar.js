import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  // const customFontStyle = {
  //   fontFamily: "'Marcellus', sans-serif",
  // };

  return (
    <>
      
        
          <nav
            className="navbar conatiner"
            style={{
              backgroundColor: "#fc6b03",
              color: "#FFFFFF",
              height: "45.5px"
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
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                <li className="mx-3">
                  <a
                    href="stay@thestaycationer.in"
                    className="text-decoration-none text-light font-weight-normal fs-6 mx-2"
                    style={{ fontSize: "20px", color: "blue" }}
                  >
                    <IoIosMail style={{fontSize:"20px"}}/>
                    stay@thestaycationer.in
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    href="tel.+91 9999240001"
                    className="text-decoration-none text-light font-weight-normal fs-6"
                  >
                    <IoIosCall style={{fontSize:"20px"}}/>
                    +91 9999240001
                  </a>
                </li>
              </ul>

              <div className="topHeaderright hstack gap-3" style={{position: 'absolute',left:"78rem",bottom:"-3px"}}>
                <ul
                  className="d-flex list-unstyled"
                  style={{ justifyContent: "flex-end" }}
                >
                  <li className="mx-3">
                    <FaFacebookF style={{fontSize:"20px"}} />
                  </li>
                  <li className="mx-3">
                    <FaYoutube style={{fontSize:"20px"}} />
                  </li>
                  <li className="mx-3">
                    <FaLinkedinIn style={{fontSize:"20px"}} />
                  </li>
                  <li className="mx-3">
                    <FaInstagram style={{fontSize:"20px"}}/>
                  </li>
                  <li className="mx-3">
                    <FaTwitter style={{fontSize:"20px"}} />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      

        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
          
            <a className="navbar-brand" href="/">
              <img src="/images/logo.png" className="img-fluid" alt="" style={{height:"96px",width:"14rem", position:"absolute",top:"-17px",left:"20px"}}srcset="" />
            </a>
            <button
              className="navbar-toggler"
              style={{color:"#fc6b03" ,backgroundColor:"#fc6b03"}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{color:"#ffffff", borderColor:"#ffffff"}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/" style={{fontFamily: "Marcellus, serif",
                font: "Marcellus-300", color: "#fc6b03" ,fontSize:"19px",fontWeight:"400",marginRight: "18px" }}>
                  Home
                </Link>
                <Link className="nav-link active" aria-current="page" to="/card" style={{fontFamily: "Marcellus, serif",
                font: "Marcellus-300", color: "#fc6b03",fontSize:"19px",fontWeight:"400",marginRight: "18px" }}>
                  Properties
                </Link>
                <a className="nav-link" href="#" style={{fontFamily: "Marcellus, serif",
                font: "Marcellus-300", color: "#fc6b03" ,fontSize:"19px",fontWeight:"400",marginRight: "18px" }}>
                  Blogs
                </a>
                <Link className="nav-link" to="/contactuspage" style={{fontFamily: "Marcellus, serif",
                font: "Marcellus-300", color: "#fc6b03",fontSize:"19px",fontWeight:"400",marginRight: "18px" }}>
                ContactUs
                </Link>
              </div>
            </div>
          </div>
        </nav>

    </>
  );
}

export default Navbar;

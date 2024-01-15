import React, { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Button } from "react-bootstrap"; // Import Card and Button
import { Link } from "react-router-dom"; // Import Link

import "./Home.css";
// import "./Home.css";

const Home = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [staycations, setStaycations] = useState([]);
  const names = ["Experience", " Unique", " For You"];
  const [clicked, setClicked] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 6; // Number of slides

  const handleNext = () => {
    const newSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(newSlide);
  };

  const handlePrev = () => {
    const newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [currentNameIndex, names]);

  useEffect(() => {
    // Fetch staycation data from your server
    const accessToken = localStorage.getItem("yourTokenKey"); // Replace 'your-access-token' with your actual access token

    fetch("http://localhost:5000/api/staycation/fetchData", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setStaycations(data);
      })
      .catch((error) => console.error("Error fetching staycations:", error));
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide === totalSlides - 1) {
        // Reset to the first slide without animation
        setCurrentSlide(0);
      }
    };

    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderWrapper.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div
            style={{
              position: "relative",
              textAlign: "center",
            }}
          >
            <img
              src="images/home.webp"
              alt=""
              className="img-fluid"
              style={{
                float: "right",
                maxWidth: "70%",
              }}
            />
            {/* <div
              // style={{
              //   position: "absolute",
              //   textAlign: "left",
              //   width: "50%",
              //   marginTop: "1rem",
              // }}
            >
              <h1
                style={{
                  position: "absolute",
                  fontSize: "80px",
                  marginTop: "14%",
                  marginLeft: "15%",
                  color: "black",
                  fontFamily: "Open Sans",
                  font: "Open Sans",
                  width: "100%",
                }}
              >
                Stays that are
              </h1>
              <span
                style={{
                  position: "absolute",
                  top: "14rem",
                  left: "-3rem",
                  fontSize: "70px",
                  fontFamily: "Libre Bodoni, serif",
                  font: "serif",
                  marginLeft: "20%",
                  fontStyle: "italic",
                }}
              >
                {names[currentNameIndex]}
              </span>
            </div> */}
             <div className="home-text-container">
              <h1 className="home-heading">
                Stays that are
              </h1>
              <span className="home-subheading">
              {names[currentNameIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* location slider */}
      <div
        className="container-fluid"
        style={{
          marginBottom: "2pc",
          paddingBottom: "1pc",
          paddingTop: "2pc",
          backgroundColor:"#f6f5f4"
        }}
      >
        <h1
          style={{
            fontFamily: "Marcellus, serif",
            font: "Marcellus-300",
            margin: "24px",
          }}
        >
          Browse By
          <span
            style={{
              fontFamily: "Marcellus, serif",
              font: "Marcellus-300",
              color: "#fc6b03",
            }}
          >
            Loaction
          </span>
        </h1>

        <div className="slider-container" s>
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${-currentSlide * (100 / totalSlides)}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            <div className="slider-slide">
              <img src="images/Dehradun.jpg" alt="Slide 1" />
              <span
                style={{
                  fontFamily: "Marcellus, serif",
                  font: "Marcellus-300",
                  color: "#fc6b03",
                  fontWeight: "800",
                  position: "absolute",
                  bottom: "8%",
                  left: "110px",
                  fontSize: "19px",
                }}
              >
                Dehradun
              </span>
            </div>
            <div className="slider-slide">
              <img src="images/Goa.jpg" alt="Slide 2" />
              <span
                style={{
                  fontFamily: "Marcellus, serif",
                  font: "Marcellus-300",
                  color: "#fc6b03",
                  fontWeight: "800",
                  position: "absolute",
                  bottom: "8%",
                  left: "29%",
                  fontSize: "19px",
                }}
              >
                Goa
              </span>
            </div>
            <div className="slider-slide">
              <img src="images/Manesar.webp" alt="Slide 3" />
              <span
                style={{
                  fontFamily: "Marcellus, serif",
                  font: "Marcellus-300",
                  color: "#fc6b03",
                  fontWeight: "800",
                  position: "absolute",
                  bottom: "8%",
                  left: "48%",
                  fontSize: "19px",
                }}
              >
                Manesar
              </span>
            </div>
            <div className="slider-slide">
              <img src="images/mussoorie.webp" alt="Slide 4" />
              <span
                style={{
                  fontFamily: "Marcellus, serif",
                  font: "Marcellus-300",
                  color: "#fc6b03",
                  fontWeight: "800",
                  position: "absolute",
                  bottom: "8%",
                  left: "68%",
                  fontSize: "19px",
                }}
              >
                Mussoorie
              </span>
            </div>
            <div className="slider-slide">
              <img src="images/Dehradun.jpg" alt="Slide 1" />
              <span
                style={{
                  fontFamily: "Marcellus, serif",
                  font: "Marcellus-300",
                  color: "#fc6b03",
                  fontWeight: "800",
                  position: "absolute",
                  bottom: "8%",
                  left: "89%",
                  fontSize: "19px",
                }}
              >
                Dehradun
              </span>
            </div>
            <div className="slider-slide">
              <img src="images/Goa.jpg" alt="Slide 2" />
              <span
                style={{
                  fontFamily: "Marcellus, serif",
                  font: "Marcellus-300",
                  color: "#fc6b03",
                  fontWeight: "800",
                  position: "absolute",
                  bottom: "8%",
                  left: "110%",
                  fontSize: "19px",
                }}
              >
                Goa
              </span>
            </div>
          </div>

          <button className="slider-button-prev" onClick={handlePrev}>
            {"<"}
          </button>
          <button className="slider-button-next" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>

      {/* card */}
      <div
        className="container-fluid"
        style={{ marginBottom: "2pc", paddingBottom: "1pc", paddingTop: "2pc" }}
      >
        <h1
          className="container-fluid"
          style={{
            fontFamily: "Marcellus, serif",
            font: "Marcellus-300",
          }}
        >
          Most views
          <span
            className="container-fluid"
            style={{
              fontFamily: "Marcellus, serif",
              font: "Marcellus-300",
              color: "#fc6b03",
            }}
          >
            Properties
          </span>
        </h1>
        <Container className="mt-5">
          <Row>
            {staycations.map((staycation) => (
              <Col key={staycation._id} xs={12} sm={7} md={4} lg={4}>
                <Card
                  className="shadow-lg"
                  style={{
                    width: "20rem",
                    height: "98%",
                    cursor: "pointer",
                    
                  
                    
                  }}
                  onClick={() => setClicked(!clicked)}
                >
                  <Link to={`/property/${staycation._id}`}>
                    <Card.Img
                      variant="top"
                      src={staycation.imageSrc[0]}
                      style={{ width: "319px", height: "269px" }}
                    />
                  </Link>
                  <Card.Body style={{ height: "160px" }}>
                    <Card.Title>
                      {staycation.title}
                      <p className="fs-6 text-secondary fw-normal">
                        {staycation.location}
                      </p>
                    </Card.Title>
                    <div className="d-flex flex-row mb-2">
                      <Card.Text>
                        <span
                          style={{
                            fontSize: "15px",
                            marginTop: "-5px",
                          }}
                          className="d-flex flex-row mb-1"
                        >
                          <p
                            style={{ fontSize: "13px" }}
                            className="fw-bold text-secondary me-1"
                          >
                            FROM{" "}
                          </p>
                          <p
                            style={{
                              color: "#fc6b03",
                              fontFamily: "Montserrat, sans-serif",
                              font: "Montserrat-700",
                            }}
                          >
                            ₹{staycation.price}
                          </p>
                          <p
                            style={{ fontSize: "13px" }}
                            className="fw-bold text-secondary"
                          >
                            / Night
                          </p>
                        </span>
                        <p style={{ fontSize: "11px", marginTop: "-24px" }}>
                          (excl. taxes & charger)
                        </p>
                      </Card.Text>
                      <Button
                        style={{
                          fontSize: "15px",
                          color: "#fc6b03",
                          backgroundColor: "white",
                          borderColor: "#fc6b03",
                          width: "100px",
                          height: "35px",
                          marginLeft: "2rem",
                          marginTop: "-6px",
                        }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

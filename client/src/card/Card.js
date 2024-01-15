import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  const [priceValue, setPriceValue] = useState([1000, 25000]);
  const [locationFilters, setLocationFilters] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [staycations, setStaycations] = useState([]);

  const handlePriceSliderChange = (value) => {
    setPriceValue(value);
  };

  const handleLocationCheckboxChange = (location) => {
    setLocationFilters((prevFilters) =>
      prevFilters.includes(location)
        ? prevFilters.filter((filter) => filter !== location)
        : [...prevFilters, location]
    );
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };
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

  // Filter cards based on price and location
  const filteredStaycations = staycations.filter((staycation) => {
    const withinPriceRange =
      staycation.price >= priceValue[0] && staycation.price <= priceValue[1];
    const withinLocation =
      locationFilters.length === 0 ||
      locationFilters.includes(staycation.location);
    return withinPriceRange && withinLocation;
  });
  return (
    <div>
      {/*  Price Filetrs section */}
      <Container style={{ maxWidth: "1500px" }}>
        <Row>
          <Col sm={3}>
            {/* <h1>{staycation.title}</h1> */}
            <div className="mt-4">
              <p
                style={{ color: "#fc6b03" }}
                className="mb-2 fw-bold mt-2 fs-5"
              >
                Filters
              </p>
              <div>
                <div className="border-bottom border-secondary-50">
                  <p className="fw-normal">PRICE</p>
                </div>
                <div className="my-4">
                  <span>{priceValue[0]} - </span>
                  <span className="ml-4">{priceValue[1]}</span>
                  <Slider
                    range
                    min={1000}
                    max={25000}
                    value={priceValue}
                    onChange={handlePriceSliderChange}
                    // onChange={handleSliderChange}
                    trackStyle={[{ backgroundColor: "#ff4500" }]}
                    handleStyle={[
                      { borderColor: "#ff4500", backgroundColor: "#ff4500" },
                      { borderColor: "#ff4500", backgroundColor: "#ff4500" },
                    ]}
                  />
                </div>
              </div>
              {/* Location Filter section */}
              <div className="mt-1">
                <div className="border-bottom border-secondary-50">
                  <p className="fw-normal">LOCATION</p>
                </div>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", marginLeft: "-25px" }}
                >
                  {[
                    "Dehradun",
                    "Goa",
                    "Mussoorie",
                    "Leh, ladakh",
                    "Bhimtal",
                  ].map((location) => (
                    <li
                      className="d-flex justify-content-start mb-2"
                      key={location}
                    >
                      <label style={{ color: "gray" }}>
                        <input
                          type="checkbox"
                          checked={locationFilters.includes(location)}
                          onChange={() =>
                            handleLocationCheckboxChange(location)
                          }
                        />{" "}
                        {location}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card-Section started */}
          </Col>
          <Col sm={9}>
            <Container fluid>
              <Row>
                <Col>
                  <div
                    style={{
                      fontFamily: "Marcellus, serif",
                      font: "Marcellus-300",
                    }}
                    className="d-flex flex-row mb-2"
                  >
                    <p className="m-1 fs-1">Best Properties in</p>
                    <p style={{ color: "#fc6b03" }} className="m-1 fs-1">
                      India
                    </p>
                  </div>
                  <div style={{ marginTop: "-20px", marginLeft: "5px" }}>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li style={{}} class="breadcrumb-item fs-5">
                          <a>Home</a>
                        </li>
                        <li
                          style={{ color: "#fc6b03" }}
                          class="breadcrumb-item active fw-bold fs-5"
                          aria-current="page"
                        >
                          Best Properties in india
                        </li>
                      </ol>
                    </nav>
                  </div>
                </Col>
              </Row>

              <Row className="flex flex-row mt-4">
                {/* Dynamically render cards in a grid */}
                {filteredStaycations.map((staycation) => (
                  <Col key={staycation.id} xs={12} md={6} lg={4}>
                    <Card
                    className="shadow-lg" 
                      style={{
                        width: "20rem",
                        height: "98%",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                    >
                      <Link to={`/property/${staycation._id}`}>
                        {/* Use staycation.imageSrc[0] or another property containing the image URL */}
                        {/* {staycation.imageSrc.map((image, index) => (
    <Card.Img key={index} variant="top" src={image} /> // to get all the images
  ))} */}
                        <Card.Img variant="top" src={staycation.imageSrc[0]} style={{width:"319px",height:"269px"}} />
                      </Link>
                      <Card.Body style={{ height: "" }}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

// Property.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { cardsData } from "../card/Card";
import { Grid, Virtual, Navigation, Pagination } from "swiper/modules";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import Accordion from "react-bootstrap/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";

// import required modules

function Property() {
  const { cardId } = useParams();
  const index = parseInt(cardId, 10);
  const card = cardsData[index];
  const [showModal, setShowModal] = useState(false);

  // const [hoveredImage, setHoveredImage] = useState(null);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const openGalleryModal = () => setShowGalleryModal(true); // Function to open the gallery modal
  const closeGalleryModal = () => setShowGalleryModal(false);

  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index}`)
  );
  // State for adult count
  const [adultCount, setAdultCount] = useState(1);

  // State for children count
  const [childrenCount, setChildrenCount] = useState(0);

  // Function to increment adult count
  const incrementAdult = () => {
    setAdultCount(adultCount + 1);
  };

  // Function to decrement adult count
  const decrementAdult = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  // Function to increment children count
  const incrementChildren = () => {
    setChildrenCount(childrenCount + 1);
  };

  // Function to decrement children count
  const decrementChildren = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [isRoomAvailable, setIsRoomAvailable] = useState(undefined);

  const handleCheckAvailability = () => {
    //   // Update state to indicate that availability has been checked
    //   setAvailabilityChecked(true);
    // };
    const simulatedAvailabilityCheck = Math.random() < 0.5; // Example: 50% chance of being available
    setIsRoomAvailable(simulatedAvailabilityCheck);

    // Update state to indicate that availability has been checked
    setAvailabilityChecked(true);
  };
  const handleCheckoutAndPay = () => {
    // Handle the Checkout and Pay logic here
    // This function will be called when the user clicks the "Checkout and Pay" button
    console.log("Checking out and paying...");
  };

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col style={{ backgroundColor: "white" }} sm={8}>
            <Row>
              <Col>
                <Row>
                  <Col style={{}} className="px-0 ps-2" sm={7}>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "400px",
                      }}
                      src={card.imageSrc}
                      alt={card.title}
                      onClick={openModal}
                    />
                  </Col>

                  {/* Right side two small Images */}
                  <Col className="px-0 ps-2" sm={5}>
                    <Row>
                      <img
                        style={{ height: "195px", objectFit: "cover" }}
                        src={card.imageSrc2}
                        alt={card.title}
                        onClick={openModal}
                      />
                    </Row>
                    <Row>
                      <img
                        style={{
                          height: "195px",
                          objectFit: "cover",
                          marginTop: "10px",
                        }}
                        src={card.imageSrc3}
                        alt={card.title}
                        onClick={openGalleryModal}
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* description Statrt */}

            <Row>
              <Col className="mt-4">
                <div>
                  <h1
                    style={{
                      fontFamily: "Marcellus, serif",
                      font: "Marcellus-900",
                      fontSize: "40px",
                    }}
                  >
                    {card.title}
                  </h1>
                  <p
                    style={{ marginTop: "-9px" }}
                    className="text-secondary fs-5"
                  >
                    {card.location}
                  </p>
                </div>
                <div className="d-flex justify-content-between border-bottom">
                  <div className="text-secondary fs-5">
                    <p>{card.amenities && card.amenities.join("     |    ")}</p>
                  </div>
                  <div className="">
                    <p className="fs-3 text-secondary fw-bold">
                      FROM ₹
                      <span style={{ color: "#fc6b03" }}>{card.price}</span> /
                      Night
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-5 mt-5">
                  <a style={{ width: "100%" }} href="#description">
                    <button
                      className="p-2 rounded fw-bold"
                      style={{
                        backgroundColor: "white",
                        color: "#fc6b03",
                        width: "100%",
                      }}
                    >
                      About
                    </button>
                  </a>
                  <a style={{ width: "100%" }} href="#amenities">
                    <button
                      className="p-2 rounded fw-bold"
                      style={{
                        backgroundColor: "white",
                        color: "#fc6b03",
                        width: "100%",
                      }}
                    >
                      Amenities
                    </button>
                  </a>
                  <a style={{ width: "100%" }} href="#spotlight">
                    <button
                      className="p-2 rounded fw-bold"
                      style={{
                        backgroundColor: "white",
                        color: "#fc6b03",
                        width: "100%",
                      }}
                    >
                      Spotlight
                    </button>
                  </a>
                  <a style={{ width: "100%" }} href="#faq">
                    <button
                      className="p-2 rounded fw-bold"
                      style={{
                        backgroundColor: "white",
                        color: "#fc6b03",
                        width: "100%",
                      }}
                    >
                      FAQ
                    </button>
                  </a>
                  <a style={{ width: "100%" }} href="#policy">
                    <button
                      className="p-2 rounded fw-bold"
                      style={{
                        backgroundColor: "white",
                        color: "#fc6b03",
                        width: "100%",
                      }}
                    >
                      Policy
                    </button>
                  </a>
                </div>

                <Card className="mt-4">
                  <Card.Body className="shadow px-5 py-4 rounded-md">
                    <div id="description">
                      <p
                        style={{
                          fontFamily: "Marcellus, serif",
                          font: "Marcellus-300",
                        }}
                        className="fw-bold fs-4"
                      >
                        Description
                      </p>
                      <span className="text-secondary">
                        {card.description}
                        <p>
                          <a
                            className="mt-2 fw-bold"
                            style={{
                              color: "#fc6b03",
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                          >
                            Show more . . .
                          </a>
                        </p>
                      </span>
                    </div>

                    <div className="mt-4">
                      <p
                        style={{
                          fontFamily: "Marcellus, serif",
                          font: "Marcellus-300",
                        }}
                        className="fw-bold fs-4"
                      >
                        Property Layout
                      </p>
                      <Swiper
                        modules={[Virtual, Navigation, Pagination]}
                        onSwiper={setSwiperRef}
                        slidesPerView={2}
                        spaceBetween={15}
                        navigation={true}
                        virtual
                      >
                        {slides.map((imageSrc, index) => (
                          <SwiperSlide key={imageSrc} virtualIndex={index}>
                            {imageSrc}
                            {/* <img src="/images/image1.webp" alt="" /> */}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="mt-4">
                  <Card.Body className="shadow px-5 py-4 rounded-md">
                    <div id="amenities">
                      <p
                        style={{
                          fontFamily: "Marcellus, serif",
                          font: "Marcellus-300",
                        }}
                        className="fw-bold fs-3"
                      >
                        Amenities
                      </p>
                      {/* Amenities */}
                      <div className="fs-6">
                        <Row className="d-flex flex-row">
                          <Col>Essentials</Col>
                          <Col>Cozy Linens</Col>
                          <Col>Towels ans Toiletries</Col>
                        </Row>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* spotlight section */}

                <Card className="mt-4">
                  <Card.Body className="shadow px-5 py-4 rounded-md">
                    <div id="spotlight">
                      <p
                        style={{
                          fontFamily: "Marcellus, serif",
                          font: "Marcellus-300",
                        }}
                        className="fw-bold fs-3"
                      >
                        Spotlight
                      </p>
                      <Swiper
                        modules={[Virtual, Navigation, Pagination]}
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        spaceBetween={15}
                        navigation={true}
                        virtual
                      >
                        {slides.map((slideContent, index) => (
                          <SwiperSlide
                            key={slideContent}
                            virtualIndex={index}
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          >
                            {/* {slideContent} */}
                            <img src="/images/image1.webp" alt="" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </Card.Body>
                </Card>

                {/* FAQ section */}

                <Card className="mt-4" id="faq">
                  <Card.Body className="shadow px-5 py-4 rounded-md">
                    <p
                      style={{
                        fontFamily: "Marcellus, serif",
                        font: "Marcellus-300",
                      }}
                      className="fw-bold fs-3"
                    >
                      FAQ
                    </p>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Can I book only one or two rooms, or do I need to book
                          the entire Home?
                        </Accordion.Header>
                        <Accordion.Body>
                          No, you cannot book just one room. You would need to
                          book the entire space.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Is Driver and/or House-Help accommodation available?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, driver and house-help accommodation is available.
                          Charges for the same are Rs.1000 per person, per
                          night. This does not include meals. Additional charges
                          for meals to be paid to the caretaker onsite.
                        </Accordion.Body>
                        <Accordion.Header>
                          Is parking available onsite or nearby?
                        </Accordion.Header>
                        <Accordion.Body>
                          Free parking is available onsite for up to 2 cars.
                        </Accordion.Body>
                        <Accordion.Header>
                          Is the villa suitable for a day picnic?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, the home has a garden/lawn area within the
                          premises that could be used for outdoor picnic
                          activities. Meals will be provided on site at an
                          additional charge. During the day, guests will be
                          allowed to use the washrooms and other amenities at
                          the premises. The home is also stocked with few indoor
                          games.
                        </Accordion.Body>
                        <Accordion.Header>
                          Till what time is the food available? (Kitchen timing)
                        </Accordion.Header>
                        <Accordion.Body>
                          Food available in all our guest houses is From 7:00 am
                          to 7:00 pm.
                        </Accordion.Body>
                        <Accordion.Header>
                          Are we allowed to bring pets to the Property?
                        </Accordion.Header>
                        <Accordion.Body>
                          All our properties are pet friendly. Charges for the
                          same are Rs.1000 per pet, per night. This does not
                          include meals.
                        </Accordion.Body>
                        <Accordion.Header>
                          Do we serve pure vegetarian food there?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, we serve pure vegetarian food at all our
                          properties.
                        </Accordion.Body>
                        <Accordion.Header>
                          Do you Serve liquor in the house ?
                        </Accordion.Header>
                        <Accordion.Body>
                          No, we don’t serve in house but guests are allowed to
                          get their own in limitation.
                        </Accordion.Body>
                        <Accordion.Header>
                          Is it possible to host events ?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, this place is ideal to host events.
                        </Accordion.Body>
                        <Accordion.Header>
                          Can I reserve the place for shoots?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes,the place is available for shoots, The cost to
                          conduct the shoot may differ according to the
                          location.
                        </Accordion.Body>
                        <Accordion.Header>
                          What is the kitchen equipped with?
                        </Accordion.Header>
                        <Accordion.Body>
                          It is equipped with a water purifier, Refrigerator,
                          crockery and cutlery.
                        </Accordion.Body>
                        <Accordion.Header>
                          Will I be asked for my Id?
                        </Accordion.Header>
                        <Accordion.Body>
                          All guests should keep at least one government
                          authorized ID with them. The caretaker may request to
                          see them at the time of check in.
                        </Accordion.Body>
                        <Accordion.Header>
                          Are unmarried couples allowed to stay here?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, they are. As long as they are adults, have valid
                          ids, and are in no way associated with illegal
                          activities.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Card>
                {/* FAQ section end */}

                <Card className="mt-4 mb-4" id="policy">
                  <Card.Body className="shadow px-5 py-4 rounded-md">
                    <p
                      style={{
                        fontFamily: "Marcellus, serif",
                        font: "Marcellus-300",
                      }}
                      className="fw-bold fs-3"
                    >
                      Booking Policies
                    </p>
                    <div>
                      <Row>
                        <Col>
                          <p className="fw-bold border-bottom p-2">
                            House Rules
                          </p>
                          <ul
                            className="text-secondary"
                            style={{ fontSize: "15px" }}
                          >
                            <li>Check-in: 1 PM Check-out: 11 AM</li>
                            <li>100% Power backup.</li>
                            <li>
                              Guests are requested to shut the windows and doors
                              during the evening as the property may be prone to
                              insects and bugs.
                            </li>
                            <li>
                              Guests are not allowed to spill food or drinks
                              over the upholstery or they will be charged at the
                              time of checkout.
                            </li>
                            <li>
                              Please Be mindful and keep the noise to the
                              minimum after 11 pm.
                            </li>
                            <li>
                              Passport, Aadhar, Driving License and Govt. ID are
                              accepted as ID proof(s)
                            </li>
                            <li>Allows private parties or events</li>
                            <li>
                              Smoking within the room is not allowed. Smoking is
                              allowed in the exterior areas of premises only.
                            </li>
                            <li>Unmarried couples allowed.</li>
                          </ul>
                        </Col>
                        <Col>
                          <p className="fw-bold border-bottom p-2">
                            Booking & Rescheduling Policy
                          </p>
                          <ul
                            className="text-secondary"
                            style={{ fontSize: "15px" }}
                          >
                            <li>
                              Rs. 1000 will be charged for booking as Advance
                              (Non-Refundable upon cancellation). Remaining
                              amount due on Check-in.
                            </li>
                            <li>
                              Booking can be rescheduled till 15 days prior to
                              arrival date. Rescheduling can be done only for
                              the same property.
                            </li>
                            <li>
                              If the tariff on the rescheduled date is higher
                              than the initial booking date then the difference
                              is payable.
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="fw-bold border-bottom p-2">
                            Things you need to know
                          </p>
                          <ul
                            className="text-secondary"
                            style={{ fontSize: "15px" }}
                          >
                            <li>
                              Only the guests who have been accounted for are
                              allowed at the premises.
                            </li>
                            <li>
                              Any damage to the property caused by the guest
                              will be charged as per the actual cost of repair
                              or replacement.
                            </li>
                            <li>
                              Any commercial activity is permitted upon request.
                            </li>
                            <li>
                              Guests are earnestly requested to treat the home
                              with care.
                            </li>
                            <li>
                              Smoking is allowed in the exterior areas of
                              premises only.
                            </li>
                          </ul>
                        </Col>
                        <Col>
                          <p className="fw-bold border-bottom p-2">
                            Cancellation and Refund Policy
                          </p>
                          <ul
                            className="text-secondary"
                            style={{ fontSize: "15px" }}
                          >
                            <li>
                              Cancellation 1 days prior to arrival date 100%
                              will be charged.
                            </li>
                            <li>
                              Cancellation 90-02 days prior to arrival date
                              Rs.1000 or 20% (whichever is higher) will be
                              charged.
                            </li>
                            <li>
                              Free Cancellation 90 days prior to arrival date.
                            </li>
                            <li>
                              Credit/Debit card cancellation will be charged 5%
                              extra
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* description end*/}

            {/* Pop up window */}

            <Modal
              modal-xl
              modal-dialog-centered
              show={showModal}
              onHide={closeModal}
              centered
              dialogClassName="custom-modal"
            >
              <Modal.Header closeButton>
                {/* <Modal.Title></Modal.Title> */}
              </Modal.Header>
              <Carousel closeButton>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc}
                    // alt={card.title}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc}
                    alt={card.title}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc}
                    alt={card.title}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc2}
                    alt={card.title}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc3}
                    alt={card.title}
                  />
                </Carousel.Item>
                {/* Add more Carousel.Items as needed */}
              </Carousel>
            </Modal>

            {/* gallery mode */}

            <Modal
              modal-xl
              modal-dialog-centered
              show={showGalleryModal}
              onHide={closeGalleryModal}
              centered
              dialogClassName="custom-modal"
            >
              <Modal.Header closeButton>
                {/* <Modal.Title></Modal.Title> */}
              </Modal.Header>

              <Swiper
                // direction="vertical"
                mousewheel={true}
                slidesPerView={3}
                grid={{
                  row: 3,
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc3}
                    alt={card.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc3}
                    alt={card.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc3}
                    alt={card.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc3}
                    alt={card.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="d-block w-100"
                    src={card.imageSrc3}
                    alt={card.title}
                  />
                </SwiperSlide>
              </Swiper>
            </Modal>
          </Col>

          {/* Right Details Column */}

          {/* Right Details Column */}

          <Col sm={4}>
            <Card>
              <Card.Body className="shadow p-3 rounded-md">
                <div className="">
                  <p className="fs-3 text-dark pb-3 fw-bold text-center border-bottom border-secondary-50">
                    FROM ₹{card.price}
                    <span className="fs-6 text-secondary"> /Night</span>
                  </p>
                </div>
                <Row className="">
                  {/* CheckIn Calendar */}
                  <Col className="d-flex justify-content-center">
                    <div>
                      <p className="mb-2 fw-bold">Check In</p>
                      <Button
                        style={{
                          backgroundColor: "white",
                          border: "0.5px solid lightgray",
                          color: "#fc6b03",
                        }}
                        className="fw-bold px-4 p-2"
                      >
                        09 Jan 2024
                      </Button>
                    </div>
                  </Col>

                  {/* CheckOut Calendar */}
                  <Col>
                    <div>
                      <p className="mb-2 fw-bold">Check Out</p>
                      <Button
                        style={{
                          backgroundColor: "white",
                          border: "0.5px solid lightgray",
                          color: "#fc6b03",
                        }}
                        className="fw-bold px-4 p-2"
                      >
                        09 Jan 2024
                      </Button>
                    </div>
                  </Col>
                </Row>
                <div className="ms-4 mt-3 me-4">
                  <p className="mb-2 fw-bold">Guest</p>
                  <Button
                    style={{
                      backgroundColor: "white",
                      border: "0.5px solid lightgray",
                      color: "#fc6b03",
                      width: "100%",
                    }}
                    className="fw-bold p-2"
                  >
                    <span>{adultCount}</span> adult and{" "}
                    <span>{childrenCount}</span> child
                  </Button>
                  <div
                    style={{ borderRadius: "10px" }}
                    className="mt-4 mb-2 border p-3 shadow-sm"
                  >
                    {/* counter secttion */}
                    <Row>
                      <Col>
                        <div className="fw-bold ft-5">
                          Adults
                          <p style={{ color: "gray", fontSize: "14px" }}>12+</p>
                        </div>
                      </Col>
                      <Col>
                        {/* Counter for Adults */}
                        <div className="d-flex align-items-center">
                          <button onClick={decrementAdult}>-</button>
                          <span>{adultCount}</span>
                          <button onClick={incrementAdult}>+</button>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="fw-bold ft-5">
                          Children
                          <p style={{ color: "gray", fontSize: "14px" }}>
                            6-12
                          </p>
                        </div>
                      </Col>
                      <Col>
                        {/* Counter for Children */}
                        <div className="d-flex align-items-center">
                          <button onClick={decrementChildren}>-</button>
                          <span>{childrenCount}</span>
                          <button onClick={incrementChildren}>+</button>
                        </div>
                      </Col>
                    </Row>
                    {/* counter section end */}
                  </div>
                </div>

                {/* end Buttons */}
                <div>
                  {/* Check Availability Button */}
                  <Button
                    style={{
                      width: "90%",
                      backgroundColor: "white",
                      border: "0.5px solid lightgray",
                      color: "#fc6b03",
                    }}
                    className="fw-bold p-2 m-3"
                    onClick={handleCheckAvailability}
                  >
                    Check Availability
                  </Button>
                  {/* Display Availability Message */}
                  {availabilityChecked && (
                    <div className="ms-4 mt-3 me-4">
                      {isRoomAvailable !== undefined ? (
                        isRoomAvailable ? (
                          <p style={{ color: "green" }}>Available</p>
                        ) : (
                          <p style={{ color: "red" }}>Not Available</p>
                        )
                      ) : (
                        <p>Loading availability...</p>
                      )}
                    </div>
                  )}
                </div>
                {/* Price Breakdown and Checkout Section */}
                {availabilityChecked && isRoomAvailable && (
                  <div className="ms-4 mt-3 me-4">
                    <Row>
                      <Col>
                        <div>
                          <h1>Price Breakdown</h1>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {/* Display Subtotal */}
                        {/* Display Subtotal, GST, and Total */}
                        <div>
                          <p>
                            Subtotal: ₹
                            {card.price * (adultCount + childrenCount)}
                          </p>
                          <p>
                            GST (18%): ₹
                            {(
                              card.price *
                              (adultCount + childrenCount) *
                              0.18
                            ).toFixed(2)}
                          </p>
                          <p>
                            Total: ₹
                            {(
                              card.price *
                              (adultCount + childrenCount) *
                              1.18
                            ).toFixed(2)}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
                {availabilityChecked &&
                  isRoomAvailable !== undefined &&
                  isRoomAvailable && (
                    <div>
                      <Button
                        style={{
                          width: "90%",
                          backgroundColor: "white",
                          border: "0.5px solid lightgray",
                          color: "#fc6b03",
                        }}
                        className="fw-bold p-2 m-3 mt-0"
                        onClick={handleCheckoutAndPay}
                      >
                        Checkout and Pay
                      </Button>
                    </div>
                  )}
              </Card.Body>
            </Card>

            <Card className="mt-3 rounded">
              <Card.Body className="shadow p-3 rounded-md">
                <div className="">
                  <p className="fs-3 text-dark pb-3 fw-bold border-bottom border-secondary-50">
                    Location
                  </p>
                  <p className="text-secondary">
                    Suwakholi Mussoorie - Dhanaulti, Road, Uttarakhand 249180
                  </p>
                </div>
                <div
                  style={{ backgroundColor: "gray", height: "200px" }}
                  className="p-3"
                >
                  {/* <img src="" alt="" /> */}
                </div>
                <div>
                  <Row>
                    <Col className="border rounded m-3">
                      <p>Attractions</p>
                      <p>7 Nearby</p>
                      <a
                        style={{ textDecoration: "none", color: "#fc6b03" }}
                        href=""
                      >
                        <span>View</span>
                      </a>
                    </Col>
                    <Col className="border rounded m-3">
                      <p>Attractions</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="border rounded m-3">
                      <p>Attractions</p>
                    </Col>
                    <Col className="border rounded m-3">
                      <p>Attractions</p>
                      <p>7 Nearby</p>
                      <a
                        style={{ textDecoration: "none", color: "#fc6b03" }}
                        href=""
                      >
                        <span>View</span>
                      </a>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Details Column */}
        </Row>
      </Container>
    </div>
  );
}

export default Property;

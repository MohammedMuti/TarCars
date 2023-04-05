import React, { Component } from "react";
import NavBar from "../common/navbar/navBar";
import "./home.css";
import "./hom.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../Footer/Footer";
import ContactComp from "../Contact/ContactComp";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="hom">
          <div className="main-section">
            <div className="main-content">
              <h1>TARCARS</h1>
              <h2>Quality Car Service</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                debitis ex accusantium quam in autem eligendi reiciendis
                repellendus quaerat ut!
              </p>
              <Link to="/about" className="classic-btn">
                Know More
              </Link>
            </div>
            <div className="home-contact-form"></div>
          </div>
        </div>

        {/* Services */}
        <div className="services-home">
          <div className="heading">
            <h1>Services</h1>
            <div className="service-container">
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/car-service.png")}
                    alt=""
                  />
                  <h2>Standard Car service</h2>
                </Link>
              </div>
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/car-painting.png")}
                    alt=""
                  />
                  <h2>Full Body Paint</h2>
                </Link>
              </div>
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/air-conditioner.png")}
                    alt=""
                  />
                  <h2>AC Gas Checkup</h2>
                </Link>
              </div>
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/car-wash.png")}
                    alt=""
                  />
                  <h2>Complete Car Wash</h2>
                </Link>
              </div>
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/tires.png")}
                    alt=""
                  />
                  <h2>Wheel Alignment</h2>
                </Link>
              </div>
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/vacuum.png")}
                    alt=""
                  />
                  <h2>Interior Cleaning</h2>
                </Link>
              </div>
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/car-washing.png")}
                    alt=""
                  />
                  <h2>Rubbing Polishing</h2>
                </Link>
              </div>
              <div className="service-box">
                <Link to="/services">
                  <img
                    src={require("../../images/servicesIcon/car.png")}
                    alt=""
                  />
                  <h2>Wheel Balancing</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="brands">
          <div className="heading">
            <h1>Brands We Serve</h1>
          </div>
          <div className="brandContainer">
            <Swiper
              breakpoints={{
                1700: {
                  slidesPerView: 7,
                },
                1500: {
                  slidesPerView: 6,
                },
                1300: {
                  slidesPerView: 5.2,
                },
                1100: {
                  slidesPerView: 4.2,
                },
                900: {
                  slidesPerView: 3.6,
                },
                700: {
                  slidesPerView: 2.8,
                },
                600: {
                  slidesPerView: 2.4,
                },
                550: {
                  slidesPerView: 3.5,
                },
                500: {
                  slidesPerView: 3.1,
                },
                450: {
                  slidesPerView: 2.8,
                },
                400: {
                  slidesPerView: 2.3,
                },
                350: {
                  slidesPerView: 2.7,
                },
                330: {
                  slidesPerView: 2.4,
                },
                300: {
                  slidesPerView: 2.2,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              loop
              spaceBetween={0}
              grabCursor
              speed={1500}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/2.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/3.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/4.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/5.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/6.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/7.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/8.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/10.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/11.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/12.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/13.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/14.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/15.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/16.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/17.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/28.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/29.jpg")} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandImg">
                  <img src={require("../../images/Brands/33.jpg")} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Price List */}
        <div className="priceList">
          <div className="heading">
            <h1>Price List</h1>
          </div>
          <div className="priceTable">
            <table>
              <thead>
                <th>Service</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Service </td>
                  <td>1399</td>
                </tr>
                <tr>
                  <td>Standard Service </td>
                  <td>1999 </td>
                </tr>
                <tr>
                  <td>Comprehensive Service </td>
                  <td>3099</td>
                </tr>
                <tr>
                  <td>AC Gas CheckUp </td>
                  <td>899</td>
                </tr>
                <tr>
                  <td>AC Service </td>
                  <td>1499</td>
                </tr>
                <tr>
                  <td>Wheel Alignment </td>
                  <td>199</td>
                </tr>
                <tr>
                  <td>Wheel Balancing </td>
                  <td>199</td>
                </tr>
                <tr>
                  <td>Ceramic Coating </td>
                  <td>9999</td>
                </tr>
                <tr>
                  <td>Rubbing Polishing </td>
                  <td>699</td>
                </tr>
                <tr>
                  <td>Complete Car wash </td>
                  <td>399</td>
                </tr>
                <tr>
                  <td>Interior Cleaning </td>
                  <td>699</td>
                </tr>
                <tr>
                  <td>Full Body Dent Paint </td>
                  <td>15999</td>
                </tr>
              </tbody>
            </table>
            <div className="tableHead"></div>
          </div>
        </div>

        {/* --------------About---------------- */}
        <div className="padding">
          <div className="about-us">
            <div className="heading">
              <h1>About Us</h1>
            </div>
            <div className="about-container">
              <div className="video">
                <video
                  src={require("../../video/videoplayback.mp4")}
                  className="About-video"
                  loop
                  muted
                  autoPlay
                  controls
                ></video>
              </div>
              <div className="about-content">
                <h2>We Provide The Best Service There Is..</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus inventore, dolores dicta doloremque culpa totam
                  ducimus doloribus quia et, possimus fugit corrupti aliquid
                  velit, amet accusamus harum perferendis ullam perspiciatis
                  recusandae enim? Nostrum id rem ducimus facere blanditiis
                  totam dolores, quia eligendi, ratione omnis saepe aliquid
                  fugiat incidunt velit numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos molestias repellendus sunt odit ipsa in dolore
                  omnis? Culpa sed possimus eos! Tempore a, hic, magnam numquam
                  odio, nam iure deleniti consequuntur laboriosam nulla
                  molestias. In!
                </p>
                <Link to="/about" className="classic-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div className="aboutBlocks">
              <div className="blockBoxes">
                <div className="box">
                  <h2>10+</h2>
                  <span>years of experience</span>
                </div>
                <div className="box">
                  <h2>300+</h2>
                  <span>Satisfied Clients</span>
                </div>
                <div className="box">
                  <h2>700+</h2>
                  <span>Projects Completed</span>
                </div>
                <div className="box">
                  <h2>50+</h2>
                  <span>Active Employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="contactWrapper">
          <ContactComp />
        </div>

        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;

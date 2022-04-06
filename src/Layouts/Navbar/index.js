import React from "react";
import logo from "../../assest/icons/logos.png";
import "./style.css";
import BG from "../../assest/icons/BG.jpg";
import stockimg from "../../assest/img/bb.jpg";
import nomigreen from "../../assest/img/nomi.jpg";
import smtbox from "../../assest/icons/greenIT_Box.png";
import nomee from "../../assest/img/nomeeg.jpeg";
import "./style.css";
import anees from "../../assest/img/ane.jpeg";
import adeel from "../../assest/img/adeel.jpeg";
import adu from "../../assest/img/adu.jpeg";
import raja from "../../assest/img/raja.jpeg";
import mapimg from "../../assest/img/map.png";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light sticky-top "
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
      >
        <div>
          <a class="navbar-brand" href="#" style={{ padding: "0" }}>
            <img src={logo} alt="" style={{ width: "100px" }} />
            {/* Green IT */}
          </a>
        </div>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#cotact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home */}
      <div class="col-lg-12 mb-5" style={{ padding: "0px" }}>
        <div class="owl-carousel header-carousel">
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src={BG} alt="" />
            <div class="owl-carousel-text">
              {/* <h1 class="display-1 text-white mb-0">Cardiology</h1> */}
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div class="owl-carousel header-carousel" id="about">
        <div class="owl-carousel-text">
          <h3 class="display-5 text-one ">THE SMART TRASH BIN</h3>
          <p className="display-6">
            THE BRAND NEW VERSION OF THE WORLDWIDE SMARTEST WASTE BIN
          </p>
          <button className="btn button-btn"> FIND OUT MORE</button>
        </div>
      </div>
      {/*  */}
      <div className="d-flex mt-5">
        <div class="container-fluid header mt-5">
          <div class="row">
            <div class="col-lg-6 wow fadeIn">
              <h4
                class="display-5 mb-3 "
                style={{ textAlign: "start", paddingLeft: "60px" }}
              >
                SMART - TRASH - BIN
              </h4>
              <h6
                class="discription mb-5 "
                style={{ textAlign: "start", paddingLeft: "60px" }}
              >
                SMART TRASH BIN IS AN IOT DEVICE WHICH SORTS AND COMPRESSES THE
                RECYCLABLES AUTOMATICALLY. IT COMBINES UNIQUE AI-BASED OBJECT
                RECOGNITION, FILL LEVEL CONTROL AND DATA PROCESSING TO MAKE
                WASTE MANAGEMENT CONVENIENT AND EFFICIENT
              </h6>
              <div class="row g-4">
                <div class="col-sm-4">
                  <div class="border-start border-light ps-4">
                    <h2 class="mb-1" data-toggle="counter-up">
                      123
                    </h2>
                    <p class=" mb-0">Experts</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="border-start border-light ps-4">
                    <h2 class=" mb-1" data-toggle="counter-up">
                      1234
                    </h2>
                    <p class=" mb-0">Management Staff</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="border-start border-light ps-4">
                    <h2 class=" mb-1" data-toggle="counter-up">
                      12345
                    </h2>
                    <p class=" mb-0">Technical Staff</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item position-relative">
                  <img class="img-fluid" src={smtbox} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EFFICIENT WASTE MANAGEMENT IN YOUR BUILDING   section   */}
      <div className="d-flex mt-5">
        <div class="container-fluid header mt-5">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item position-relative">
                  <img class="img-fluid" src={stockimg} alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 p-0" style={{ backgroundColor: "gray" }}>
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item-para">
                  <h3
                    className="heading"
                    style={{
                      marginTop: "100px",
                      padding: "30px",
                      textAlign: "start",
                    }}
                  >
                    EFFICIENT WASTE MANAGEMENT IN YOUR BUILDING
                  </h3>
                  <p
                    className="p"
                    style={{
                      padding: "30px",
                      paddingTop: "8px",
                      textAlign: "start",
                    }}
                  >
                    Bin-e optimizes waste management in your facility, allowing
                    you to save costs, time and labour. It ensures precisely
                    sorted raw material through automatic recognition and
                    segregation. Thanks to the compression of plastic and paper
                    the frequency of emptying the bins is reduced by half.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EFFICIENT WASTE MANAGEMENT IN YOUR BUILDING   section 2  */}
      <div className="d-flex">
        <div class="container-fluid header">
          <div class="row">
            <div class="col-lg-6 p-0" style={{ backgroundColor: "#fff" }}>
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item-para">
                  <h3
                    className="heading2"
                    style={{
                      marginTop: "100px",
                      padding: "30px",
                      textAlign: "start",
                    }}
                  >
                    EASY MANAGEMENT WITH THE APP
                  </h3>
                  <p
                    className="p2"
                    style={{
                      padding: "30px",
                      paddingTop: "8px",
                      textAlign: "start",
                    }}
                  >
                    Automatic notifications when one of the containers is full
                    allow for more effective time management of employees. The
                    app shows the fill level of each fraction and the status of
                    the device in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 p-0">
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item position-relative">
                  <img class="img-fluid" src={stockimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EFFICIENT WASTE MANAGEMENT IN YOUR BUILDING   section 3   */}
      <div className="d-flex ">
        <div class="container-fluid header">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item position-relative">
                  <img class="img-fluid" src={nomigreen} alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 p-0" style={{ backgroundColor: "gray" }}>
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item-para">
                  <h3
                    className="heading"
                    style={{
                      marginTop: "100px",
                      padding: "30px",
                      textAlign: "start",
                    }}
                  >
                    EFFICIENT WASTE MANAGEMENT IN YOUR BUILDING
                  </h3>
                  <p
                    className="p"
                    style={{
                      padding: "30px",
                      paddingTop: "8px",
                      textAlign: "start",
                    }}
                  >
                    This smart waste management system delivers valuable
                    insights into current waste operations in your building. It
                    is the ultimate tool that allows to save money, time and
                    labour, while creating a resource-efficient and
                    environmentally friendly facility.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      flexWrap: "wrap",
                      marginTop: "20px",
                    }}
                  >
                    <div class="row g-4">
                      <div class="col-sm-4">
                        <div class="border-start border-light ps-4">
                          <h2 class="mb-1 b-text" data-toggle="counter-up">
                            82%
                          </h2>
                          <p class=" mb-0 b-text">
                            lower waste management costs
                          </p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="border-start border-light ps-4">
                          <h2 class=" mb-1 b-text" data-toggle="counter-up">
                            79%
                          </h2>
                          <p class=" mb-0 b-text">
                            waste sorting <br /> precision
                          </p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="border-start border-light ps-4">
                          <h2 class=" mb-1 b-text" data-toggle="counter-up">
                            72%
                          </h2>
                          <p class=" mb-0 b-text"> improved time management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team */}
      {/* <!-- Team Start --> */}
      <div class="container-xxl py-5" id="team">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 style={{ color: "#3cb649" }}>Our Team of Experts </h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src={anees} alt="" />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Anees Shamsher</h5>
                  <p class="text-position">Founder</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src={nomee} alt="" />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Nouman Ejaz</h5>
                  <p class="text-position">Co-Founder</p>
                  <div class="team-social text-center">
                    <a
                      class="btn btn-square"
                      href="https://www.facebook.com/Green-IT-107045851972937/?ref=pages_you_manage"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square"
                      href="https://www.instagram.com/nomee_muhammad_488/"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src={adeel} alt="" />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Adeel Akhtar</h5>
                  <p class="text-position">IOT Expert</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div class="container-xxl ">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            {" "}
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src={adu} alt="" />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Adnan Shah</h5>
                  <p class="text-position">Gis Expert</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src={raja} alt="" />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Nouman Karim</h5>
                  <p class="text-position">Full Stack Developer</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cotact --> */}
      <div class="container-xxl py-5" id="cotact">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="mb-4">For More Details</h1>
              <p class="mb-4">contact with us</p>
              <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-phone-alt text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Call Us Now</p>
                  <h5 class="mb-0">+923155500196</h5>
                </div>
              </div>
              <div class="bg-light rounded d-flex align-items-center p-5">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-envelope-open text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Mail Us Now</p>
                  <h5 class="mb-0">info@greenit.com</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="mb-4">Get Your Location</h1>
              <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                <img class="img-fluid" src={mapimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      {/* <!-- Footer Start --> */}
      <div
        class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <p>
            The idea is that the tech does the job humans seem to struggle with
            the most – segregate waste properly{" "}
          </p>
          <div>
            <div class="d-flex pt-2 justify-content-center">
              <a
                class="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                class="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row text-">
              <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a class="border-bottom" href="#">
                  GreenIT
                </a>
                , All Right Reserved.
              </div>
              {/* <div class="col-md-6 text-center text-md-end">
                <a class="border-bottom" href="https://htmlcodex.com"></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
};

export default Navbar;

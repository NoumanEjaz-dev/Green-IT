import React from "react";
import bine from "../../assest/img/bine.jpg";
import stockimg from "../../assest/img/stock1_new.jpg";
import "../About/style.css";
import nomee from "../../assest/img/nomi.jpg";
import noman from "../../assest/img/noman.jpg";

const About = () => {
  return (
    <>
      <div class="owl-carousel header-carousel">
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
                BIN-E IS AN IOT DEVICE WHICH SORTS AND COMPRESSES THE
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
                  <img class="img-fluid" src={bine} alt="" />
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
                  <img class="img-fluid" src={nomee} alt="" />
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
    </>
  );
};

export default About;

import React from "react";
import bgbine from "../../assest/img/bg-binebox.jpg";

const Home = () => {
  return (
    <>
      <div class="col-lg-12 mb-5" style={{ padding: "0px" }}>
        <div class="owl-carousel header-carousel">
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src={bgbine} alt="" />
            <div class="owl-carousel-text">
              {/* <h1 class="display-1 text-white mb-0">Cardiology</h1> */}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};
export default Home;

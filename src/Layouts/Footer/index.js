import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
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

export default Footer;

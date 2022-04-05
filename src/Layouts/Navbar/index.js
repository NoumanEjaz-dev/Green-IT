import React from "react";
import logo from "../../assest/icons/logos.png";
import "./style.css";

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
                <a class="nav-link" href="#">
                  How IT Works
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*  */}
    </>
  );
};

export default Navbar;

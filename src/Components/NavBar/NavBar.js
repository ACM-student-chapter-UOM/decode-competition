import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [show, setshow] = useState(false);
  const showNavBar = () => {
    setshow(!show);
  };
  return (
    <div>
      <nav>
        <div className="navBar row">
          <div className="logo col-3 col-md-3 col-sm-3">
            <a href="#x">ACM</a>
          </div>
          <div
           
            className="menuIcon col-9 col-md-9 col-sm-9"
          >
            <i  onClick={showNavBar} class="fas fa-align-justify"></i>
          </div>
          <div
            className={
              show ? "col-md-12 col-sm-12" : "nav-links col-md-9 col-sm-9"
            }
          >
            <div className="row">
              <div className="items active col-md-2">
                <a href="#x">Home</a>
              </div>
              <div className="items col-md-2 ">
                <a href="#x">sponsers</a>
              </div>
              <div className="items col-md-2">
                <a href="#xgh">pricing</a>
              </div>
              <div className="items col-md-2">
                <a href="#x">FAQ</a>
              </div>
              <div className="items col-md-2">
                <a href="#x">ContactUs</a>
              </div>
              <div className="items col-md-2">
                <a href="#x">aboutUs</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React from "react";
import './NavBar.css'

const NavBar = () => {
    
  return (
    <div>
      <nav>
        <div className="navBar row">
          <div className="logo col-md-3 col-sm-3">
            <a href="#x">ACM</a>
          </div>
          <div className="nav-links col-md-9 col-sm-9">
            <div className="row">
              <div className= "items active col-md-2 col-sm-2" >
                <a href="#x">Home</a>
              </div>
              <div className="items col-md-2 col-sm-2">
                <a href="#x">sponsers</a>
              </div>
              <div className="items col-md-2 col-sm-2">
                <a href="#x">pricing</a>
              </div>
              <div className="items col-md-2 col-sm-2">
                <a href="#x">FAQ</a>
              </div>
              <div className="items col-md-2 col-sm-2">
                <a href="#x">ContactUs</a>
              </div>
              <div className="items col-md-2 col-sm-2">
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

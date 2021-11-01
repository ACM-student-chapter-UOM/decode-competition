import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import image from "../../resources/images/image.jpg";
import { countDown } from "./CountDown";
import Prizes from "../Prizes/Prizes";
import Footer from "../Footer/Footer";
import Faq from "../FAQ/Faq";

const Home = () => {
  setInterval(countDown, 1000);

  return (
    <>
      <div className="navigation">
        <NavBar />
      </div>
      <section className="home">
        <div className="comming-soon row d-flex align-items-stretch">
          <div className="numberCount col-md-9 col-sm-9 col-xs-9 col-8">
            <div className="container-day">
              <h3 className="day">00</h3>
              <h4>Day</h4>
            </div>
            <div className="container-hour">
              <h3 className="hour">00</h3>
              <h4>hour</h4>
            </div>
            <div className="container-minute">
              <h3 className="minute">00</h3>
              <h4>minute</h4>
            </div>
            <div className="container-second">
              <h3 className="second">00</h3>
              <h4>second</h4>
            </div>
          </div>

          <div className="container-register col-md-3 col-sm-3 col-xs-3 col-3">
            <a href="#x">Register Now</a>
          </div>
        </div>

        <div className="hacker-image">
          <img src={image} alt="imag" />
        </div>
      </section>
      <Prizes />
      <Prizes />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;

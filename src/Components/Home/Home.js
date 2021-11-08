import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import image from "../../resources/images/image.jpg";
import LogoWhite from "../../resources/images/LogoWhite.png";
import { countDown } from "./CountDown";
import Prizes from "../Prizes/Prizes";
import Footer from "../Footer/Footer";
import Timeline from "../Timeline/Timeline";
import Faq from "../FAQ/Faq";



const Home = () => {
  setInterval(countDown, 1000);

  return (
    <>
      <div className="navigation ">
        <NavBar />
      </div>

      {/*logo*/}
      <div className="logo-section">
        <img className="decode-logo" src={LogoWhite} atl={'decode-logo'} />
        &nbsp; &nbsp; &nbsp;
        <p className='decode-version'>DECODE 1.0</p>

        <p className="decode-description">Solve. Code. Win</p>
      </div>
      {/*logo end*/}

      <section className="home">
        <div className="comming-soon ">
          <div className="numberCount col-md-9 col-sm-9 col-xs-9 col-8">
            {/*counting start*/}
            <div className="container-day col-md-3 col-sm-3 col-xs-3 col-3">
              <p className="day">00</p>
              <h4>DAYS</h4>
            </div>
            <div className="container-hour col-md-3 col-sm-3 col-xs-3 col-3">
              <p className="hour">00</p>
              <h4>HOURS</h4>
            </div>
            <div className="container-minute col-md-3 col-sm-3 col-xs-3 col-3">
              <p className="minute">00</p>
              <h4>MINUTES</h4>
            </div>
            <div className="container-second col-md-3 col-sm-3 col-xs-3 col-3">
              <p className="second">00</p>
              <h4>SECONDS</h4>
            </div>
            {/*counting end*/}
          </div>
          <div className="container-register ">
            <a className="reg-btn" href="https://forms.gle/AJUK1967Vs3B1E2e7" target="_blank">Register Now</a>
          </div>
        </div>

        {/*<div className="hacker-image">*/}
        {/*  <img src={image} alt="imag" />*/}
        {/*</div>*/}
      </section>
      {/*<Prizes />*/}
      {/*<Prizes />*/}
      <Timeline />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;

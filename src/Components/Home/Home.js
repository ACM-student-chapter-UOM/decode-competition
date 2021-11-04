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
           <img className="decode-logo" src={LogoWhite} atl={'decode-logo'}/>
            &nbsp; &nbsp; &nbsp;
            <p className='decode-version'>DECODE 1.0</p>

           <p className="decode-description">Learn competitive programming with the help of CodeChef's coding competitions. <br/>Take part in these online coding contests to level up your skills.</p>
        </div>
        {/*logo end*/}

      <section className="home">
        <div className="comming-soon ">
          <div className="numberCount col-md-9 col-sm-9 col-xs-9 col-8">
              {/*counting start*/}
            <div className="container-day col-md-3 col-sm-3 col-xs-3 col-3">
              <p className="day">00</p>
              <h4>DAY</h4>
            </div>
            <div className="container-hour col-md-3 col-sm-3 col-xs-3 col-3">
              <p className="hour">00</p>
              <h4>HOUR</h4>
            </div>
            <div className="container-minute col-md-3 col-sm-3 col-xs-3 col-3">
              <p className ="minute">00</p>
              <h4>MINUTE</h4>
            </div>
            <div className="container-second col-md-3 col-sm-3 col-xs-3 col-3">
              <p className="second">00</p>
              <h4>SECOND</h4>
            </div>
              {/*counting end*/}
          </div>
            <div className="container-register col-md-3 col-sm-3 col-xs-3 col-4">
                <a className="reg-btn" href="#x">Register Now</a>
            </div>
        </div>

          {/*Register section*/}



          {/*Register section end*/}

        {/*<div className="hacker-image">*/}
        {/*  <img src={image} alt="imag" />*/}
        {/*</div>*/}
      </section>
      {/*<Prizes />*/}
      {/*<Prizes />*/}
      <Faq />
      <Footer />
    </>
  );
};

export default Home;

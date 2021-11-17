import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import image from "../../resources/images/hacker-image.jpeg";
import LogoWhite from "../../resources/images/LogoWhite.png";
//import { countDown } from "./CountDown";
import Prizes from "../Prizes/Prizes";
import Footer from "../Footer/Footer";
import Timeline from "../Timeline/Timeline";
import Faq from "../FAQ/Faq";
import Results from "../Results/Results";

const Home = () => {
  //setInterval(countDown, 1000);

  return (
    <>
      <div className="navigation">
        <NavBar />
      </div>

      <section className="home">
        <div className="comming-soon row">
          <div className="container-register col-sm">
            <a href="#results">Competition Ended!</a>
          </div>
          <div className="container-register col-sm">
            <a href="#results">Find Results Below &#x2B07;</a>
          </div>

        </div>

        <div className="hacker-image">
          <img src={image} alt="imag" />
        </div>
      </section>
      <Results />
      <Timeline />

      <Faq />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import "./styles.css";

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div>
          <h3 className="footer-follow-title">Follow us on</h3>
        </div>
        <div style={{ height: "10px" }} />
        <div className="footer-social-logo-container">
          <BsFacebook
            size="25px"
            className="social-link-image"
            onClick={() => {
              window.open("https://www.facebook.com/ACM.UOM/");
            }}
          />
          <div style={{ width: "20px" }} />
          <BsLinkedin
            size="25px"
            className="social-link-image"
            onClick={() => {
              window.open(
                "https://lk.linkedin.com/company/acm-student-chapter-university-of-moratuwa"
              );
            }}
          />
        </div>
        <div style={{ height: "20px" }} />
        <p className="copyright-message">© 2021 ACM student's chapter</p>
      </div>
    </section>
  );
}

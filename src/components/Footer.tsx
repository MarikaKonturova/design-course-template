import React from "react";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import behance from "../assets/icons/behance.svg";

export const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className="footer_group">
        <div className="footer_group-1">
          <h1 className="logo" id="logo">
            DesignCourse
          </h1>
          <p>
            Introduction a brand new ui and ux design course <b>Apuff</b>
          </p>
        </div>
        <div className="footer_group-2">
          <h2>Featured</h2>
          <div className="links">
            <a href="#intro">Home</a>
            <a href="#course">Courses</a>
          </div>
        </div>
        <div className="footer_group-3">
          <h2>
            <b>Follow us</b>
          </h2>
          <div className="social">
            <img src={facebook} alt="social-media-facebook" />
            <img src={twitter} alt="social-media-twitter" />
            <img src={instagram} alt="social-media-instagram" />
            <img src={behance} alt="social-media-behance" />
          </div>
        </div>
      </div>
      <div className="footer_info">
      <hr/>
        <div className="privacy-disclaimer">
          <p>Privacy policy</p>
          <p>Disclaimer</p>
        </div>
        <p>&copy; Design Course 2021</p>
      </div>
    </footer>
  );
};

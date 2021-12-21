import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="bookmart__footer section__padding">
    <div className="bookmart__footer-heading">
      <h1 className="b">Best Recycle is Book Recycle.</h1>
    </div>

    <div className="bookmart__footer-links">
      <div className="bookmart__footer-links_logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2702/2702069.png"
          style={styles.logoStyle}
          alt="logo"
        />
        <p>
          BookMart building, 123-Lane,Bookmart City <br /> All Rights Reserved
        </p>
      </div>
      <div className="bookmart__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="bookmart__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="bookmart__footer-links_div">
        <h4>Get in touch</h4>
        <p>BookMart building, 123-Lane,</p>
        <p>Bookmart City, BookMart World</p>
        <p>+91-9988776655</p>
        <p>book@mart.com</p>
      </div>
    </div>

    <div className="bookmart__footer-copyright">
      <p>@2021 BookMart. &copy; Copyright.</p>
    </div>
  </div>
);

// logo

const styles = {
  logoStyle: {
    height: "4rem",
  },
};

export default Footer;

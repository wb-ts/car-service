import React from "react";
import FooterBottom from "../FooterBottom";
import FooterTop from "../FooterTop";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

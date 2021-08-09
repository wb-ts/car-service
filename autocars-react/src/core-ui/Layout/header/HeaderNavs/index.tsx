import React from "react";
import HeaderNavsOptions from "../HeaderNavsOptions";
import "./HeaderNavs.css";

const HeaderNavs = () => {
  return (
    <div className="headerNavs">
      <HeaderNavsOptions title="Home" url="/" />
      <HeaderNavsOptions title="Cars" url="/cars" />
      <HeaderNavsOptions title="Services" url="/services" />
      <HeaderNavsOptions title="Contact Us" url="/contact-us" />
    </div>
  );
};

export default HeaderNavs;

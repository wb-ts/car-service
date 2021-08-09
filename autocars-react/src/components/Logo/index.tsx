import React from "react";
import "./Logo.css";
import { LogoImage, LogoLightImage } from "assets/images/images-index";

interface ILogo {
  theme?: "dark" | "light";
}

const Logo = ({ theme }: ILogo) => {
  return (
    <div className="logo">
      {theme === "light" ? (
        <img src={LogoLightImage} alt="logo" />
      ) : (
        <img src={LogoImage} alt="logo" />
      )}
      <p className="logo__title">Autocars</p>
    </div>
  );
};

export default Logo;

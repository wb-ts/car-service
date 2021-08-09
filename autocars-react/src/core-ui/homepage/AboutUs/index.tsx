import { JeepImage } from "assets/images/images-index";
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs__image">
        <img src={JeepImage} alt="jeep" className="aboutUs__image__file" />
      </div>
      <div className="aboutUs__info">
        <h3 className="aboutUs__info__title">About Us</h3>
        <h2 className="aboutUs__info__heading">
          Feel The Best Experience With Our Rental Deals.
        </h2>
        <p className="aboutUs__info__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus
          neque magni voluptatem expedita ab dicta accusamus officiis impedit
          nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          natus neque magni voluptatem expedita ab dicta accusamus officiis
          impedit nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem natus neque magni voluptatem expedita ab dicta accusamus
          officiis impedit nemo!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

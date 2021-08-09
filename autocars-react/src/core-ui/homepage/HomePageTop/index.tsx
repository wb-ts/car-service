import { BlobImage, Porche } from "assets/images/images-index";
import { RouterButton } from "components/components-index";
import React from "react";
import "./HomePageTop.css";

const HomePageTop = () => {
  return (
    <div className="homePageTop">
      <div className="homePageTop__left">
        <h1 className="homePageTop__left__slogan">
          Rent The Best Quality Car's With Us
        </h1>
        <p className="homePageTop__left__description">
          Always choose the best cars from our local stores or order it remotely
          at the best prices for you and get the best quality car for as long as
          you like.
        </p>
        <div className="homePageTop__left__buttons">
          <RouterButton title="Book Your Ride" url="/login" theme="fill" />
          <RouterButton title="Auction Your Car" url="/login" theme="outline" />
        </div>
      </div>
      <div className="homePageTop__right">
        <img src={BlobImage} alt="blob" className="homePageTop__right__blob" />
        <img src={Porche} alt="car" className="homePageTop__right__car" />
      </div>
    </div>
  );
};

export default HomePageTop;

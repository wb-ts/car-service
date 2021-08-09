import React from "react";
import "./FooterBottomOptions.css";

interface IFooterBottomOptions {
  heading: string;
  Icon: any;
  info: string;
}

const FooterBottomOptions = ({ heading, Icon, info }: IFooterBottomOptions) => {
  return (
    <div className="footerBottomOptions">
      <h3 className="footerBottomOptions__heading">{heading}</h3>
      <div className="footerBottomOptions__info">
        <p className="footerBottomOptions__info__icon">
          <Icon />
        </p>
        <h5 className="footerBottomOptions__info__data">{info}</h5>
      </div>
    </div>
  );
};

export default FooterBottomOptions;

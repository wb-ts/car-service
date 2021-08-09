import { CallIcon, MailIcon, PinDropIcon } from "assets/icons";
import React from "react";
import FooterBottomOptions from "../FooterBottomOptions";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="footerBottom">
      <FooterBottomOptions
        heading="Location"
        Icon={PinDropIcon}
        info="404, St. Not Found, Error City, Return"
      />
      <FooterBottomOptions
        heading="Call Now"
        Icon={CallIcon}
        info="+914573347645"
      />
      <FooterBottomOptions
        heading="Mail"
        Icon={MailIcon}
        info="support@autocars.com"
      />
    </div>
  );
};

export default FooterBottom;

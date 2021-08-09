import React from "react";
import { Logo } from "components/components-index";
import "./FooterTop.css";
import FooterTopLinks from "../FooterTopLinks";

const FooterTop = () => {
  return (
    <div className="footerTop">
      <div className="footerTop__info">
        <Logo theme="light" />
        <p className="footerTop__info__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, soluta
          minus blanditiis libero corrupti eum ex incidunt esse, rem harum
          minima ad et nulla inventore vitae eos optio officia magnam.
        </p>
      </div>
      <FooterTopLinks
        heading="Our Links"
        lists={[
          { link: "/", title: "Home" },
          { link: "/about", title: "About" },
          { link: "/services", title: "Services" },
          { link: "/models", title: "Models" },
          { link: "/blog", title: "Blog" },
        ]}
      />
      <FooterTopLinks
        heading="Other Links"
        lists={[
          { link: "/contact", title: "Contact Us" },
          { link: "/faq", title: "FAQ" },
          { link: "/support", title: "Support" },
          { link: "/privacy", title: "Privacy Policy" },
          { link: "/tos", title: "Terms & Condition" },
        ]}
      />
    </div>
  );
};

export default FooterTop;

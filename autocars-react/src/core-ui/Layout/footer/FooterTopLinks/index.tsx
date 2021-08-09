import React from "react";
import { Link } from "react-router-dom";
import "./FooterTopLinks.css";

interface IFooterTopLinks {
  heading: string;
  lists: { link: string; title: string }[];
}

const FooterTopLinks = ({ heading, lists }: IFooterTopLinks) => {
  return (
    <div className="footerTopLinks">
      <h3 className="footerTopLinks__heading">{heading}</h3>
      <div className="footerTopLinks__list">
        {lists.map(({ link, title }) => (
          <Link to={link} key={title}>
            <h5 className="footerTopLinks__list__title">{title}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterTopLinks;

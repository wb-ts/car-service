import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNavsOptions.css";

interface IHeaderNavsOptions {
  title: String;
  url: String;
}
const HeaderNavsOptions = ({ title, url }: IHeaderNavsOptions) => {
  return (
    <div className="headerNavsOptions">
      <Link to={`${url}`}>
        <h5 className="headerNavsOptions__value">{title}</h5>
      </Link>
    </div>
  );
};

export default HeaderNavsOptions;

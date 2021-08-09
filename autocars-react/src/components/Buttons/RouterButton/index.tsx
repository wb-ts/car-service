import React from "react";
import { Link } from "react-router-dom";
import "./RouterButton.css";

interface IRouterButton {
  title: String;
  url: String;
  theme?: "fill" | "outline";
}

const RouterButton = ({ title, url, theme }: IRouterButton) => {
  return (
    <Link to={url}>
      <button
        className={
          theme === "fill"
            ? "routerButton routerButton__fill"
            : "routerButton routerButton__outline"
        }
      >
        <h5 className="routerButton__text">{title}</h5>
      </button>
    </Link>
  );
};

export default RouterButton;

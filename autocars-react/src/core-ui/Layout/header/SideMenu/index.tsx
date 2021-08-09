import React from "react";
import HeaderNavsOptions from "../HeaderNavsOptions";
import { CancelIcon } from "assets/icons";
import "./SideMenu.css";

interface ISideMenu {
  showMenu: Boolean;
  setShowMenu: any;
}

const SideMenu = ({ showMenu, setShowMenu }: ISideMenu) => {
  console.log(showMenu);

  return (
    <div className="sideMenu">
      <div className="sideMenu__top">
        Autocars
        <p className="sideMenu__top__menuIcon" onClick={setShowMenu}>
          <CancelIcon />
        </p>
      </div>
      <div className="sideMenu__options">
        <HeaderNavsOptions title="Home" url="/" />
        <HeaderNavsOptions title="Cars" url="/cars" />
        <HeaderNavsOptions title="Services" url="/services" />
        <HeaderNavsOptions title="Contact Us" url="/contact-us" />
      </div>
    </div>
  );
};

export default SideMenu;

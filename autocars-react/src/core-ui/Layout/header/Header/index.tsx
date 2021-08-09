import React, { useState } from "react";
import { Logo } from "components/components-index";
import "./Header.css";
import HeaderNavs from "../HeaderNavs";
import { MenuIcon, CancelIcon } from "assets/icons";
import SideMenu from "../SideMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  return (
    <nav className="header">
      <Logo />
      <HeaderNavs />
      {showMenu ? (
        <SideMenu showMenu={showMenu} setShowMenu={() => setShowMenu(false)} />
      ) : (
        <p className="header__menuIcon" onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </p>
      )}
    </nav>
  );
};

export default Header;

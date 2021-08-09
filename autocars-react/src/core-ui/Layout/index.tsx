import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

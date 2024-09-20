import React from "react";
import Navigation from "./Navigation/Navigation";
import About from "./About/About";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.Header}>
      <Navigation />
      <About />
    </div>
  );
};

export default Header;

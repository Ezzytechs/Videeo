import React from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.Header}>
      <Navigation />
    </div>
  );
};

export default Header;

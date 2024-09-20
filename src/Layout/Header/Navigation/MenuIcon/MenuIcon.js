import React from "react";
import classes from "./MenuIcon.module.css";
const menuIcon = (props) => {
  const iconDiv = [classes.IconDiv, props.status ? classes.CloseDiv : ""].join(
    " "
  );
  return (
    <>
      <div onClick={props.open} className={iconDiv}>
        <div className={props.status ? classes.Bar1 : classes.Icon}></div>
        <div className={props.status ? classes.Bar2 : classes.Icon}></div>
        <div className={props.status ? classes.Bar3 : classes.Icon}></div>
      </div>
    </>
  );
};

export default menuIcon;

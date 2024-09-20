import React from "react";
import classes from "./SubNavigation.module.css";

const Subnavigation = (props) => {
  return (
    <div className={classes.SubNavigation}>
      <div className={classes.ItemName}>{props.name}</div>
      <div className={classes.ItemLinks}>
        {props.links.map((link) => {
          return <h6 key={link.name}>{link.name}</h6>;
        })}
      </div>
    </div>
  );
};

export default Subnavigation;

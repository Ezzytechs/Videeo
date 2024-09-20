import React from "react";
import classes from "./WelcomeScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={classes.LoadingContainer}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default LoadingScreen;

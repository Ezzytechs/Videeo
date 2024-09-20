import React from "react";
import Modal from "../../UI/Modal/Modal";
import Navigations from "../../Common/Navigations/Navigations";

import classes from "./SideDrawal.module.css";
const SideDrawal = (props) => {
  const animateSide = [
    classes.SideDrawal,
    props.status ? classes.Open : classes.Close,
  ].join(" ");
  return (
    <>
      {" "}
      {props.status && <Modal click={props.click} />}
      <div className={animateSide}>
        <Navigations CSSstyle={classes.NavCSS} click={props.click} />
        <div className={classes.ContactButton}>
          <div className={classes.SideDrawalSocailHandles}></div>
        </div>
      </div>
    </>
  );
};

export default SideDrawal;

import React from "react";
import classes from "./Modal.module.css";
const Modal = (props) => {
  return <div onClick={props.click} className={classes.ModalContainer}></div>;
};

export default Modal;

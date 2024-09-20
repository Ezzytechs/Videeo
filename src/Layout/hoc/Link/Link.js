import React from "react";
import { Link } from "react-router-dom";
import classes from "./Link.module.css";
const MyLink = (props) => {
  return <Link to={props.link}>{props.name}</Link>;
};

export default MyLink;

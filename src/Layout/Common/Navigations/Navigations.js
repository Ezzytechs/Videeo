import React from "react";
import classes from "./Navigations.module.css";
import MyLink from "../../hoc/Link/Link";
import { Link } from "react-router-dom";
const Navigations = (props) => {
  const links = [
    { name: "Movies", link: "/", image: "" },
    { name: "TV Shows", link: "/", image: "" },
    { name: "Signup", link: "/signup", image: "" },
    { name: "Login", link: "/login", image: "" },
  ].map((link) => {
    return <MyLink key={link.name} link={link.link} name={link.name}></MyLink>;
  });
  const headerClass = [props.CSSstyle, classes.HeaderNav].join(" ");
  return (
    <>
      <div className={classes.Navigation}>
        {" "}
        {props.children}
        <div className={headerClass}>{links}</div>
      </div>
    </>
  );
};

export default Navigations;

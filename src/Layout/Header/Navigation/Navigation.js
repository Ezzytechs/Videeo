import React, { useState } from "react";
import Navigations from "../../Common/Navigations/Navigations";
import MenuIcon from "./MenuIcon/MenuIcon";
import clasess from "./Navigation.module.css";
import SideDrawal from "../SideDrawal/SideDrawal";

const Navigation = () => {
  const [toogleSideDrawal, setToogleSideDrawal] = useState(false);

  const handleSideDrawal = () => {
    setToogleSideDrawal(!toogleSideDrawal);
  };

  return (
    <div className={clasess.headerNav}>
      <Navigations CSSstyle={clasess.NavCSS}>
        <div className={clasess.MyName}>Videeo</div>
      </Navigations>

      <MenuIcon open={handleSideDrawal} status={toogleSideDrawal} />
      <SideDrawal status={toogleSideDrawal} click={handleSideDrawal} />
    </div>
  );
};

export default Navigation;

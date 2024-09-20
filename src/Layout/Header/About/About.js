import React from "react";
import classes from "./about.module.css";
// import { useInView } from "react-intersection-observer";
const AboutMe = React.memo(() => {
  // let { inView, ref } = useInView({
  //   triggerOnce: true,
  //   rootMargin: "-100px -100px",
  // });
  return (
    <div className={classes.AboutMe}>
      <h2 className={classes.AboutMeSubHeading}>Videeo</h2>
      <p className={classes.AboutMeWriteUp}>
        Stream Your Favourite Movies & Tv Shows.
        <br />
        Get Entertained
      </p>
    </div>
  );
});

export default AboutMe;

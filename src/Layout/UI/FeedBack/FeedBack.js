import React from "react";
import classes from "./FeedBack.module.css";
const FeedBack = (props) => {
  const toggleClass = [
    classes.FeedBackContainer,
    props.error ? classes.Show : classes.Hide,
  ].join(" ");
  return (
    <div className={toggleClass}>
      <div className={classes.FeedBackInfo}>
        <h1>?</h1>
        <h3>ERROR!</h3>
        <p>
          {props.FeedBackMessage ||
            "There is problem sending your message. Please, check your network connectivity and try again."}
        </p>
        <br></br>
        <button onClick={props.close}>Close</button>
      </div>
    </div>
  );
};

export default FeedBack;

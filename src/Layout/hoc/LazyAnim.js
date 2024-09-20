import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./LazyAnim.module.css";
const LazyAnimation = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px 100px",
  });
  // console.log(inView, "Lazy Anim");
  return (
    <div ref={ref} className={inView ? classes.opacity1 : classes.opacity0}>
      <span aria-label="Wave">👋</span>
    </div>
  );
};
const memorizedCom = React.memo(LazyAnimation);
export default memorizedCom;

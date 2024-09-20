import React from "react";
import Movies from "./Movies/Movies";
import TvShows from "./TvShows/TvShows";
import Search from "./Search/Search";
import classes from "./Homepage.module.css";
const Homepage = () => {
  return (
    <>
      <Search />
      <div className={classes.MoviesTv}>
        <Movies />
        <TvShows />
      </div>
    </>
  );
};

export default Homepage;

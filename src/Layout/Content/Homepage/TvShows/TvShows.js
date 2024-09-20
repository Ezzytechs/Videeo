import React, { useState, useEffect } from "react";
import { tvShowsList } from "./TvShowsData";
import classes from "./TvShows.module.css";

const TvShows = () => {
  const [tvShows, setTvShows] = useState(tvShowsList);
  useEffect(
    () =>
      function () {
        setTvShows(tvShowsList);
      }
  );
  const tvShowsEl = tvShows.map((tvShow) => {
    return (
      <div key={tvShow.name} className={classes.Shows}>
        <img src={tvShow.image} alt={tvShow.name} />
        <h1>{tvShow.name}</h1>;<a href={tvShow.link}> Watch</a>;
      </div>
    );
  });
  return (
    <>
      <h1>Tv Shows</h1>
      <div className={classes.ShowsContainer}>{tvShowsEl}</div>
    </>
  );
};

export default TvShows;

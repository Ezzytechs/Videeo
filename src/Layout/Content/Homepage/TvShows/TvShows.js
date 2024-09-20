import React, { useState, useEffect } from "react";
import { tvShowsList } from "./TvShowsData";
import classes from "./TvShows.module.css";
import Subnavigation from "../../../Common/SubNavigation/SubNavigation";

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
      <div key={tvShow.name} className={classes.tvShow}>
        <div className={classes.ImagePlayOverLay}>
          <div className={classes.PlayOverlay}>
            <a href={tvShow.link}>
              <h4>PLAY</h4>
            </a>
          </div>
          <img src={tvShow.image} alt={tvShow.name} />
        </div>

        <div className={classes.TitleYear}>
          <h3 className={classes.Title}>{tvShow.name}</h3>
          <h3>since:{tvShow.year}</h3>
        </div>
      </div>
    );
  });
  const links = [
    { name: "New", link: "/", image: "" },
    { name: "Trending", link: "/", image: "" },
    { name: "Coming Next", link: "/signup", image: "" },
  ];
  return (
    <div className={classes.TVShows}>
      <Subnavigation name={"TV Shows"} links={links} />
      <div className={classes.ShowsContainer}>{tvShowsEl}</div>
    </div>
  );
};

export default TvShows;

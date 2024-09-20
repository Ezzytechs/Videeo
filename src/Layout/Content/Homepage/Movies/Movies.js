import React, { useState, useEffect, useContext } from "react";
import { moviesList } from "./moviesData";
import Subnavigation from "../../../Common/SubNavigation/SubNavigation";
import { SearchContext } from "../../../../Contexts/Search";
import classes from "./Movies.module.css";

const Movies = () => {
  // Default movies list from moviesData
  const [movies, setMovies] = useState(moviesList);

  // Get search result from the context
  const { searchResult } = useContext(SearchContext);

  // If searchResult is not null/undefined render it.
  const displayedMovies =
    searchResult && searchResult.length > 0 ? searchResult : movies;

  // useEffect(() => {
  // setMovies(moviesList)
  // }, []);

  // Render the list of movies or search results
  const moviesEl = displayedMovies.map((movie, index) => {
    return (
      <div key={movie.name + index} className={classes.Movies}>
        <div className={classes.ImagePlayOverLay}>
          <div className={classes.PlayOverlay}>
            <a href={movie.link}>
              <h4>PLAY</h4>
            </a>
          </div>
          <img src={movie.image} alt={movie.name} />
        </div>

        <div className={classes.TitleYear}>
          <h3 className={classes.Title}>{movie.name}</h3>
          <h3>2024</h3>
        </div>
        <div className={classes.ResolutionDuration}>
          <div className={classes.Resolution}>{movie.resolution}</div>
          <div className={classes.DurationRatings}>
            <h6>{movie.duration} min</h6>
            <h6>{movie.rating}</h6>
          </div>
        </div>
      </div>
    );
  });

  // Subnavigation links
  const links = [
    { name: "Popular", link: "/", image: "" },
    { name: "Most Rated", link: "/", image: "" },
    { name: "Trailers", link: "/signup", image: "" },
  ];

  return (
    <div className={classes.MoviesC}>
      <Subnavigation links={links} name={"Movies"} />
      <div className={classes.MoviesContainer}>{moviesEl}</div>
    </div>
  );
};

export default Movies;

import React, { useState, useEffect } from "react";
import { moviesList } from "./moviesData";
import classes from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState(moviesList);

  const moviesEl = movies.map((movie) => {
    return (
      <div key={movies.name} className={classes.Movies}>
        <img src={movie.image} alt={movies.name} />
        <h3>{movie.name}</h3>;<a href={movie.link}> Watch</a>;
      </div>
    );
  });
  return (
    <>
      <h1>Movies</h1>
      <div className={classes.MoviesContainer}>{moviesEl}</div>
    </>
  );
};

export default Movies;

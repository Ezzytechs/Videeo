import React, { useState, useContext } from "react";
import classes from "./Search.module.css";
import { moviesList } from "../Movies/moviesData";
import { SearchContext } from "../../../../Contexts/Search";
const Search = () => {
  const [movies, setMovies] = useState(moviesList);
  const [value, setValue] = useState("");
  const { setSearchResult } = useContext(SearchContext);
  const searchHandler = (e) => {
    e.preventDefault();
    const list = movies.filter(
      (movies) =>
        movies.name.toLowerCase().startsWith(value.toLowerCase()) ||
        movies.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(list);
  };
  return (
    <>
      <div className={classes.searchContainer}>
        <form onSubmit={(e) => searchHandler(e)}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};
export default Search;

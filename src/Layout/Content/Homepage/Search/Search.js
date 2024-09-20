import React from "react";
import classes from "./Search.module.css";
const Search = () => {
  return (
    <>
      <div className={classes.searchContainer}>
        <form>
          <input type="text" placeholder="Search.." name="search" />{" "}
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};
export default Search;

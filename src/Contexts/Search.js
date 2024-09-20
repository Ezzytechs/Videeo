import React, { createContext, useState } from "react";

// Create the context
export const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState(null);

  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </SearchContext.Provider>
  );
};

'use client'
import React, { createContext, useContext, useState } from 'react';

const SearchQueryContext = createContext();

export const SearchQueryContextProvider = ( { children }) => {
    const [ searchInput, setSearchInput ] = useState([]);
    //globel searchinput value
return (
    <SearchQueryContext.Provider value={{ searchInput, setSearchInput }}>
        { children } 
    </SearchQueryContext.Provider>
);
};
export const useSearchQueryContext = () =>  useContext(SearchQueryContext);
'use client';
import React, {  useState } from 'react';


// global state so I can change it in bar layout and api.
const SearchQueryState = () => {
  const [ searchInput, setSearchInput ] =useState([]);
  const searchInputLength = searchInput.length >= 1;
  return( { searchInput, setSearchInput, searchInputLength})
}
export default SearchQueryState;
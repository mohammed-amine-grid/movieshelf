import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {search, searchMovies} from '../features/searchMovie/searchSlice'
import {useDebouncedCallback} from 'use-debounce';
import { reset } from '../features/movieinfo/movieinfoSlice';


 const SearchInput = () => {
    const searchInput = useSelector((state) => state.search.searchInput);
    
    const dispatch = useDispatch();
    const debouncedSearch = useDebouncedCallback((value) => {dispatch(searchMovies(value))}, 1200);
    const debouncedReset = useDebouncedCallback(() => {dispatch(reset())}, 1200);


    const handleSearch = (event) => {
        dispatch(search(event.target.value));
        debouncedReset();
        debouncedSearch(searchInput);
    }
  
  return (
    <input value={searchInput} onChange={handleSearch} placeholder='Search for a movie...' className='search-box' type="text"  />
  )
}


export default SearchInput;
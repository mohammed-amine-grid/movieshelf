import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {search, searchMovies} from '../features/searchMovie/searchSlice'
import MovieCard from '../components/MovieCard';
import './dashboard.css';
import {useDebouncedCallback} from 'use-debounce';
import MovieDetails from './MovieDetails';
import MovieCardList  from '../components/MovieCardList';

const Dashboard = () => {
    const searchInput = useSelector((state) => state.search.searchInput);
    const movies = useSelector((state) => state.search.movies);
    
    const dispatch = useDispatch();
    const debouncedSearch = useDebouncedCallback((value) => {dispatch(searchMovies(value))}, 1000)

    const handleSearch = (event) => {
        dispatch(search(event.target.value));
        debouncedSearch(searchInput);
    }


    return (
    <div className='dashboard'>

        {/* <MovieDetails /> */}

        {/* input-view */}
        <input value={searchInput} onChange={handleSearch} placeholder='Search for a movie...' className='search-box' type="text"  />
     

      

       { movies &&
       
       <MovieCardList movies={movies} />}
        {/* </div> */}
    </div>
  )
}

export default Dashboard;
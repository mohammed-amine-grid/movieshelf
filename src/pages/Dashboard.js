import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {search, searchMovies} from '../features/searchMovie/searchSlice'
import MovieCard from '../components/MovieCard';
import './dashboard.css';
import {useDebouncedCallback} from 'use-debounce';


const Dashboard = () => {
    const searchInput = useSelector((state) => state.search.searchInput);
    const movies = useSelector((state) => state.search.movies);
    
    const debouncedSearch = useDebouncedCallback((value) => {dispatch(searchMovies(value))}, 1000)

    const handleSearch = (event) => {
        dispatch(search(event.target.value));
        debouncedSearch(searchInput);
    }

    const dispatch = useDispatch();

    return (
    <div className='dashboard'>

        <input value={searchInput} onChange={handleSearch} placeholder='Search for a movie...' className='search-box' type="text"  />
        <button>
            click me
        </button>

        <div className='movie-container'>
       {movies && movies.map((movie,i) => <p key={i}>{movie.title}</p>)}
        
        </div>
    </div>
  )
}

export default Dashboard;
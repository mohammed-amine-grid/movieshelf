import React from 'react';
import { useSelector } from "react-redux";
import './dashboard.css';
import MovieDetails from './MovieDetails';
import MovieCardList  from '../components/MovieCardList';
import SearchInput from '../components/SearchInput';




const Dashboard = () => {


    const isMovieSelected = useSelector((state) => state.select.isMovieSelected);

    const movies = useSelector((state) => state.search.movies);
    
    return (
    <div className='dashboard'>

        { <SearchInput />}

       {!isMovieSelected && movies &&
       <MovieCardList movies={movies} />}


        {isMovieSelected && <MovieDetails />}

        {/* input-view */}
     

        

       
        {/* </div> */}
    </div>
  )
}

export default Dashboard;
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import './dashboard.css';
import MovieDetails from './MovieDetails';
import MovieCardList  from '../components/MovieCardList';
import SearchInput from '../components/SearchInput';
import { getGenres } from '../features/movieinfo/movieinfoSlice';




const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      console.log('hello');
      dispatch(getGenres())
    }, []);

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
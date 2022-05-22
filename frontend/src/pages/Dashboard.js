import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import './dashboard.css';
import MovieDetails from './MovieDetails';
import MovieCardList  from '../components/MovieCardList';
import SearchInput from '../components/SearchInput';
import { getGenres } from '../features/movieinfo/movieinfoSlice';
import WatchlistCard from '../components/WatchlistCard';




const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getGenres())
    }, [dispatch]);

    const isMovieSelected = useSelector((state) => state.select.isMovieSelected);
    const selectedMovieId = useSelector((state) => state.select.movieId);

    const movies = useSelector((state) => state.search.movies);
    
    return (
    <div className='dashboard'>

        {/* <SearchInput />

       {!isMovieSelected && movies &&
       <MovieCardList movies={movies} />}


        {isMovieSelected && <MovieDetails id={selectedMovieId} />} */}
        <WatchlistCard />

        
    </div>
  )
}

export default Dashboard;
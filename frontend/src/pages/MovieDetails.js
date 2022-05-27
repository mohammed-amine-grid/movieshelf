import React, {useEffect, useState} from 'react';
import './movieDetails.css';
import  {FcBookmark} from 'react-icons/fc'
import { useSelector, useDispatch } from 'react-redux';
import { getInfo } from '../features/movieinfo/movieinfoSlice';
import {  getWatchList } from '../features/watchlist/watchlistSlice';
import WatchlistCard from '../components/WatchlistCard';
import Spinner from '../components/Spinner';

 const MovieDetails = ({id}) => {


 const dispatch = useDispatch();

 const movieInfo = useSelector((state) => state.select.movieInfo);
 const isLoading = useSelector(state => state.select.isLoading);
 const watchlist = useSelector(state => state.watchlist.watchlist);

 let addedToWatchlist =  watchlist.some(movie => movie.id === movieInfo.id);

  
 
  useEffect(() => {

    dispatch(getInfo(id));
    dispatch(getWatchList());
  },[dispatch, id])






  return (
    <div className='movie-details-wrapper'>
        {isLoading ? <Spinner /> : <WatchlistCard addedToWatchlist={addedToWatchlist} movie={movieInfo} />}

    </div>
  )
}

export default MovieDetails;


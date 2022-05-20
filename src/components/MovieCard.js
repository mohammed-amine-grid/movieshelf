import React from 'react';
import './movieCard.css';
import { useDispatch } from "react-redux";
import { selectMovie } from '../features/movieinfo/movieinfoSlice';





 const MovieCard = ({movie}) => {

const dispatch = useDispatch();

const handleSelect = () => {
    dispatch(selectMovie(movie))
}


  return (
    <div onClick={handleSelect} className='card'>
      <img alt='movie_poster' className='card-img' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <h2 className='card-title'>{movie.title}</h2>
      <span className='card-year'>{movie.release_date.substring(0, 4) ?? undefined}</span>
    </div>
  )
}

export default MovieCard;
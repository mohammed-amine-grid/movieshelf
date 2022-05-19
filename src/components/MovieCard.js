import React from 'react';
import './movieCard.css';
import { useSelector, useDispatch } from "react-redux";
import { selectMovie } from '../features/movieinfo/movieinfoSlice';





 const MovieCard = ({movie}) => {
  const selectedMovie = useSelector((state) => 
  state.select.movieInfo
)
const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(selectMovie(movie))} className='card'>
      <img className='card-img' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <h2 className='card-title'>{movie.title}</h2>
      <span className='card-year'>{movie.release_date.substring(0, 4)}</span>
    </div>
  )
}

export default MovieCard;
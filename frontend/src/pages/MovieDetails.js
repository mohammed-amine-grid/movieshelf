import React, {useEffect} from 'react';
import './movieDetails.css';
import  {FcBookmark} from 'react-icons/fc'
import { useSelector, useDispatch } from 'react-redux';
import { getInfo } from '../features/movieinfo/movieinfoSlice';
import { durationConvert } from '../utils/durationConvert';
import { addToWatchlist } from '../features/watchlist/watchlistSlice';



 const MovieDetails = ({id}) => {


 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo(id))
  },[dispatch, id])

  const movieInfo = useSelector((state) => state.select.movieInfo);
  const movieGenres = useSelector((state) => state.select.movieGenreNames)



  return (
    <div className='movie-details-wrapper'>
        <h3>{movieInfo.title}</h3>
        <div className='movie-details-trailer'>
        <iframe title='me' src={`https://www.youtube.com/embed/${movieInfo.ytTrailerKey}`}  allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no"   scrolling="no"></iframe>        
        </div >

        <div className='movie-details-score-action'>
            <span className='movie-details-score'>{movieInfo.vote_average} /10</span>
            <span>{durationConvert(movieInfo.runtime)}</span>
        </div>

        <div className='movie-details-genres'>
        {movieGenres.map((genre, i) => <span key={i}>{genre}</span>)}
        </div>

        <span  onClick={() => dispatch(addToWatchlist())} className='movie-details-add-fav'><FcBookmark  size={30} /></span>

        <p className='movie-details-overview'>{movieInfo.overview}</p>

    </div>
  )
}

export default MovieDetails;


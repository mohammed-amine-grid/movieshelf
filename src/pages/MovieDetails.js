import React, {useEffect} from 'react';
import './movieDetails.css';
import  {FcBookmark} from 'react-icons/fc'
import { useSelector, useDispatch } from 'react-redux';
import { getInfo } from '../features/movieinfo/movieinfoSlice';
import { durationConvert } from '../utils/durationConvert';



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
            <span className='movie-details-add-fav'><FcBookmark size={30} /></span>
            <span>{durationConvert(movieInfo.runtime)}</span>
        </div>
        {movieGenres.map((genre, i) => <span key={i}>{genre}</span>)}
        <p>{movieInfo.overview}</p>

    </div>
  )
}

export default MovieDetails;


import React, {useEffect} from 'react';
import './movieDetails.css';
import  {FcBookmark} from 'react-icons/fc'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieTrailer, getInfo } from '../features/movieinfo/movieinfoSlice';




 const MovieDetails = ({id}) => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieTrailer(id))
    dispatch(getInfo(id))
  },[dispatch, id])

  const ytTrailerKey = useSelector((state) => state.select.movieTrailer);




  return (
    <div className='movie-details-wrapper'>
        <h3>Titlte</h3>
        <div className='movie-details-trailer'>
        <iframe title='me' src={`https://www.youtube.com/embed/${ytTrailerKey}`}  allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no"   scrolling="no"></iframe>        
        </div >

        <div className='movie-details-score-action'>
            <span className='movie-details-score'>IMDB: 8</span>
            <span className='movie-details-add-fav'><FcBookmark size={30} /></span>
        </div>

    </div>
  )
}

export default MovieDetails;


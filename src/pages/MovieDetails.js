import React from 'react';
import './movieDetails.css';
import  {FcBookmark} from 'react-icons/fc'


 const MovieDetails = () => {
  return (
    <div className='movie-details-wrapper'>
        <h3>Titlte</h3>
        <div className='movie-details-trailer'>
        {/* <iframe title='me' src="https://www.imdb.com/video/imdb/vi1462938649/imdb/embed?autoplay=false"  allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no" width='1024'   scrolling="no"></iframe>         */}
        wassup
        </div >

        <div className='movie-details-score-action'>
            <span className='movie-details-score'>IMDB: 8</span>
            <span className='movie-details-add-fav'><FcBookmark size={30} /></span>
        </div>

    </div>
  )
}

export default MovieDetails;


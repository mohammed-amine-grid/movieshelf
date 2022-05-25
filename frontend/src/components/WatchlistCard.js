import React, {useState} from 'react'
import './watchlistCard.css';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {durationConvert} from '../utils/durationConvert'
import { addToWatchlist, deleteFromWatchlist } from '../features/watchlist/watchlistSlice';
import { useDispatch } from 'react-redux';


const WatchlistCard = ({movie, addedToWatchlist, removebtn}) => {

  const [watchTrailer, setWatchTrailer] = useState(false);
  const dispatch = useDispatch();

  return (
      <div className='movie-card-container'>
    <div className='movie-card'>
    <div className='movie-card-overlay'>
        <div className='movie-card-poster-container'>

            {!watchTrailer ? <><img className='movie-card-poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />

            <BsFillPlayCircleFill onClick={() => setWatchTrailer(true)} className='play-btn' color='#FF0000' size={60}/>
            </>
            :
             <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.ytTrailerKey}`} title="YouTube video player" frameBorder="0"  allowFullScreen></iframe>}

        </div>

        <div className='movie-card-info'>
         
            <h2 className='movie-card-info-title'>{movie.title}</h2>
            <div className="movie-card-info-genre-container">
              {movie.genres ? movie.genres.map(genre => 
                <span key={genre.id} className='movie-card-info-genre'>{genre.name}</span>
              ) : undefined }
              
            </div>
            <div className='movie-card-info-score-runtime'>
            <span>IMDB {movie.vote_average}</span>
            <span>{durationConvert(movie.runtime)}</span>

            </div>
            <p>{movie.overview}</p>

            <div className='movie-card-actions'>
              {/* add button */}
            {addedToWatchlist ? undefined :
           <button onClick={() => dispatch(addToWatchlist())} className='add-movie-btn'>Add to watchlist</button> }

            {/* delete button */}
              {removebtn ? <button onClick={() => dispatch(deleteFromWatchlist(movie._id))} className='delete-movie-btn'>Remove</button> : undefined}
            </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}
export default WatchlistCard
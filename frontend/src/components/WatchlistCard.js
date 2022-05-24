import React from 'react'
import './watchlistCard.css';
import {TiDeleteOutline} from 'react-icons/ti'

const WatchlistCard = ({movie}) => {

console.log(movie);


  return (
      <div className='movie-card-container'>
    <div className='movie-card'>
    <div className='movie-card-overlay'>
        <div className='movie-card-poster-container'>
            <img className='movie-card-poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.ytTrailerKey}`} title="YouTube video player" frameBorder="0"  allowFullScreen></iframe> */}
        </div>

        <div className='movie-card-info'>
         
            <h2 className='movie-card-info-title'>{movie.title}</h2>
            <div className="movie-card-info-genre-container">
              {movie.genres.map(genre => <>
                <span key={genre.id} className='movie-card-info-genre'>{genre.name}</span>
              </>) }
              
            </div>
            <p>Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown. accidentally  </p>

            <div className='movie-card-actions'>
            {/* <button className='watch-trailer-btn'>Watch Trailer</button> */}
            <button className='delete-movie-btn'>Remove</button>
            </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}
export default WatchlistCard
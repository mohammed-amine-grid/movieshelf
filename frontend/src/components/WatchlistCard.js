import React from 'react'
import './watchlistCard.css';
import {TiDeleteOutline} from 'react-icons/ti'

const WatchlistCard = () => {




  return (
      <div className='movie-card-container'>
    <div className='movie-card'>
    <div className='movie-card-overlay'>
        <div className='movie-card-poster-container'>
            {/* <img className='movie-card-poster' src='https://images.pexels.com/photos/12108913/pexels-photo-12108913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' /> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w4owJamctrI" title="YouTube video player" frameBorder="0"  allowFullScreen></iframe>
        </div>

        <div className='movie-card-info'>
         
            <h2 className='movie-card-info-title'>Title</h2>
            <div className="movie-card-info-genre-container">
              <span  className='movie-card-info-genre'>Genre</span>
              <span className='movie-card-info-genre'>Genre</span>
              <span className='movie-card-info-genre'>Genre</span>
            </div>
            <p>Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown. accidentally  </p>

            <div className='movie-card-actions'>
            {/* <button className='watch-trailer-btn'>Watch Trailer</button> */}
            <button className='delete-movie-btn'><TiDeleteOutline className='delete-movie-btn-icon' color='crimson' size={30}/></button>
            </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}
export default WatchlistCard
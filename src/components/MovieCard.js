import React from 'react';
import './movieCard.css';

 const MovieCard = () => {
  return (
    <div className='card'>
        <div className='movie-img'>
            <img className='img' src='https://images.pexels.com/photos/9179973/pexels-photo-9179973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
        </div>
        <div className='movie-text-container'>
            <p>Title eh ?</p>
        </div>
    </div>
  )
}

export default MovieCard;
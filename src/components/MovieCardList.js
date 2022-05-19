import React from 'react'
import MovieCard from './MovieCard'
import  './movieCardList.css'


 const MovieCardList = ({movies}) => {
   

   return (<div  className='movie-container'>
           {movies.map(movie => {
               return (<MovieCard  movie={movie} key={movie.id} />)
           })}
    </div>)
}

export default MovieCardList;
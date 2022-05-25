const asyncHandler = require('express-async-handler')

const Movie = require('../models/moviesModel');
const User = require('../models/userModel');



const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({ user: req.user.id })
  res.status(200).json(movies);
})


const addMovie = asyncHandler(async (req, res) => {
  
  console.log(`${req.body}`.bgGreen);
  

  if (!req.body) {
    res.status(400)
    throw new Error('Please add movie information')
  }

  const movie = await Movie.create({
    id: req.body.id,
    title: req.body.title,
    genres: req.body.genres,
    poster_path: req.body.poster_path,
    overview: req.body.overview,
    runtime: req.body.runtime,
    vote_average: req.body.vote_average,
    ytTrailerKey: req.body.ytTrailerKey,
    user: req.user.id
  })

  res.status(200).json(movie)
})




const deleteMovie = asyncHandler(async (req, res) => {
  console.log(`${req.params.id}`.bgRed);
  const movie = await Movie.findById(req.params.id)

  if (!movie) {
    res.status(400)
    throw new Error('Movie not found')
  }

 
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

 
  if (movie.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await movie.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
 getMovies,
 addMovie,
 deleteMovie
}
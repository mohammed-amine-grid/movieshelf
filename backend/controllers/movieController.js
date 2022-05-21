const asyncHandler = require('express-async-handler')

const Movie = require('../models/moviesModel');
const User = require('../models/userModel');



const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({ user: req.user.id })

  res.status(200).json(movies)
})


const addMovie = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const movie = await Movie.create({
    ...req.body
  })

  res.status(200).json(movie)
})




const deleteMovie = asyncHandler(async (req, res) => {
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
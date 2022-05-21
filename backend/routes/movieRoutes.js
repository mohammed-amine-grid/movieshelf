const express = require('express')
const router = express.Router()
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movieController')

const { protect } = require('../middleware/authMiddleware')

router.route('/watchlist').get(protect, getMovies);
router.route('/add-watchlist').post(protect, addMovie);
router.route('watchlist/:id').delete(protect, deleteMovie);

module.exports = router
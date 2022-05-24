const express = require('express')
const router = express.Router()
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movieController')

const { protect } = require('../middleware/authMiddleware')

router.route('/watchlist').get(protect, getMovies);
router.route('/watchlist/add').post(protect, addMovie);
router.route('watchlist/delete/:id').delete(protect, deleteMovie);

module.exports = router
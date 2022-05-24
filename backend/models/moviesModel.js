const mongoose = require('mongoose')

const movieSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    id: {
      type: Number
    },
    title: {
      type: String,
    },
    genres: 
    {
       type: Array,
    },
    poster_path: {
      type: String
    },
    overview: {
        type: String,
    },
    runtime: {
        type: Number,
    },
    vote_average: {
        type: Number,
    },
    ytTrailerKey: {
        type: String,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Movie', movieSchema)
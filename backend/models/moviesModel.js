const mongoose = require('mongoose')

const movieSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
    },
    genres: 
    {
       type: Array,
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
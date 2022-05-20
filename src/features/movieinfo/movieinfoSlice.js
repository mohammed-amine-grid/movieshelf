import {  createSlice } from "@reduxjs/toolkit";

// import movieInfoService

const initialState = {
    movieInfo : {},
    movieId: null,
    movieGenres: [],
    movieTrailer: '',
    isMovieSelected: false,
}

export const movieInfo = createSlice({
    name:'movieInfo',
    initialState,
    reducers: {
        selectMovie: (state, action) => {
            state.movieId = action.payload.id;
            state.movieGenres = action.payload.genre_ids;
            state.isMovieSelected = true;
        },
        reset: (state) => {
            state.isMovieSelected = false;
            state.movieInfo = {};
            state.movieId = null;
            state.movieTrailer = '';
            state.movieGenres = [];
        }
    },
   
    
});


export const {selectMovie, reset} = movieInfo.actions;
export default movieInfo.reducer;




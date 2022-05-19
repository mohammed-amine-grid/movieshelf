import {  createSlice } from "@reduxjs/toolkit";

// import movieInfoService

const initialState = {
    movieInfo : {},
    movieId: null,
    movieGenres: [],
    movieTrailer: '',
}

export const movieInfo = createSlice({
    name:'movieInfo',
    initialState,
    reducers: {
        selectMovie: (state, action) => {
            state.movieId = action.payload.id;
            console.log(state.movieId);
        }
    },
    
});


export const {selectMovie} = movieInfo.actions;
export default movieInfo.reducer;




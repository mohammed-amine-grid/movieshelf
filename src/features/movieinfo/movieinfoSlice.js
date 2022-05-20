import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import movieinfoService from './movieinfoService'



export const getGenres = createAsyncThunk('get-genres', async(state, thunkApi) => {
    try {
        return await movieinfoService.getMovieGenres();
        
    }
    catch(error) {
        const message = error;
        return thunkApi.rejectWithValue(message.response)
    }
})


const initialState = {
    movieInfo : {},
    movieId: null,
    movieGenresIds: [],
    movieTrailer: '',
    genres : [],
    isMovieSelected: false,
}

export const movieInfo = createSlice({
    name:'movieInfo',
    initialState,
    reducers: {
        selectMovie: (state, action) => {
            state.movieId = action.payload.id;
            state.movieGenresIds = action.payload.genre_ids;
            state.isMovieSelected = true;
        },
        reset: (state) => {
            state.isMovieSelected = false;
            state.movieInfo = {};
            state.movieId = null;
            state.movieTrailer = '';
            state.movieGenresIds = [];
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(getGenres.pending, (state) => {
            console.log("pending");
            
        })
        .addCase(getGenres.fulfilled, (state, action) => {
            console.log("success");
            state.genres = action.payload;
            console.log('genres',state.genres);
        })
        .addCase(getGenres.rejected, (state) => {
            console.log("rejected");
            
        })
    }
   
    
});


export const {selectMovie, reset} = movieInfo.actions;
export default movieInfo.reducer;




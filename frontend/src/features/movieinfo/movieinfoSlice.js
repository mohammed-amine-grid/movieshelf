import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieinfoService from './movieinfoService';
import { sortMovieGenres } from "../../utils/sortMovieGenres";



export const getGenres = createAsyncThunk('get-genres', async(_, thunkApi) => {
    try {
        return await movieinfoService.getMovieGenres();
        
    }
    catch(error) {
        const message = error;
        return thunkApi.rejectWithValue(message.response);
    }
});




export const getInfo = createAsyncThunk('get-movie-info', async(id, thunkApi) => {
    try {
        return await movieinfoService.getMovieInfo(id);
    }
    catch(error) {
        const message = error;
        return thunkApi.rejectWithValue(message.response);
    }
})



const initialState = {
    movieInfo : {},
    movieId: null,
    movieGenresIds: [],
    genres: [],
    isMovieSelected: false,
    movieGenreNames :[],
    isLoading: false,
    
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
            state.movieGenresIds = [];
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(getGenres.pending, (state) => {
            
        })
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;

        })
        .addCase(getGenres.rejected, (state) => {
            
        })
        .addCase(getInfo.pending, (state) => {
                state.isLoading = true;
        })
        .addCase(getInfo.fulfilled, (state, action) => {
                state.movieInfo = action.payload;
                state.movieGenreNames = sortMovieGenres(state.genres, state.movieGenresIds);
                state.isLoading = false;

        })
        .addCase(getInfo.rejected, (state) => {
                state.isLoading = false;
        })
       
        
        
    }
   
    
});


export const {selectMovie, reset} = movieInfo.actions;
export default movieInfo.reducer;




import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieinfoService from './movieinfoService';
import { sortMovieGenres } from "../../utils/sortMovieGenres";



export const getGenres = createAsyncThunk('get-genres', async(state, thunkApi) => {
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

export const getMovieTrailer = createAsyncThunk('get-movie-trailer', async(id, thunkApi) => {
    try {
        return await movieinfoService.getMovieTrailer(id);
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
    movieTrailer: '',
    genres : [],
    isMovieSelected: false,
    movieGenreNames :[],
    
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

        })
        .addCase(getGenres.rejected, (state) => {
            console.log("rejected");
            
        })
        .addCase(getInfo.pending, (state) => {
                console.log("info-pending");
        })
        .addCase(getInfo.fulfilled, (state, action) => {
                console.log("info-success");
                state.movieInfo = action.payload;
                state.movieGenreNames = sortMovieGenres(state.genres, state.movieGenresIds);


        })
        .addCase(getInfo.rejected, (state) => {
                console.log("info-rejected");
        })
        .addCase(getMovieTrailer.pending, (state) => {
                console.log("trailer-pending");
        })
        .addCase(getMovieTrailer.fulfilled, (state, action) => {
                console.log("trailer-success");
                state.movieTrailer = action.payload[0].key;
                console.log("trailer>>>", state.movieTrailer);

        })
        .addCase(getMovieTrailer.rejected, (state) => {
                console.log("trailer-rejected");
        })
        
        
    }
   
    
});


export const {selectMovie, reset} = movieInfo.actions;
export default movieInfo.reducer;




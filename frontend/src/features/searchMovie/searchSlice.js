import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import searchService from "./searchService";


const initialState = {
    searchInput: '',
    movies: [],

};


export const searchMovies = createAsyncThunk('search', async (searchInput, thunkApi) => {
    try {
        return await searchService.search(searchInput);
    }
    catch(error) {
        const message = error.response;
        return thunkApi.rejectWithValue(message);
    }
})


export const getLatestMovies = createAsyncThunk('get-latest-movies',  async (state, thunkApi) => {
    try {
        return await searchService.getLatestMovies();
    }
    
    catch(error) {
        const message = error.response;
        return thunkApi.rejectWithValue(message)
    }
})



export const searchSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchInput = action.payload;
    }},
    extraReducers: (builder) => {
        builder
        .addCase(getLatestMovies.pending, (state) => {
            console.log("pending");
            
        })
        .addCase(getLatestMovies.fulfilled, (state, action) => {
            console.log("success");
            state.movies = action.payload;
            // console.log(state.movies);
        })
        .addCase(getLatestMovies.rejected, (state) => {
            // console.log(state);
            console.log("rejected");
            
        })
        .addCase(searchMovies.pending, (state) => {
            console.log("pending");
            
        })
        .addCase(searchMovies.fulfilled, (state, action) => {
            console.log("success");
            state.movies = action.payload;
        })
        .addCase(searchMovies.rejected, (state) => {
            
        })
    }
    

})

export const {search} = searchSlice.actions;
export default searchSlice.reducer;
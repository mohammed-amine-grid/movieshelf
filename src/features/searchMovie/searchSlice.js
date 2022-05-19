import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import searchService from "./searchService";
import { debounce } from "../../utils/debounce";


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



export const searchSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchInput = action.payload;
    }},
    extraReducers: (builder) => {
        builder
        .addCase(searchMovies.pending, (state) => {
            console.log("pending");
        })
        .addCase(searchMovies.fulfilled, (state, action) => {
            console.log("success");
            state.movies = action.payload;
            console.log(state.movies);
        })
        .addCase(searchMovies.rejected, (state) => {
            console.log("rejected");
        })
    }
    

})

export const {search} = searchSlice.actions;
export default searchSlice.reducer;
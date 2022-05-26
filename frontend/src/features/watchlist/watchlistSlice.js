import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import watchlistService from './watchlistService';


const initialState = {
    watchlist: [],
    errMessage: '',
    isLoading: false,
}

export const getWatchList = createAsyncThunk('get-watchlist', async(_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token;
        return await watchlistService.getWatchList(token);
        }

        catch(error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkApi.rejectWithValue(message)
        }
})



export const addToWatchlist = createAsyncThunk('add-watchlist', async(_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token;
        const movieInfo = thunkApi.getState().select.movieInfo;
        return await watchlistService.addToWatchList(movieInfo ,token);
    }
    catch(error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkApi.rejectWithValue(message)
    }
})


export const deleteFromWatchlist = createAsyncThunk('delete-watchlist', async(id, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token;
        return await watchlistService.deleteFromWatchlist(id, token);
    }
    catch(error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const watchlist = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        reset: (state) => {
            state.watchlist = initialState;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getWatchList.pending, (state, action) => {
            state.isLoading = true;
            state.errMessage = '';
            
        })
        .addCase(getWatchList.fulfilled, (state, action) => {
            state.watchlist = action.payload;
            state.isLoading = false;
            state.errMessage =  '';
            
        })
        .addCase(getWatchList.rejected, (state, action) => {
            state.errMessage = action.payload;
            state.isLoading = false;
            
        })
        .addCase(addToWatchlist.pending, (state) => {
            console.log("add-to-wh-pending");
            
        })
        .addCase(addToWatchlist.fulfilled, (state) => {
            console.log("add-to-wh-success");
            
            
        })
        .addCase(addToWatchlist.rejected, (state) => {
            console.log("add-to-wh-rejected");
            
        })
        .addCase(deleteFromWatchlist.pending, (state) => {
            console.log("delete pending");
            
        })
        .addCase(deleteFromWatchlist.fulfilled, (state, action) => {
            console.log("delete success", action.payload);
            state.watchlist = state.watchlist.filter(movie => movie._id !== action.payload.id)
        })
        .addCase(deleteFromWatchlist.rejected, (state) => {
            console.log("delete rejected");
            
        })
    }
})

export const {reset} = watchlist.actions;
export default watchlist.reducer;
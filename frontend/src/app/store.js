import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from '../features/auth/authSlice';
import searchReducer from '../features/searchMovie/searchSlice'
import movieSelectReducer from '../features/movieinfo/movieinfoSlice';
import watchlistReducer from '../features/watchlist/watchlistSlice';



export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            search: searchReducer,
            select: movieSelectReducer,
            watchlist: watchlistReducer
        }
    }
)
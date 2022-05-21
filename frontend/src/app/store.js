import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from '../features/auth/authSlice';
import searchReducer from '../features/searchMovie/searchSlice'
import movieSelectReducer from '../features/movieinfo/movieinfoSlice';

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            search: searchReducer,
            select: movieSelectReducer
        }
    }
)
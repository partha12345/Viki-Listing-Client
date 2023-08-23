import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import newsReducers from '../pages/NewsFeeds/newsSlice'

export const store = configureStore({
    reducer:{
         [apiSlice.reducerPath]:apiSlice.reducer,
         news:newsReducers
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
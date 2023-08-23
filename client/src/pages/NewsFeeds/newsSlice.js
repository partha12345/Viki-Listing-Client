import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initiaState = {
    news:[],
    status:'idle',
    error:null
}

export const fetchNewsData = createAsyncThunk('news/fetchnewsdata', async() => {
    const result = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-07-23&sortBy=publishedAt&apiKey=19d697d510164042ac105fda9737d4d4") 
    console.log(result.data.articles)
    return result.data.articles
})


export const newsSlice = createSlice({
    name:'newsApi',
    initiaState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchNewsData.pending,(state,action) => {
            state.status = 'loading'
        })
        .addCase(fetchNewsData.fulfilled,(state,action) => {
            state.status = 'success'
            console.log(action.payload)
            state.news = [...action.payload]
        })
        .addCase(fetchNewsData.rejected, (state,action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})




export const newsStatus = (state) => state.news.status
export const newsError = (state) => state.news.error

export default fetchNewsData.action
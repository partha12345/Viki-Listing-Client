import { createSlice ,createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/apiSlice";



const newsData = createEntityAdapter({})

const initialState = newsData.getInitialState()


export const extendedNewsApiSlice = apiSlice.injectEndpoints({
    endpoints:builder => ({
        getArticle:builder.query({
            query:() => '/api/news-articles',
            transformResponse: ResponseData => {                
                return newsData.setAll(initialState,ResponseData.data)
            },
            providesTags:(result , error , arg) => [
                {type:'Article' , id:'LIST'}
            ]
        })        
        
    })
})

export const {
   useGetArticleQuery
} = extendedNewsApiSlice


export const fetchedNews = extendedNewsApiSlice.endpoints.getArticle.select()

const alteredfetchedNews  = createSelector(
    fetchedNews,
    response => response.data
)


export const {
    selectAll:selectAllNews,
    selectById:selectNewsById,
    selectIds:selectNewsIds
} = newsData.getSelectors(state => alteredfetchedNews(state) ?? initialState )
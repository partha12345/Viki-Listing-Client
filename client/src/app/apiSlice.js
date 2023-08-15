import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:1337'}),
    tagTypes:['News','Article'],
    endpoints:builder => ({})
})
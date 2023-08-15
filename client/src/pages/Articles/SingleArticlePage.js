import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllNews, selectNewsById } from '../../features/News/newsApiSlice'

const SingleArticlePage = () => {

    const AllNews = useSelector(state => selectAllNews(state))

   const content = AllNews.map(item => {
       return (
         <div>{item.attributes.PostContent}</div>
        )
   })   

   
   return (
         <>
         {content}
         </>
   )
}

export default SingleArticlePage
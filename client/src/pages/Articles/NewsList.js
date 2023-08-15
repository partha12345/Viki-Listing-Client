import React from 'react'
import { useGetArticleQuery } from '../../features/News/newsApiSlice'
import SingleArticlePage from './SingleArticlePage'


const NewsList = () => {
    
    const {
      data:ArticleNews,
      isLoading,
      isError,
      isSuccess,
      error          
    } = useGetArticleQuery(undefined, {
        // pollingInterval: 10000,
        // refetchOnFocus:true,
        // refetchOnMountOrArgChange:true
    })  

    console.log(ArticleNews)    
    
    
  return (
    <div className='news'>
      <SingleArticlePage/>
    </div>
  )
}

export default NewsList
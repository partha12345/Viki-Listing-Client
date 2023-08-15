import React from 'react'
import './Home.css'
import { useGetArticleQuery } from '../../features/News/newsApiSlice'



const Home = () => {

    const {
        data:homeNewsData,
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetArticleQuery()

      
    

    

    let content   
    if(isLoading) {
        content = <p>Loading...</p>
    }
    if(isError) {
        if(error.status === 404) {
            content = <p>Server failed to respond please refresh</p>
        }        
    }
    if(isSuccess) {        
      content =  <p>{homeNewsData.ids.map(id => (
          <section className='news-part1'>
             <div className='news-part1-sidenews'>
                <div className='newsContents'>
                   <img className='news-images-small' alt='news-image'></img>
                   <div className='newsData'>
                       <h4>{homeNewsData.entities[id].attributes.SidePartTitle1}</h4>
                       <p2>{homeNewsData.entities[id].attributes.SidePartContent1}</p2>
                       <span>{homeNewsData.entities[id].attributes.SidePartDate1}</span>
                   </div>                   
                </div>
                <div className='newsContents'>
                   <img className='news-images-small' alt='news-image'></img>
                   <div className='newsData'>
                       <h4>{homeNewsData.entities[id].attributes.SidePartTitle2}</h4>
                       <p2>{homeNewsData.entities[id].attributes.SidePartContent2}</p2>
                       <span>{homeNewsData.entities[id].attributes.SidePartDate2}</span>
                   </div>                   
                </div>
                <div className='newsContents'>
                   <img className='news-images-small' alt='news-image'></img>
                   <div className='newsData'>
                       <h4>{homeNewsData.entities[id].attributes.SidePartTitle3}</h4>
                       <p2>{homeNewsData.entities[id].attributes.SidePartContent3}</p2>
                       <span>{homeNewsData.entities[id].attributes.SidePartDate3}</span>
                   </div>                   
                </div>
                <div className='newsContents'>
                   <img className='news-images-small' alt='news-image'></img>
                   <div className='newsData'>
                       <h4>{homeNewsData.entities[id].attributes.SidePartTitle4}</h4>
                       <p2>{homeNewsData.entities[id].attributes.SidePartContent4}</p2>
                       <span>{homeNewsData.entities[id].attributes.SidePartDate4}</span>
                   </div>                   
                </div>
                <div className='newsContents'>
                   <img className='news-images-small' alt='news-image'></img>
                   <div className='newsData'>
                       <h4>{homeNewsData.entities[id].attributes.SidePartTitle5}</h4>
                       <p2>{homeNewsData.entities[id].attributes.SidePartContent5}</p2>
                       <span>{homeNewsData.entities[id].attributes.SidePartDate5}</span>
                   </div>                   
                </div>
             </div>

            
             <div className='part1-middlenews'>
                 <div>
                   <h3>{homeNewsData.entities[id].attributes.MiddlePartTitle1}</h3>
                   <p5>{homeNewsData.entities[id].attributes.MiddlePartContent1}</p5>
                 </div>     
                 <div>
                   <h3>{homeNewsData.entities[id].attributes.MiddlePartTitle2}</h3>
                   <p5>{homeNewsData.entities[id].attributes.MiddlePartContent2}</p5>
                 </div>                 
             </div>

            
             <div className='part1-lastnews'>
                 <img></img>
                 <img></img>
             </div>
          </section>            
        ))}</p>        
    }
    
    


  return (
    <div className='Home'>
       {content}                
    </div>
  )
}

export default Home

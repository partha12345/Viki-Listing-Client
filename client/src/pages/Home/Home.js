import React from 'react'
import './Home.css'
import { useGetArticleQuery } from '../../features/News/newsApiSlice'
import HomeBottomContent from './HomeBottomContent'
import favimagesone from  '../../assets/Images/1.png'
import favimagestwo from  '../../assets/Images/2.png'
import favimagesthree from  '../../assets/Images/3.png'
import favimagesfour from  '../../assets/Images/4.png'
import favimagesfive from  '../../assets/Images/5.png'





const Home = () => {

    const {
        data:homeNewsData,
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetArticleQuery()

    let content   
    // // if(isLoading) {
    // //     content = <p>Loading...</p>
    // // }
    // // if(isError) {
    // //     if(error.status === 404) {
    // //         content = <p>Server failed to respond please refresh</p>
    // //     }        
    // // }
    // // if(isSuccess) {        
    //   content =  <p>{homeNewsData.ids.map(id => (
    content = 
    <>
      <section className='mobile-part'>
      <div className='mobile-news'>
                 <h3>Volkswagen Taigun GT Edge Limited Collection</h3>
                 <p5>Unleash the power of GT and experience the best of German engineering. Be among the first in India to own a Taigun GT Edge. Simply fill the form below to book your Volkswagen Taigun GT Edge today.</p5>
               </div>  
</section>


<section className='news-part1'>
  
  
  <div className='news-part1-sidenews'>

              <div className='newsContents'>
                 <img className='news-images-small' src={{favimagesone}} style={{width:50}} alt='news-image'></img>
                 <div className='newsData'>
                     <h4>coordination between the business</h4>
                     <p2>It has earned the reputation of being the chosen electrical goods</p2>
                     <span>29 Feb, 2024</span>
                 </div>                   
              </div>
              <div className='newsContents'>
                 <img className='news-images-small'  src={{favimagestwo}} style={{width:50}} alt='news-image'></img>
                 <div className='newsData'>
                     <h4>greenhouse gases that affect environment</h4>
                     <p2>It has earned the reputation of being the chosen electrical goods</p2>
                     <span>29 Feb, 2024</span>
                 </div>                   
              </div>
              <div className='newsContents'>
                 <img className='news-images-small' src={{favimagesthree}} style={{width:50}} alt='news-image'></img>
                 <div className='newsData'>
                     <h4>Some stores charge a small amount.</h4>
                     <p2>It has earned the reputation of being the chosen electrical goods</p2>
                     <span>29 Feb, 2024</span>
                 </div>                   
              </div>
              <div className='newsContents'>
                 <img className='news-images-small' src={{favimagesfour}} style={{width:50}} alt='news-image'></img>
                 <div className='newsData'>
                     <h4>Friends and Family Shave</h4>
                     <p2>It has earned the reputation of being the chosen electrical goods</p2>
                     <span>29 Feb, 2024</span>
                 </div>                   
              </div>
              <div className='newsContents'>
                 <img className='news-images-small' src={{favimagesfive}} style={{width:50}} alt='news-image'></img>
                 <div className='newsData'>
                     <h4>Person Shares Satellite Images</h4>
                     <p2>It has earned the reputation of being the chosen electrical goods</p2>
                     <span>29 Feb, 2024</span>
                 </div>                   
              </div>
           </div>



   

          
           <div className='part1-middlenews'>
               <div>
                 <h3>Volkswagen Taigun GT Edge Limited Collection</h3>
                 <p5>Unleash the power of GT and experience the best of German engineering. Be among the first in India to own a Taigun GT Edge. Simply fill the form below to book your Volkswagen Taigun GT Edge today.</p5>
               </div>  

               <div className='tab-news'>
               <img></img>
                </div> 

               <div>
                 <h3>Man buys fake Puma shoes from local market. Swiggy instamart's reply to his post</h3>
                 <p5>Most of us are guilty of buying cheap first copies of high-end brands just to show it off to our friends. Well, sometimes that actually helped us grab the spotlight.</p5>
               </div>
           </div>

          
           <div className='part1-lastnews'>
               <img></img>
               <img></img>
           </div>
        </section>  
        <section className='mobile-part'>
            
            <div className='mobile-news'>
                   <h3>Man buys fake Puma shoes from local market. Swiggy instamart's reply to his post</h3>
                   <p5>Most of us are guilty of buying cheap first copies of high-end brands just to show it off to our friends. Well, sometimes that actually helped us grab the spotlight.</p5>
                 </div>
            </section>          

    </>
  
    
    
   
        // ))}</p>        
    // }
    
    


  return (
    <div className='Home'>
       {content}    
       <HomeBottomContent/>            
    </div>
  )
}

export default Home

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
      content = 
      <>
        <section id="mobile-res">
      <div class="container-fluid">
          <div class="row ">
              <div class="mobile-middle-content col-xs-12">
                  <div class="mobile-middle-head-one">
                      <p class="head-text-one">Volkswagen Taigun GT Edge Limited Collection</p>
                      <p class="head-text-two">Unleash the power of GT and experience the best of German engineering. Be 
                          among the first in India to own a Taigun GT Edge. Simply fill the form below to book your Volkswagen Taigun GT Edge today.</p>
                      </div>
                  </div>
                  
              </div>
              <hr/>
          </div>
         
      </section>
  
  

  <section id="home-pagep-main-section">
      <div class="container-fluid ">
          <div class="left-item row justify-content-md-center">
              <div class="left-content col-xxl-2 col-lg-3 col-md-4 col-sm-2">
                  <div class="contents">
  
                      <div class="content-one">
                          <div class="left-picture">
              <img src="Images/1.png" alt="First"/>
          </div>
          <div class="picture-info">
              <div class="info">
                  <p class="first-text">Coordination between the business</p>
                  <p class="second-text">It has earned the reputation of being the chosen electrical goods</p>
                  <p class="third-text">29 Feb, 2024</p>
              </div>
          </div>
      </div>
     
      <div class="content-two">
          <div class="left-picture">
              <img src="Images/2.png" alt="First"/>
          </div>
          <div class="picture-info">
              <div class="info">
                  <p class="first-text">Greenhouse gases that affect environment</p>
                  <p class="second-text">It has earned the reputation of being the chosen electrical goods</p>
                  <p class="third-text">29 Feb, 2024</p>
              </div>
          </div>  
      </div>
             
      <div class="content-three">
          <div class="left-picture">
              <img src="Images/3.png" alt="First"/>
          </div>
          <div class="picture-info">
              <div class="info">
                  <p class="first-text">Some stores charge a small amount.</p>
                  <p class="second-text">It has earned the reputation of being the chosen electrical goods</p>
                  <p class="third-text">29 Feb, 2024</p>
              </div>
          </div> 
      </div>
              
      <div class="content-four">
          <div class="left-picture">
              <img src="Images/4.png" alt="First"/>
          </div>
          <div class="picture-info">
              <div class="info">
                  <p class="first-text">Friends and Family Shave</p>
                  <p class="second-text">It has earned the reputation of being the chosen electrical goods</p>
                  <p class="third-text">29 Feb, 2024</p>
              </div>
          </div> 
      </div>
              
  
      <div class="content-five">
          <div class="left-picture">
              <img src="Images/5.png" alt="First"/>
          </div>
          <div class="picture-info">
              <div class="info">
                  <p class="first-text">Person Shares Satellite Images</p>
                  <p class="second-text">It has earned the reputation of being the chosen electrical goods</p>
                  <p class="third-text">29 Feb, 2024</p>
              </div>
          </div>
      </div>
               
  </div>
  </div>
  
  
  
      
  
  
  
  <div class="middle-contents col-xxl-5 col-lg-7 col-md-7 col-sm-10">
      <div class="middle-content">
          <div class="middle-head-one">
              <p class="head-text-one">Volkswagen Taigun GT Edge Limited Collection</p>
              <p class="head-text-two">Unleash the power of GT and experience the best of German engineering. Be 
                  among the first in India to own a Taigun GT Edge. Simply fill the form below to book your Volkswagen Taigun GT Edge today.</p>
          </div>
  
  
          <div class="right-picture middle">
              <img src="Images/long_Rectangle.png" class="img-fluid" alt="ad"/>
          </div>
  
          <div class="middle-head-two">
              <p class="head-text-one">Man buys fake Puma shoes from local market. Swiggy instamart's reply to his post </p>
              <p class="head-text-two">Most of us are guilty of buying cheap first copies of high-end brands just to show it off to our friends. 
                  Well, sometimes that actually helped us grab the spotlight. </p>
          </div>
      </div>
  </div>
  
  <div class="right-contents col-xxl-3 col-md-7 col-sm-12">
      <div class="right-content last">
          <div class="right-picture">
              <img src="Images/Rectangle 17.png" alt="Ad"/>
          </div>
          <div class="right-picture">
              <img src="Images/Rectangle 17.png" alt="Ad"/>
          </div>
      </div>
  </div>
  
  </div>
  
  </div>
  </section>
  
  

  
  
  <section id="mobile-res">
  
      <div class="container-fluid">
          <div class="row ">
              <div class="mobile-middle-content col-xs-12">
                  <div class="mobile-middle-head-two">
                      <p class="head-text-one">Man buys fake Puma shoes from local market. Swiggy instamart's reply to his post </p>
                      <p class="head-text-two">Most of us are guilty of buying cheap first copies of high-end brands just to show it off to our friends. 
                          Well, sometimes that actually helped us grab the spotlight. </p>
                  </div>
              </div>
          </div>
      </div>
  </section>
</>

        
  
  
     
        
    
    


  return (
    <div className='Home'>
       {content}                
    </div>
  )
}
}

export default Home

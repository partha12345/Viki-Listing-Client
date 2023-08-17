import React from 'react'
import './Category.css'

const Category = () => {

    const popularTopics = [
        "Study",
        "Lifestyle",
        " organic",
        "plastics",
        "sustainable",
        "business"
    ]



  return (
    <div className='category'>
        <div className='content1'>
           <h1>What's the Best Way to Discipline My Child?</h1>
           <p>The best sustainable business tip is to know your sources. If you know where the food is coming from and who your manufacturers are, it will help you understand the business practices of a company. You can research if they use pesticide-free management techniques or have ethical livestock raising strategies.</p>
        </div>
        <div className='content2'>
            <span>27 Feb 2023</span>
            <div className='profile'>
                <img className='profilePic'></img>
                <h5>Vignesh</h5>
                <p>With the increasing demand, many farmers have started to use organic methods and produce organic products. </p>
                <div className='profile-medias'>
                   <img className='social'></img>
                   <img className='social'></img>
                   <img className='social'></img>
                </div>
            </div>            
            <hr/>
            <img className='advertisement' alt='advertisement'></img>
            <hr/>
            <div className='popular-topics'>
                <h4>Popular topics</h4>
                <div>
                {popularTopics.map(names => (
                    <p>{names}</p>
                ))}               
                </div>                
            </div>
        </div>        
    </div>
  )
}

export default Category

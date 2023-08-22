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

    const data = [
        {
            title:"coordination between the business" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"greenhouse gases that affect environment" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },  
        {
            title:"Some stores charge a small amount." ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"Friends and Family Shave" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"Person Shares Satellite Images" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"Embrace Motherhood Synchronously" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"Cars That Aren’t Worth The Money" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"today from Swiggy Instamart" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"Volkswagen Taigun India's Safest SUVW" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },
        {
            title:"Virat Kohli's success in West Indies " ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },  
        {
            title:"Heavy rain batters Mumbai" ,
            details:"It has earned the reputation of being the chosen electrical goods",
            date:"29 Feb, 2024"
        },

    ]



  return (
    <div className='category'>
        <div className='content1'>
           <h1>What's the Best Way to Discipline My Child?</h1>
           <p>The best sustainable business tip is to know your sources. If you know where the food is coming from and who your manufacturers are, it will help you understand the business practices of a company. You can research if they use pesticide-free management techniques or have ethical livestock raising strategies.</p>
        </div>
        <span>27 Feb 2023</span>
        <div className='content2-3'>
        <div className='content2'>        
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
        <img className='advertisement'></img>
        <hr/>
        <div className='popular-topics'>
            <h4>Popular topics</h4>
            <div>
            {popularTopics.map(names => (
                <p>{names}</p>
            ))}               
            </div>                
        </div>
        <div className='popular-news'>
            {data.map((news,index) => (
                <div key={index} className='topics'>
                   <img className='news-pics'></img>
                   <div>
                       <h4>{news.title}</h4>
                       <span>{news.details}</span>
                       <span>{news.date}</span>
                   </div>
                </div>
            ))}
        </div>
    </div>           
    <div className='content3'>
       <img></img>
       <p>The company also manufactures lighting goods, electrical accessories, switchgear, fans, and water heaters in addition to a large range of Wires & Cables. The company has production plants in Pune's Pimpri and Urse neighbourhoods, as well as Goa and Uttarakhand. </p>
       <p>Through core strengths in Optical Interconnect, Virtualised Access Solutions, Network Software, and System Integration, STL provides comprehensive 5G ready end-to-end solutions ranging from wired to wireless, design to deployment, connection to computing. They believe in using technology to build a world filled with next-generation linked experiences that improve people's lives. They do basic research in next-generation network applications at their Center of Excellence.</p>
       <div>
         <p className='QuoteStyle'>The longer I live, the more I realize that I am never wrong about anything, and that all the pains I have so humbly taken to verify my notions have only wasted my time!</p>
       </div>
       <p>Havells has an enviable market share in a wide range of products, including Industrial and Domestic Circuit Protection Devices, Cables & Wires, Motors, Fans, etc. It has a low number of client complaints and high customer satisfaction due to the high quality of its items and faster service. Their products are sold in over 60 countries. It has earned the reputation of being the chosen electrical goods provider for discerning individuals and businesses in the national and international level.</p>
       <p>The certifications of a factory prove that they meet all essential safety and quality requirements. A manufacturer must have great sourcing capabilities to build the type of cable you require. This means they will need access to a wide range of materials, including jacketing and insulating compounds, a variety of shielding materials, and various types of armour. They will need to be able to get these materials quickly, saving you money and time.</p>
       <img></img>
       <p>The first step towards sustainable business is to shop locally. One of the disadvantages of purchasing food from outside is the transportation charges and pollution. By shopping from local vendors, wholesalers, or retailers, you can not only save money or also protect the environment from decay. It will lead to a decrease in food transportation.The transportations emit greenhouse gases that affect our environment and atmosphere. The emission of gases includes carbon dioxide, methane, and nitrous oxide.</p>
    </div>
    </div>               
    </div>
  )
}

export default Category

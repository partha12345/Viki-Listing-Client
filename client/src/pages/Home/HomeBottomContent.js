        import React from 'react'

const HomeBottomContent = () => {

    const data = [
        {
            title:'Lifestyle',
            details: [
                {
                    content:'Gold jewellery export business is one of the best export business ideas'
                },
                {
                    content:'Want to know how to start an import and export business of gold jewellery in India'
                },
                {
                    content:'An import-export business plan is the first step in starting your business'
                }
            ],
            date:"01 oct 2022"
        },
        {
            title:'Shopping',
            details: [
                {                    
                    content:'Gold jewellery export business is one of the best export business ideas'
                },
                {
                    content:'Want to know how to start an import and export business of gold jewellery in India'
                },
                {
                    content:'An import-export business plan is the first step in starting your business'
                }
            ],
            date:"01 oct 2022"
        },
        {
            title:'Business',
            details: [
                {
                    content:'Gold jewellery export business is one of the best export business ideas'
                },
                {
                    content:'Want to know how to start an import and export business of gold jewellery in India'
                },
                {
                    content:'An import-export business plan is the first step in starting your business'
                }
            ],
            date:"01 oct 2022"
        },
        {
            title:'Food',
            details: [
                {
                    content:'Gold jewellery export business is one of the best export business ideas'
                },
                {
                    content:'Want to know how to start an import and export business of gold jewellery in India'
                },
                {
                    content:'An import-export business plan is the first step in starting your business'
                }
            ],
            date:"01 oct 2022"
        },
        {
            title:'Study',
            details: [
                {
                    content:'Gold jewellery export business is one of the best export business ideas'
                },
                {
                    content:'Want to know how to start an import and export business of gold jewellery in India'
                },
                {
                    content:'An import-export business plan is the first step in starting your business'
                }
            ],
            date:"01 oct 2022"
        },
        
    ]
  return (
    <section className='homepart2'>
       {data.map((detail,index) => (
        <div key={index}>
          <div className='title'>
              <h2>{detail.title}</h2>
              <button className='viewAll'>View All</button>
          </div>        
          
          <div className='content'>
              {detail.details.map((contents , subindex) => (               
              <div className='cBox'>                
                   <img></img>
                   <div className='t-d'>
                     <p2>{detail.title}</p2>
                     <div className='dot'></div>
                     <span>{detail.date}</span>
                   </div>
                   <p3>{contents.content.substring(0,73)}...</p3>
                   <span>By Vignesh Listing</span>                
             </div>                          
              ))}                  
          </div>   
          <hr className='line'></hr>      
        </div>         
       ))}           
    </section>
  )
}

export default HomeBottomContent

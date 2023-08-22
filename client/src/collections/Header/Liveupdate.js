import React from 'react'
import './Liveupdate.css'
import arrowicon from '../../assets/icons/arrow_back_ios.png'
import arrowup from '../../assets/icons/arrow_back_ios _up.png'
import cloud from '../../assets/icons/Vector.png'
import flagone from '../../assets/icons/indiaflag.png'
import flagtwo from '../../assets/icons/westindiesflag.png'





const liveUpdate = () => {
  return (


    <>

<nav class="navbarone ">


<div className='liveupdates'>


  <div className='updates'>

  <div className='nift-update'>
  <ul className='list'>
    <li className='list-items'><img src={arrowicon}></img></li>
    <li className='list-items'>NIFTY</li>
    <li className='list-items'>19636.21</li>
    <li className='list-items'>-23.45(-0.12%)</li>
  </ul>
</div>



<div className='sensex-update'>
  <ul className='list'>
    <li className='list-items'><img src={arrowicon}></img></li>
    <li className='list-items'>SENSEX</li>
    <li className='list-items'>66087.67</li>
    <li className='list-items'>-171.12(-0.27%)</li>
  </ul>
</div>


<div className='usdinr-update'>
  <ul className='list'>
    <li className='list-items'><img src={arrowup}></img></li>
    <li className='list-items'>USDINR</li>
    <li className='list-items'>82.26</li>
    <li className='list-items'>0.53(0.405)</li>
  </ul>
</div>
</div>

<div className='weather-cricket-update'>
  <div className='weather-update'>
    <img src={cloud}></img>
  </div>
<div className='report'>
  <p>30C</p>
  <p>Most Sunny</p>
</div>


<div className='cricket-update'>
  <div className='flag'>
  <img src={flagone}></img>
  </div>
  <span>Ind</span>
  <span>114</span>
  <span>Vs</span>
  <span>Wi</span>

  <div className='flag'>
    <img src={flagtwo}></img>
  </div>

</div>




</div>




</div>




</nav>


</>
    
  )
}

export default liveUpdate
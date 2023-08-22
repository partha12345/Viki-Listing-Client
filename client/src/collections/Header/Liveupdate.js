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


<div class="daily-updates ">

<div class="Economic-updates">

    <div class="first-update">
        <div class="Nft-update">
            <ul class="testing">
                <li class="nav-item">
                    <img src={arrowicon}></img>
                </li>
                <li class="nav-item"><p class="nft">NIFTY</p>   
                </li>
                <li class="nav-item">
                   <p class="points">19636.45</p> 
                </li>
                <li class="nav-item">
                   <p class="points-clr">-23.45 (-0.12%)</p> 
                </li>
            </ul>
        </div>
    </div>
    

    <div class="Sensex-update">
        <ul class="testing">
            <li class="nav-item">
                <img src={arrowicon}></img>
            </li>
            <li class="nav-item"><p class="sen">SENSEX</p></li>
            <li class="nav-item"><p class="points"> 66087.67</p></li>
            <li class="nav-item"><p class="points-clr">-179.12 (-0.27%)</p> </li>
        </ul>
    </div>
    <div class="Usd-update">
        <ul class="testing">
            <li class="nav-item">
                <img src={arrowup}></img>
            </li>
            <li class="nav-item"><p class="usd">USDINR</p></li>
            <li class="nav-item"><p class="points"> 82.26</p> </li>
            <li class="nav-item"><p class="points-clr">0.53 (0.40%)</p> </li>
        </ul>
    </div>
</div>

<div class="weather-cricket-update">
    <div class="update">
        <div class="weather-update">
            <div class="cloud-image">
                <img src={cloud}></img>
            </div>
            <div class="weather-text">
                <p class="degree">30 C</p>
                <p class="climate-text">Most Sunny</p>
            </div>
        </div>
    </div>
      


        <div class="cricket-update">
            <div class="update">
                <div class="team-flag">
                    <img src={flagone}></img>
                </div>
                <div class="team-score">
                    <h4>IND</h4>
                    <p>114</p>
                </div>
                <div class="Vs">
                    <p>VS</p>
                </div>
                <div class="team-score">
                    <h4>WI</h4>
                    <p>118/5</p>
                </div>
                <div class="team-flag">
                    <img src={flagtwo}></img>
                </div>  
            </div>
        </div>
    </div>
</div>              





</nav>


</>
    
  )
}

export default liveUpdate
import React from 'react'
import './Footer.css'
import favicon from '../../assets/Images/Group 114.png'
import photo from '../../assets/Images/Rectangle 10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faPinterest } from '@fortawesome/free-brands-svg-icons'
import{faFacebook } from '@fortawesome/free-brands-svg-icons'
import{faGithub } from '@fortawesome/free-brands-svg-icons'
import{faTwitter } from '@fortawesome/free-brands-svg-icons'
import{faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <section className='footer'>
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='footer-content col-xxl-3 col-lg-3 col-md-6 col-sm-12'>

                    <div className='contact'>
                        <img src={favicon} ></img>
                        <p className='contact-text'>
                        Features productivity, tips, inspiration and strategies for massive profits.
                        Find out how to set up a successful blog or how to make yours even better !
                        </p>
                        <div class="footer-logo d-flex justify-content-space-between align-items-center">
                        <a href="#" target="_blank" class="mx-2 f-20"><FontAwesomeIcon icon={faPinterest} style={{color: "#000000",}} /></a>
                        <a href="#" target="_blank" class="mx-2 f-20"><FontAwesomeIcon icon={faFacebook} style={{color: "#000000",}} /></a>
                        <a href="#" target="_blank" class="mx-2 f-20"><FontAwesomeIcon icon={faGithub} style={{color: "#000000",}} /></a>
                        <a href="#" target="_blank" class="mx-2 f-20"><FontAwesomeIcon icon={faTwitter} style={{color: "#000000",}} /></a>
                        <a href="#" target="_blank" class="mx-2 f-20"><FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} /></a>
                    </div>
                    </div>
                </div>


                <div class="recent-photos col-lg-2">
                     <p class="head-title">Recent posts</p>
                     <img src={photo} className='img-fluid'></img>
                     <div class="image-info">                    
                         <div class="button-date">
                           <button class="btn md-start" type="button">Study</button>                       
                           <p class="date-month">&#8226; 27 july 2023</p>
                         </div>
                        <div class="image-info-text-content">
                         <div class="info">
                             <p class="grid-text-one">What's the Best Way to Discipline My Child?</p>
                             <p class="grid-text-two">By Vignesh Listing</p>
                         </div>
                        </div> 
                     </div>
                 </div>


                 <div class="bottom-right-text col-xxl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="mail">
                        <p class="head-text">Get interesting news</p>
                        <p class="head-para">Subscribe to our newsletter and we’ll send you the emails of latest posts.</p>
                        <div class="contact-mail">
                            <div class="enter-mailid">
                                <input class="enter-email" type="text" id="text" name="emailId" placeholder="Email address"></input>
                                <button class="btn btn-dark" type="button">Subscribe</button>
                            </div>
                            <div class="subs-button">
                               
                            </div>
                        </div>
                    </div>
                   
                 </div>


            </div>
        </div>
    </section>
  )
}

export default Footer
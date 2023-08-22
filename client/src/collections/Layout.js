import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LiveUpdate from './Header/Liveupdate'


const Layout = () => {
  return (
    <div className='App'>
        <Header/>
        <LiveUpdate/>                
        <Outlet/>    
        <Footer/>    
    </div>    
  )
}

export default Layout
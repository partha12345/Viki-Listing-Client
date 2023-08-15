import React from 'react'
import './Header.css'
import favicon from '../../assets/Images/Group 158 1.png'

const Header = () => {
  return (
    <header className='Header'>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src={favicon}></img>
                    </a>
                </div>
                </nav>   
    </header>    
  )
}

export default Header
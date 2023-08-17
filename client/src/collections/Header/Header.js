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

                    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div class="offcanvas-header">
            <img src={favicon}></img>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item mx-2">
                  <a class="nav-link " aria-current="page" href="#">India</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Crime</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Education</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Sports</a>
                  </li>
              </ul>



            <div className='options'>
              <div className='search-input'>
                <input className='form-control' type='text' placeholder='Search'></input>
              </div>

              <div className='categorey'>
                <a className='btn btn-dark rounded-5' role='button'>Category</a>
              </div>

            </div>

              {/* <div class="options">

                <div class="search-input">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    <i class="fa-solid fa-magnifying-glass" style={{color: "#575757"}}></i>
                </div>
               
                <div class="category">
                    <a class="btn btn-dark rounded-5" href="#gridcontainer" role="button">Category</a>
                </div>
                </div> */}
                </div>
          </div>
          </div>
          </nav>   
    </header>    
  )
}

export default Header
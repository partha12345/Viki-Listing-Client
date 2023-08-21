import React from 'react'
import './Header.css'
import favicon from '../../assets/Images/Group 158 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';




const Header = () => {
  return (

<>

<Navbar expand="lg" className="navbar-nav">
        <Container fluid>
          <Navbar.Brand href="/">
           <img src={favicon}/>           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={favicon}>
          </img>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link className='mx-2' href="#action1">India</Nav.Link>
                <Nav.Link className='mx-2' href="#action2">Trending</Nav.Link>
                <Nav.Link className='mx-2' href="#action2">Crime</Nav.Link>
                <Nav.Link className='mx-2' href="#action2">Education</Nav.Link>
                <Nav.Link className='mx-2' href="#action2">Sports</Nav.Link>
               
              </Nav>
              <Form className="d-flex">
              <input className='form-control me-2' type='text' placeholder='Search'></input>
                {/* <div className='box-seach-icon'></div> */}
                   <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} className='search-icon'  />
                   <Link to="/category"><a className='btn btn-dark rounded-5' role='button'>Category</a></Link>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    
</>

    










    // <header className='Header'>
    //         <nav className='navbar navbar-expand-lg'>
    //             <div className='container-fluid'>
    //                 <a className='navbar-brand' href='/'>
    //                     <img src={favicon}></img>
    //                 </a>
    //                 <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //       </button>

    //       <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

    //       <div class="offcanvas-header">
    //         <img src={favicon}></img>
    //         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //       </div>

    //       <div class="offcanvas-body">
    //           <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
    //             <li class="nav-item mx-2">
    //               <a class="nav-link " aria-current="page" href="#">India</a>
    //             </li>
    //             <li class="nav-item mx-2">
    //               <a class="nav-link" href="#">Trending</a>
    //             </li>
    //             <li class="nav-item mx-2">
    //                 <a class="nav-link" href="#">Crime</a>
    //               </li>
    //               <li class="nav-item mx-2">
    //                 <a class="nav-link" href="#">Education</a>
    //               </li>
    //               <li class="nav-item mx-2">
    //                 <a class="nav-link" href="#">Sports</a>
    //               </li>
    //           </ul>



    //         <div className='options'>
    //           <div className='search-input'>
    //             <input className='form-control' type='text' placeholder='Search'></input>
    //             <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} className='search-icon'  />
    //           </div>

    //           <div className='categorey'>
    //               <Link to="/category"><a className='btn btn-dark rounded-5' role='button'>Category</a></Link>
    //           </div>

    //         </div>

             
    //             </div>
    //       </div>
    //       </div>
    //       </nav>   
    // </header>    
  )
}

export default Header
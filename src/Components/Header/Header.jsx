import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faM} from '@fortawesome/free-solid-svg-icons'

// import Navbar from '../Navbar/Navbar'
import InfiniteAutoplay from '../Testimonial/Infinite Autoplay/InfiniteAutoplay'

function Header() {
  
  return (
    
        <header className="header">
               
    <div className="container">
      <div className='row'>
      <div className="d-flex justify-content-between align-items-center">
       <div className="logo">
      
   
             <a className='text-light text-decoration-none hamburger-btn outer-shadow hover-in-shadow bg-info'><FontAwesomeIcon icon={faM} beat /></a>
          </div>
          {/* <Navbar />   */}
          <div className=" fs-4 text-light hamburger-btn outer-shadow hover-in-shadow">
        
          <FontAwesomeIcon icon={faGlobe} spin className='bg-info'/>
         
          </div>
       </div>
       <InfiniteAutoplay className="" />
      </div>
    </div>
 </header>
    
  )
}

export default Header
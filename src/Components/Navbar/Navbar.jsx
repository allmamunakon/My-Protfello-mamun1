import React from 'react'
  import './Navbar.css'
  import Nav from 'react-bootstrap/Nav';
  import {Link} from 'react-router-dom';
  import Spinner from 'react-bootstrap/Spinner';
function Navbar() {
  return (
   
    <nav className="nav-menu ">
    {/* <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>  */}
    <div className="nav-menu-inner">
      <Nav>

     
       <ul className='topNav'>
       <li className='text-light Home'>
                <Link  to="/" className="link-item inner-shadow active"><Spinner className='bg-info' animation="grow" /></Link>
            </li>
       <li className='text-light Home'>
                <Link  to="/" className="link-item inner-shadow active">Home</Link>
            </li>

            <li>
                <Link to="About" className="link-item outer-shadow hover-in-shadow">About</Link>
            </li>
            <li>
                <Link to="Services" className=" link-item outer-shadow hover-in-shadow">Services</Link>
            </li>
            <li>
                <Link to="Portfolio" className="link-item outer-shadow hover-in-shadow">Portfolio</Link>
            </li>
            <li>
                <Link to="Testimonial"className="link-item outer-shadow hover-in-shadow">Testimonial</Link>
            </li>
            <li>
                <Link to="Contact"className="link-item outer-shadow hover-in-shadow">Contact</Link>
               
            </li>
            <li>
               
                <Link to="DashBoard"className="link-item outer-shadow hover-in-shadow">DashBoard</Link>
            </li>
            
           

       </ul>
       </Nav>
    </div>
  </nav>
 
    
    
  )
}

export default Navbar









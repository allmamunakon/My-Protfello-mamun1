import React from 'react'
import { Link } from 'react-router-dom'
import './Menubar.css'

function Menubar() {
  return (
    <nav className="nav-menu ">
    {/* <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div> */}
    <div className="nav-menu-inner">
   
<ul className=''>
            <li className='degin'>
                <Link  to="All"  className='link-item outer-shadow hover-in-shadow' >All</Link>
            </li>
            {/* <li className='degin'>
                <Link  to="AllApplication"  className='link-item outer-shadow hover-in-shadow' >All Application</Link>
            </li> */}
            <li className=''>
                <Link  to="WebDesgin" className='link-item outer-shadow hover-in-shadow' >Web Desgin</Link>
            </li>

            <li className=''>
                <Link to="GraphicsDesign"  className='link-item outer-shadow hover-in-shadow' >Graphics Design </Link>
            </li>

            <li className=''>
                <Link to="Networking"  className='link-item outer-shadow hover-in-shadow'>Networking</Link>
            </li>

</ul>
            














       {/* <ul >
           <li><a href="#home" className="link-item inner-shadow active">home</a></li>
           <li><a href="#about" className="link-item outer-shadow hover-in-shadow">about</a></li>
           <li><a href="#services" className="link-item outer-shadow hover-in-shadow">services</a></li>
           <li><a href="#portfolio" className="link-item outer-shadow hover-in-shadow">portfolio</a></li>
           <li><a href="#testimonial" className="link-item outer-shadow hover-in-shadow">testimonial</a></li>
           <li><a href="#contact" className="link-item outer-shadow hover-in-shadow">contact</a></li>
       </ul> */}
    </div>
    
  </nav>
 
  )
}

export default Menubar
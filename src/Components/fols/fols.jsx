{/* 
           <li><a href="#home" className="link-item inner-shadow active">Home</a></li>
           <li><a href="#about" className="link-item outer-shadow hover-in-shadow ">About</a></li>
           <li><a href="#services" className="link-item outer-shadow hover-in-shadow">Services</a></li>
           <li><a href="#portfolio" className="link-item outer-shadow hover-in-shadow">portfolio</a></li>
           <li><a href="#testimonial" className="link-item outer-shadow hover-in-shadow">testimonial</a></li>
           <li><a href="#contact" className="link-item outer-shadow hover-in-shadow">contact</a></li> */}

           

// function Skills() {
//   return (
    
// <Nav className='brand Info underline'>
//             <li className='text-light'>
//                 <Link  to="/" >SkillWork</Link>
//             </li>

//             <li>
//                 <Link to="Experience">Experience </Link>
//             </li>

//             <li>
//                 <Link to="Education">Education</Link>
//             </li>
//              <li>
//                 <Link to="NoPage">NoPage</Link>
//             </li> 
           

            
//         </Nav>









// import React from 'react'
//   import './Navbar.css'

// function Navbar() {
//   return (
   
//     <nav className="nav-menu ">
//     <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>  */}
//     <div className="nav-menu-inner">
//        <ul className='top'>
//            <li><a href="#home" className="link-item inner-shadow active">Home</a></li>
//            <li><a href="#about" className="link-item outer-shadow hover-in-shadow ">About</a></li>
//            <li><a href="#services" className="link-item outer-shadow hover-in-shadow">Services</a></li>
//            <li><a href="#portfolio" className="link-item outer-shadow hover-in-shadow">portfolio</a></li>
//            <li><a href="#testimonial" className="link-item outer-shadow hover-in-shadow">testimonial</a></li>
//            <li><a href="#contact" className="link-item outer-shadow hover-in-shadow">contact</a></li>
//        </ul>
//     </div>
//   </nav>
 
    
    
//   )
// }

// export default Navbar












<a class=" text-light text-decoration-none hamburger-btn outer-shadow hover-in-shadow" href="index.html">M</a>



import React from 'react'
const style = {
   width: "cale(10%-30px)",
}
function MySkillsData() {
  return (
    <div>
        <div className="row">
          <div className="skills tab-content active">
             <div className="row">
                 {/* skill item start */} 
                <div className="skill-item">
                   <p>HTML</p>
                   <div className="progress inner-shadow">
                      <div className="progress-bar" style = {style} >   
                         <span>100%</span>
                      </div>
                   </div>
                </div>
                {/* skill item end */}
                <div className="skill-item">
                   <p>CSS</p>
                   <div className="progress inner-shadow">
                      <div className="progress-bar" style="width: calc(95% - 14px)">
                         <span>95%</span>
                      </div>
                   </div>
                </div>
                {/* skill item end */}
                {/* skill item start */}
                <div className="skill-item">
                   <p>Bootstrap</p>
                   <div className="progress inner-shadow">
                      <div className="progress-bar" style="width: calc(90% - 14px)">
                         <span>90%</span>
                      </div>
                   </div>
                </div>
                {/* skill item end */}
                {/* skill item start */}
                <div className="skill-item">
                  <p>Javascript</p>
                  <div className="progress inner-shadow">
                     <div className="progress-bar" style="width: calc(80% - 14px)">
                        <span>80%</span>
                     </div>
                  </div>
               </div>
               {/* skill item end */}
               {/* skill item start */}
               <div className="skill-item">
                  <p>React</p>
                  <div className="progress inner-shadow">
                     <div className="progress-bar" style="width: calc(88% - 14px)">
                        <span>88%</span>
                     </div>
                  </div>
               </div>
               {/* skill item end */}
                {/* skill item start */}
                <div className="skill-item">
                   <p>Node.JS</p>
                   <div className="progress inner-shadow">
                      <div className="progress-bar" style="width: calc(90% - 14px)">
                         <span>90%</span>
                      </div>
                   </div>
                </div>
                {/* skill item end */}
                {/* skill item start */}
                <div className="skill-item">
                   <p>Python</p>
                   <div className="progress inner-shadow">
                      <div className="progress-bar" style="width: calc(70% - 14px)">
                         <span>70%</span>
                      </div>
                   </div>
                </div>
                {/* skill item end */}
                {/* skill item start */}
               <div className="skill-item">
                  <p>MongoDB</p>
                  <div className="progress inner-shadow">
                     <div className="progress-bar" style="width: calc(85% - 14px)">
                        <span>85%</span>
                     </div>
                  </div>
               </div>
               {/* skill item end */}
                {/* skill item start */}
                <div className="skill-item">
                   <p>Graphics Design</p>
                   <div className="progress inner-shadow">
                      <div className="progress-bar" style="width: calc(80% - 14px)">
                         <span>80%</span>
                      </div>
                   </div>
                </div>
                {/* skill item end */}
                {/* skill item start */}
                <div className="skill-item">
                  <p>Microsoft Office</p>
                  <div className="progress inner-shadow">
                     <div className="progress-bar" style="width: calc(85% - 14px)">
                        <span>85%</span>
                     </div>
                  </div>
               </div>
                {/* skill item start */}
               
               {/* skill item end */}

             </div>
          </div>
       </div>
       {/* skills end */}
    </div>
  )
}

export default MySkillsData
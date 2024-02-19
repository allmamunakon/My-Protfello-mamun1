import React from 'react'
import './About.css'
import Skills from './MySkills/Skills'
import { Outlet } from 'react-router-dom'
import mamunakon2 from '../image/mamunakon2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillApple, AiFillDollarCircle, AiFillPhone, AiFillWindows } from "react-icons/ai";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"


//   import SkillWork from './MySkills/SkillWork'
//   import Education from './Education/Education'
//   import Experience from './Experience/Experience'
//   import Skills from './MySkills/Skills';
//  import NoPage from '../NoPage/NoPage';

// import Skills from './Components/About/MySkills/Skills';
// import Education from './Components/About/Education/Education';
// import Experience from './Components/About/Experience/Experience';
// import NoPage from './Components/NoPage/NoPage';

//   import { BrowserRouter, Routes, Route } from "react-browser-router";
//   import {BrowserRouter, Routes , Route } from 'react-router-dom'






function About() {
   return (

      <section className="about-section section" id="about">
         <div className="container">
            <div className="row pb-5">
               <div className="section-title text-uppercase text-center ">
                  <h5 className='text-danger' data-heading="main info ">main info</h5>
                  <h2 className='text-light' data-heading="main info">About me</h2>
               </div>
            </div>
            <div className=''>
            <div className="row">
               <div className='d-flex'>
                  <div className="col-lg-6 ">
                     <div className="about-img">
                        <div className="img-box inner-shadow">
                           {/* <img src="img/profile.png" className="outer-shadow" alt="profile-pic"/> */}


                           <div className="img-box inner-shadow  ">
                              <img src={mamunakon2} className="outer-shadow" width="400" height="400" alt="profile-pic" />
                           </div>
                        </div>
                        {/* <!-- social links start --> */}
                        <div className="social-links">
                           <a href="" target="_blank" className="outer-shadow hover-in-shadow"> <FontAwesomeIcon icon={faFacebookF} beatFade style={{ color: "#ffffff", }} size="xl" /></a>
                           <a href="https://www.facebook.com/home.php" target="_blank" className="outer-shadow hover-in-shadow"><AiFillPhone style={{ color: "#ff6347" }} size={25} /></a>
                           <a href="" target="_blank" className="outer-shadow hover-in-shadow"><AiFillApple style={{ color: "#f9d3d3" }} size={25} /></a>
                           <a href="" target="_blank" className="outer-shadow hover-in-shadow"><AiFillDollarCircle style={{ color: "#a552df" }} size={25} /></a>
                           <a href="" target="_blank" className="outer-shadow hover-in-shadow"><AiFillWindows style={{ color: "#ccccff" }} size={25} /></a>
                        </div>
                        {/* <!-- social links end --> */}
                     </div>

                  </div>
                  <div className="col-lg-6 ">
                  <div className="about-info">
                     <span className='text-light'> Hi !  I’m Mohammad all mamun akon</span>
                     <p className='text-light'>I am the Co-founder & Chief Operating Officer at Hablu Programmer also I am a Web Programmer, Web Designer and Graphics Designer. I have about three years of working experience on this field. If I discribe myself in one sentence then it will be "I am a speed learner." I love to learn new things.</p>
                     <p>
                        I started my coding journey since I was in high school. Coding is like a passion for me. I love to code all day long, while my code works then I feel proud of me.
                     </p>
                     <p>
                        My vision is to teach programming to all people free of cost and make the world a better place. And I will prove that money is not a problem to learn.
                     </p>
                   
                  </div>
                  <div className='d-flex justify-content-center text-light pt-4'>
               <a href="https://docs.google.com/document/d/11VT9OUadcRIFsVHHBJ4-2yNz28mBcjAa/edit?usp=sharing&ouid=103377640203145715053&rtpof=true&sd=true" className=" link-item btn-1 outer-shadow hover-in-shadow" target="_blank">My CV</a>
                     <a href="https://www.freelancer.com.bd/u/harun0181" className="link-item btn-1 outer-shadow hover-in-shadow">Hire Me</a>
                     <a href="https://lnk.bio/tutul181" className="link-item btn-1 outer-shadow hover-in-shadow">Explore More</a>
               </div>
               </div>
             
                  
               </div>
              
               <div className=''>
            <Skills /> 

               <Outlet /> 
            </div>
            </div>
            
         </div>
         </div>
        
      </section>

   )
}

export default About

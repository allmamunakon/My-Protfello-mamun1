import React from 'react'
import './Home.css'
import mamun from '../image/mamun .png'

// import a4 from '../../image/a4.jpg'
import About from '../About/About'
import Services from '../Services/Services'
 


function Home() {
  return (
   
    
    <section className=" container home-section section active" id="home">
    {/* effect wrap start */}
    <div className="effect-wrap">
       <div className="effect effect-1">
       </div>
       <div className="effect effect-2">
         <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
       </div>
       {/* <div className='topp d-flex justify-content-between '>
       <div className="effect effect-3">
       </div>
       <div className="effect effect-6">
       </div>
       
       </div>  */}
       
       <div className="effect effect-4">
       {/* <img src={a4} alt='mamun'/> */}
       </div>
       <div className="effect effect-5">
         <div></div><div></div><div></div><div></div><div></div>
         <div></div><div></div><div></div><div></div><div></div>
       </div>
    </div>
    {/* <!-- effect wrap end --> */}
    <div className="container">
      <div className='row full-screen align-items-center'>
        <div className='d-flex'>
        <div className="col-lg-6 ">
        <div className="home-text">
             <p className=''>Hi I'm</p>
             <h2> Mohmmad All Mamun Akon</h2><p></p>
             <h3> Web Designer</h3>
            
             <div className='btn-1'>
             <a href="https://harun181.netlify.app/" className="link-item btn-1 outer-shadow hover-in-shadow"> Web Design</a>
             <a href="#" className="link-item btn-1 outer-shadow hover-in-shadow">Programming</a>
             </div>
            
             </div>   
           
        </div>
        <div className="col-lg-6 ">
        <div className="home-img">
              <div className="img-box inner-shadow  ">
                 <img src={mamun}  className="outer-shadow" alt="profile-pic"/>
              </div>
             
           </div>
        </div>
        </div>
        

      </div>
        {/* <div className="row ">
          
          
        </div> */}
    </div>
    <About />
    <Services />
 </section>
    
  )
}

export default Home


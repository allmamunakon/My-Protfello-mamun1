import React from 'react'
import './Test.css'

import TestMonial from './TestMonial'
import a1 from '../../image/a1.jpg'
 import a2 from '../../image/a2.jpg'
 import a3 from '../../image/a3.jpg'
import mamunakon2 from '../../image/mamun .png'


function TestimonialData() {
    
  
  const Pic1 = <img src={a1} className="" alt="" height={300} width={300} />
  const Pic2 = <img src={a2} className="outer-shadow" alt="" height={300} width={300} />
  const Pic3 = <img src={a3} className="outer-shadow" alt="" height={300} width={300} />
  //  const Pic4 = [ "pic1", "pic2", "pic3"]
     
  const Pic21 = <img src={mamunakon2} className="outer-shadow" alt="" height={200} width={250} />
   
  return (
    <div className='d-flex container '>
      <div className='row'>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>

      </div>
    


           
    
        <div className='link-item-Test outer-shadow hover-in-shadow text-light'>
       <div className='d-flex'>
        <div className="pic1">
        
        <TestMonial picture={Pic1} 
        Title="View Project"
        Name="Portfolio Website" />
        </div>
         <div className="pic2">
         <TestMonial picture={Pic2} 
        Title="View Project"
        Name="Portfolio Website" />
        </div>
        <div className="pic3">
        <TestMonial picture={Pic3} 
        Title="View Project"
        Name="Portfolio Website" />
        </div> 
        <div className="pic3">
        <TestMonial picture={Pic21} 
        Title="View Project"
        Name="Portfolio Website" />
        </div> 
       </div>
       
       
        
       
        
       
        
         {/* <TestimonialCard picture={Pic2} Title="View Project" Name="Portfolio Website" />
        <TestimonialCard picture={Pic3} Title="View Project" Name="Portfolio Website" />  */}
               <div className=''>
        {/* <TestimonialCard picture={Pic2} Title="Second slide label" Name="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /> */}
      </div>
            <div className=''>
        {/* <TestimonialCard picture={Pic3} Title="Third slide label" Name="Praesent commodo cursus magna, vel scelerisque nisl consectetur." /> */}
      </div>  


    </div>
    </div>
  )
}

export default TestimonialData
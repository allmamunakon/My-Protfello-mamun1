
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import TestimonialData from './TestimonialData';




function TestMonial(props) {
  return (
    <div>
      
      TestMonial
      
      <div className='container'>
      <div className="row">
        <div className="" >
        <Carousel>
      <Carousel.Item interval={1500}>
         <TestimonialData text="First slide" /> 
         
         {/* {props.picture}
         {props.Title}
         {props.Name} */}
       
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
        </div>
      </div>

    </div>
      
      
      
      
      </div>
  )
}

export default TestMonial
















   
    
    
 






















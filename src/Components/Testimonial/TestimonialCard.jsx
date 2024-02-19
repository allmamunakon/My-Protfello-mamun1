import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Testimonial/Test.css'
// import mamun from '../../image/mamun .png'
function TestimonialCard(props) {
  return (
    <div className='container '>

      <div className='row'>

        <Carousel>
          <Carousel.Item>
            <div className=''>
              {props.picture}


            </div>
            <Carousel.Caption>

            </Carousel.Caption>
            <h6 className='fs-6'>{props.Title}</h6>
            <p className='fs-6'>{props.Name}</p>
          </Carousel.Item>


        </Carousel>
      </div>

    </div>
  )
}

export default TestimonialCard
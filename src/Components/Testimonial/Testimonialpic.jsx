import React from 'react'
import './Testimonialpic.css'
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../../image/a1.jpg'
import a2 from '../../image/a2.jpg'
import a3 from '../../image/a3.jpg'



function Testimonialpic() {
  return (
    <div className='container d-flex justify-content-center align-items-center'>Testimonialpic





    <Carousel className=" img-boxx link-item-Portfolio outer-shadow hover-in-shadow ">
      <Carousel.Item>
        <img className="d-block w-100" img src={a1} width="250" height="250" alt="profile-pic" />
        
         <div className='text-light'>
         <h5 className='Sise'>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </div>
         </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" img src={a2} width="250" height="250" alt="profile-pic" />
        
         <div className='text-light'>
         <h5>Second slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </div>
         </Carousel.Item>
       
         
      
     
    </Carousel>


    


    </div>
  )
}

export default Testimonialpic

{/* <div class=" img-box link-item-Portfolio outer-shadow hover-in-shadow  carousel slide"><div class="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1" aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 2" aria-current="true" class="active"></button></div><div class="carousel-inner"><div class="carousel-item"><img class="d-block w-100" src="/static/media/a1.9d7361775d19c8fc3b9d.jpg" width="300" height="300" alt="profile-pic"><div class="text-light"><h5>First slide label</h5><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div></div><div class="active carousel-item"><img class="d-block w-100" src="/static/media/a2.2b8a220107eb864610a9.jpg" width="250" height="250" alt="profile-pic"><div class="text-light"><h5>First slide label</h5><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div></div></div><a class="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a></div> */}
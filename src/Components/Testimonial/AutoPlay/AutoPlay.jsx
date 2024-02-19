import React, { Component } from "react";
import Slider from "react-slick";
import './AutoPlay.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div className="container ">
        <h2 className="text-light">Auto Play</h2>
        <Slider className="" {...settings}>
          <div className=" ">
          <img src={ require('./a2.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
         
          <img src={ require('./d2.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
         <div>
          <img src={ require('./a4.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
          <img src={ require('./d5.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
          <img src={ require('./a6.jpg')}className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
          <img src={ require('./a7.jpg')}className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>

          <div>
          <img src={ require('./a3.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
       
          </div>
          <div>
         
           <img src={ require('./d3.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
          <img src={ require('./d4.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
    
          <img src={ require('./a5.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
          <img src={ require('./d6.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div>
          <div>
          <img src={ require('./d1.jpg')} className="img-boxX link-item-Portfolio outer-shadow hover-in-shadow" height='250' width='250'  alt='mamun'/> 
          </div> 
        </Slider>
      </div>
    );
  }
}
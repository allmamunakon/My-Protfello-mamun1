import React, { Component } from "react";
import Slider from "react-slick";
import './AutoPlayText.css'


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
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="container ">
        <h2 className="text-light">Auto Play</h2>
        <Slider className="m-3 backk " {...settings}>
          <div className="img-boxText link-item-AutoPlayText outer-shadow hover-in-shadow ">
          <h2>mamun akon</h2>
          </div>
          <div className="img-boxText link-item-AutoPlayText outer-shadow hover-in-shadow ">
          <h2>mamun akon</h2>
          </div>
          <div className="img-boxText link-item-AutoPlayText outer-shadow hover-in-shadow ">
          <h2>mamun akon</h2>
          </div>
          <div className="img-boxText link-item-AutoPlayText outer-shadow hover-in-shadow ">
          <h2>mamun akon</h2>
          </div>
          <div className="img-boxText link-item-AutoPlayText outer-shadow hover-in-shadow ">
          <h2>mamun akon</h2>
          </div>
         
        </Slider>
      </div>
    );
  }
}
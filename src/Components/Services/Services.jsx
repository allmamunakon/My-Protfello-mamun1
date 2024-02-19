import React from 'react'
import './Services.css'
// import mamun from '../../image/mamun .png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { AiFillApple, AiFillDollarCircle, AiFillPhone, AiFillWindows, } from "react-icons/ai";
 import { DiPhotoshop,DiIllustrator } from "react-icons/di";
 import { LuClipboardType} from "react-icons/lu";
//  import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

import ServicesData from './ServicesData';
import {FaReact,FaNetworkWired } from "react-icons/fa";
// import { MdVerifiedUser } from "react-icons/md";


function Services() {

  return (
    <div className='container'>
      <div className="row">
        <div className='dis'>
          <div className="col-sm-3">
            <div className='dis link-item-Service outer-shadow hover-in-shadow text-light '>
              <div className=''>
                <div className='dis1  outer-shadow hover-in-shadow '>
                < AiFillApple style={{ color: "#d7e2f3" }}  size={42} />
                </div>
                <div className='dis2 '>
                  <div className='fs-4'>
                    <ServicesData Title="Web Development" />
                  </div>
                  <div className='pt-4'>
                    <ServicesData P="lorem100 I will build your website from scratch. I will use Node.JS, React JS, Python, MongoDB for your website backend." />
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div className="col-sm-3">
            <div className='dis link-item-Service outer-shadow hover-in-shadow text-light '>
              <div className=''>
                <div className='dis1  outer-shadow hover-in-shadow '>
                
                  <DiIllustrator style={{ color: "#a552df" }} size={35} />
                </div>
                <div className='dis2 '>
                  <div className='fs-4'>
                    <ServicesData Title="Graphics Design" />
                  </div>
                  <div className='pt-4'>
                    <ServicesData P="lorem100 I will build your website from scratch. I will use Node.JS, React JS, Python, MongoDB for your website backend." />
                  </div>
                </div>
              </div>
            </div>
         </div>
           <div className="col-sm-3">
            <div className='dis link-item-Service outer-shadow hover-in-shadow text-light '>
              <div className=''>
                <div className='dis1  outer-shadow hover-in-shadow '>
                <DiPhotoshop  style={{ color: "#d7e2f3" }} size={35} />
                </div>
                <div className='dis2 '>
                  <div className='fs-4'>
                    <ServicesData Title="Photoshop " />
                  </div>
                  <div className='pt-4'>
                    <ServicesData P="lorem100 I will build your website from scratch. I will use Node.JS, React JS, Python, MongoDB for your website backend." />
                  </div>
                </div>
              </div>
            </div>
         </div>
        </div>

        <div className='dis'>
          <div className="col-sm-3">
            <div className='dis link-item-Service outer-shadow hover-in-shadow text-light '>
              <div className=''>
                <div className='dis1  outer-shadow hover-in-shadow '>
                <LuClipboardType style={{ color: "#d7e2f3" }} size={35} />
                  
                </div>
                <div className='dis2 '>
                  <div className='fs-4'>
                    <ServicesData Title="Typeing " />
                  </div>
                  <div className='pt-4'>
                    <ServicesData P="lorem100 I will build your website from scratch. I will use Node.JS, React JS, Python, MongoDB for your website backend." />
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div className="col-sm-3">
            <div className='dis link-item-Service outer-shadow hover-in-shadow text-light '>
              <div className=''>
                <div className='dis1  outer-shadow hover-in-shadow '>
                <FaReact style={{ color: "#d7e2f3" }}  size={35} />
                  
                </div>
                <div className='dis2 '>
                  <div className='fs-4'>
                    <ServicesData Title="React" />
                  </div>
                  <div className='pt-4'>
                    <ServicesData P="lorem100 I will build your website from scratch. I will use Node.JS, React JS, Python, MongoDB for your website backend." />
                  </div>
                </div>
              </div>
            </div>
         </div>
           <div className="col-sm-3">
            <div className='dis link-item-Service outer-shadow hover-in-shadow text-light '>
              <div className=''>
                <div className='dis1  outer-shadow hover-in-shadow '>
                <FaNetworkWired style={{ color: "#d7e2f3" }} size={35} />
                  
                </div>
                <div className='dis2 '>
                  <div className='fs-4'>
                    <ServicesData Title="Networking" />
                  </div>
                  <div className='pt-4'>
                    <ServicesData P="lorem100 I will build your website from scratch. I will use Node.JS, React JS, Python, MongoDB for your website backend." />
                  </div>
                </div>
              </div>
            </div>
         </div>
        </div>
     </div>



       {/* <div className="social-links">
   <a href="" target="_blank" className="outer-shadow hover-in-shadow"> <FontAwesomeIcon icon={faFacebookF} beatFade style={{ color: "#ffffff", }} size="xl" /></a>
                           <a href="https://www.facebook.com/home.php" target="_blank" className="outer-shadow hover-in-shadow"><AiFillPhone style={{ color: "#ff6347" }} size={25} /></a>
                           <a href="" target="_blank" className="outer-shadow hover-in-shadow"><AiFillApple style={{ color: "#f9d3d3" }} size={25} /></a>
                           <a href="" target="_blank" className="outer-shadow hover-in-shadow"><AiFillDollarCircle style={{ color: "#a552df" }} size={25} /></a>
                           <a href="" target="_blank" className="outer-shadow hover-in-shadow"><AiFillWindows style={{ color: "#ccccff" }} size={25} /></a>
                        </div> */} */}

      {/* <div  className="img-box inner-shadow  ">
                 <img src={mamun}  className="outer-shadow" alt="profile-pic"/>
              </div>
        // </div> */}
      {/* </div> */}

    </div>




  )
}

export default Services
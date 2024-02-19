import React from 'react'
import '../Portfolio/Menubar.css'
// btn-2 link-item outer-shadow hover-in-shadow

// import Networking from './Networking'
// import GraphicsDesign from './GraphicsDesign'
// import WebDesgin from './WebDesgin'
function AllApplication(props) {
  return (
    <div>
      <div className='container pb-5 '>
        <div className='row'>
          <div className='displayFlex'>


            <div className="col-sm-3">
              <div className=' img-box link-item-Portfolio outer-shadow hover-in-shadow '>
                <div className=''>
                  <div className='outer-shadow hover-in-shadow '>
                    <div className=" dis12 inner-shadow  ">
                      {props.picture}
                    </div>
                    <div className='dis13 p-1'>{props.Title} </div>
                  </div>
                  <h6 className='pt-3'>{props.Name} </h6>
                </div>
              </div>
            </div>


            <div className="col-sm-3">
              <div className=' img-box link-item-Portfolio outer-shadow hover-in-shadow '>
                <div className=''>
                  <div className='outer-shadow hover-in-shadow '>
                    <div className=" dis12 inner-shadow  ">
                      {props.picture}
                    </div>
                    <div className='dis13 p-1'>{props.Title} </div>
                  </div>
                  <h6 className='pt-3'>{props.Name} </h6>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className=' img-box link-item-Portfolio outer-shadow hover-in-shadow '>
                <div className=''>
                  <div className='outer-shadow hover-in-shadow '>
                    <div className=" dis12 inner-shadow  ">
                      {props.picture}
                    </div>
                    <div className='dis13 p-1 '>{props.Title} </div>
                  </div>
                 <div className='mt-4'>
                 
                 </div>
                 <div className='   '>{props.Name} </div>
                  
                </div>
                
              </div>
            </div>
          </div>

        </div>
        {/* <WebDesgin />
      <GraphicsDesign />
      <Networking  /> */}
        {/* <div>{props.icon}</div> */}
      </div>


    </div>
  )
}

export default AllApplication
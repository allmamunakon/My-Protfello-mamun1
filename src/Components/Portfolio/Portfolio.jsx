import React from 'react'
 import { Outlet } from 'react-router-dom'

import Menubar from './Menubar'
// import GraphicsDesign from './GraphicsDesign'

function Portfolio() {
  return (
    <div className='text-light'>
      
   
     

     
      <Menubar />
       <Outlet /> 
    
      
      
      </div>
  )
}

export default Portfolio
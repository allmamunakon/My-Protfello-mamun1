import React from 'react'
import AllApplication from './AllApplication'
import mamun from '../../image/mamun .png'


function Networking() {
  const Pic = <img src={mamun} className="outer-shadow" alt="" height={200} width={250} />
  return (
    <div className='container '>
      <h4>Networking</h4>
      <div className='d-flex'>
      
        <AllApplication picture={Pic} Title="View Project" Name="Portfolio Website" />

    

      </div>
       




    </div>
  )
}

export default Networking
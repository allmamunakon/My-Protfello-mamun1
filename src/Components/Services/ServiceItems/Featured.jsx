import React from 'react'
import Games from './Games'
import Research from './Research'
import StudentInformation from './StudentInformation'


function Featured() {
  return (
    <div className='bg-info d-inline-block m-auto'>
    <Games />
    <Research />
    <StudentInformation />
    </div>
  )
}

export default Featured
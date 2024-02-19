import React from 'react'
import './DashBoard.css'
import { Outlet } from 'react-router-dom'
// import Education from '../About/Education/Education';
// import SkillWork from '../About/MySkills/SkillWork'
// import Experience from '../About/Experience/Experience';
import Skills from '../About/MySkills/Skills'

function DashBoard() {
  return (
    <div className=' '>
        <h3>This is DashBoard</h3>

         <Skills className=' '/> 

         <Outlet /> 
    </div>
  )
}

export default DashBoard
import React from 'react'
import './Skills.css'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';




function Skills() {
  return (
    
<Nav className=' pt-4 brand Info underline'>
            <li className='text-light'>
                <Link  to="SkillWork" className='  link-item outer-shadow hover-in-shadow' >Skill Work</Link>
                
                
            </li>

            <li>
                <Link to="Experience"  className='link-item outer-shadow hover-in-shadow' >Experience </Link>
            </li>

            <li>
                <Link to="Education"  className='link-item  outer-shadow hover-in-shadow'>Education</Link>
            </li>
{/*            
             <li>
                <Link to="NoPage">NoPage</Link>
            </li> 
            */}

            
        </Nav>

   
  )
}

export default Skills






























































// 
import React from 'react'
import '../Services/Services'

import { Link } from 'react-router-dom';



function SideBar() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-4">

                        <div className=" bg-info p-4 ">

                           <ul className='p-4 nav-menu-inner d-block '>

                                <li className='SideBar'>
                                    <Link to="" className=" text-decoration-none active btn-1 inner-shadow">Featured</Link>
                                </li>
                                <li>
                                    <Link to="Games" className="text-decoration-none btn-1 outer-shadow hover-in-shadow">Games</Link>
                                </li>

                                <li>
                                    <Link to="Research" className="text-decoration-none btn-1 outer-shadow hover-in-shadow ">Research</Link>
                                </li>
                                <li>
                                    <Link to="StudentInformation" className="text-decoration-none btn-1 outer-shadow hover-in-shadow ">StudentInformation</Link>
                                </li>

                            </ul>

                        </div>
                   

                </div>
                <div className="col-md-8">

                </div>

            </div>




        </div>
    )
}

export default SideBar
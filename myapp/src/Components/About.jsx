import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom'
import CopyRight from './CopyRight';
 const About = () => {
  return (
     <div className='about_main'>
       <div className="about_content">
        <div className='about_cap'>
        <h1>Hello Welcome to my <span>First Website</span></h1>
        <NavLink to='/contact' className='contact'>Contact</NavLink>
        </div>
       <div className="about_img">
        <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?size=626&ext=jpg&ga=GA1.1.991215353.1703498016&semt=sph" alt="" />
       </div>
       </div>
       <CopyRight />
     </div>
  )
}

export default About;
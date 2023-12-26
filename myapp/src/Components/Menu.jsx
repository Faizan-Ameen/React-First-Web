import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

 const Menu = () => {
  return (
    <div className='nav_main'>
      <div>
        <h1>Faizan</h1>
      </div>
      <div className='nav_links'>
      <NavLink exact='true' activeClassName="active" to='/'><span>Home</span></NavLink>
      <NavLink exact='true' activeClassName="active" to='/about'><span>About</span></NavLink>
      <NavLink exact='true' activeClassName="active" to='/services'><span>Services</span></NavLink>
      <NavLink exact='true' activeClassName="active" to='/contact'><span>Contact</span></NavLink>
      </div>
    </div>
  )
}

export default Menu;
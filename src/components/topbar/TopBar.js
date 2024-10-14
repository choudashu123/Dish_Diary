import React from 'react'
import "./TopBar.css"
import profileImage from "../../res/profile.jpg"
import { NavLink } from 'react-router-dom'

function TopBar() {
  return (
    <div className='topbar'>
      <div className='topbar-left'>
        <i className="topbar-social-icon fa-brands fa-linkedin"></i>
        <i className="topbar-social-icon fa-brands fa-github"></i>
      </div>
      <div className='topbar-center'>
        <ul className='topbar-list'>
          <li className='topbar-list-item' ><NavLink to="/">Home</NavLink></li>
          <li className='topbar-list-item'>All Recipes</li>
          <li className='topbar-list-item'><NavLink to="/create">Create Your own Dish</NavLink></li>
          <li className='topbar-list-item'>About Us</li>
          
        </ul>
      </div>
      <div className='topbar-right'>
        <img src={profileImage} className='topbar-profile-pic' alt=''></img>
        <i className="topbar-search fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}

export default TopBar
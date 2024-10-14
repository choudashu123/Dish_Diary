import React from 'react'
import './Header.css'
import heroImg from "../../res/hero_img.jpg"

function Header() {
  return (
    <div className='header-section'>
        <div className='hero-text'>
            <span className='hero-text-title'>Best Dishes from</span>
            <span className='hero-text-subtitle'>Dish Diary</span>
        </div>
        <img src={heroImg} alt='' className='hero-img'></img>
        
    </div>
  )
}

export default Header
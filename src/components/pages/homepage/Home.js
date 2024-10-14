import React from 'react'
import "./Home.css"
import Header from '../../header/Header'
import Listing from '../../listing/Listing'

function Home() {
  return (
    <div className='home-page'>
        <Header />
        <Listing />
        </div>
  )
}

export default Home
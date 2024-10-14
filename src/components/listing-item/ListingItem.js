import React from 'react'
import "./ListingItem.css"
import fried_fish from "../../res/fried-fish.jpg"
import { Link } from 'react-router-dom'

function ListingItem() {
  return (
    <div className='listing-item'>
        <Link to="/detail/1"><img className='listing-img' src={fried_fish} alt=''></img></Link>
        <div className='listing-details'>
            <div className='listing-categories'>
              <span className='listing-category'>Try</span>
              <span className='listing-category'>Save for Later</span>
            </div>
            <Link to="/detail/1"><span className='listing-title'>Awesome Recipe</span></Link>
            <hr/>
            <span className='listing-time'>few hours ago...</span>
            <p className='listing-description'>Loreljhasl dfjlasdfjla sdhfdasjfhaljksdfhkalsdhfasdjhffjlasdhfdasjfhaljksdfhkalsdhfasdjhf fjlasdhfdasjfhaljksdf hkalsdhfasdjhf fjlasdhfdasj fhaljksdfhkal dhfasdjhff jlasdhfdasjfhaljksdfhkalsdhfa sdjhffjlasdh fdasjfhaljksdfhkalsdhfa sdjhffjlasdhfdasjfhalj ksdfhkalsdhfasdjhf</p>
      </div>
        
    </div>
  )
}

export default ListingItem
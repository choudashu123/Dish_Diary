import React from 'react'
import "./ListingItem.css"
import fried_fish from "../../res/fried-fish.jpg"

function ListingItem() {
  return (
    <div className='listing-item'>
        <img className='listing-img' src={fried_fish} alt=''></img>
        <div className='listing-details'>
            <div className='listing-categories'>
              <span className='listing-category'>Try</span>
              <span className='listing-category'>Save for Later</span>
            </div>
            <span className='listing-title'>Awesome Recipe</span>
            <hr/>
            <span className='listing-time'>few hours ago...</span>
            <p className='listing-description'>Loreljhasl dfjlasdfjla sdhfdasjfhaljksdfhkalsdhfasdjhffjlasdhfdasjfhaljksdfhkalsdhfasdjhf fjlasdhfdasjfhaljksdf hkalsdhfasdjhf fjlasdhfdasj fhaljksdfhkal dhfasdjhff jlasdhfdasjfhaljksdfhkalsdhfa sdjhffjlasdh fdasjfhaljksdfhkalsdhfa sdjhffjlasdhfdasjfhalj ksdfhkalsdhfasdjhf</p>
      </div>
        
    </div>
  )
}

export default ListingItem
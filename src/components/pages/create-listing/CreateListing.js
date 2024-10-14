import React from 'react'
import './CreateListing.css'

function CreateListing() {
  return (
    <div className='create-listing'>
        <form className='create-listing-form'>
            <div className='create-listing-form-group'>
              <input type='text' placeholder='Recipe Title' className='create-listing-text' autoFocus={true}></input>
              <label htmlFor='listingImg' className='create-listing-image-upload'><i class="upload-icon fa-solid fa-upload"></i></label>
              <input type='file' id='listingImg' style={{display:"none"}} ></input>
            </div>
            <div className='create-listing-form-group'>
              <textarea className='create-listing-text create-listing-description' placeholder='Carve your description here........'></textarea>
            </div>
            <button className='create-listing-button'>Submit </button>

        </form>


    </div>
  )
}

export default CreateListing
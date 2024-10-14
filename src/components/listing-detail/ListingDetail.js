import React from 'react'
import "./ListingDetail.css"
import fried_fish from "../../res/fried-fish.jpg"


function ListingDetail() {
  return (
    <div className='listing-detail'>
        <div className='listing-detail-content'>
            <img src={fried_fish} className='listing-detail-img' alt=''></img>
            <h2 className='listing-detail-title'>
                Awesome Recipe
                <div className='listing-detail-action'>
                    <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
                    <i class="listing-detail-action-icon fa-solid fa-trash"></i>
                </div>
            </h2>
            <div className='listing-detail-meta-info'>
                <span className='listing-detail-author'>Author : <strong>Ashutosh Choudhary</strong></span>
                <span className='listing-detail-time'>1 day ago</span>
            </div>
            <p className='listing-detail-description'>This Lemon Garlic Butter Baked Salmon recipe is a perfect combination of flavor, nutrition, and ease. With a delicate balance of fresh lemon, aromatic garlic, and rich butter, this salmon dish is both mouthwatering and healthy. Whether you're hosting a dinner party or preparing a quick family meal, this recipe is sure to impress.
            Don’t Overcook: Salmon can become dry if overcooked, so keep a close eye on it. The USDA recommends cooking fish to an internal temperature of 145°F (63°C), but for a moist, slightly pink center, you can pull it out at around 135-140°F (57-60°C) and let it rest.

Skin On or Off: You can use skin-on or skinless salmon fillets. If using skin-on, the skin will help protect the flesh during cooking and can be easily removed after baking if you prefer.

Experiment with Herbs: Feel free to add herbs like dill, thyme, or basil to the lemon garlic butter for extra flavor.
            </p>

        </div>
    </div>
  )
}

export default ListingDetail
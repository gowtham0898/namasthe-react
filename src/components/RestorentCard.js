import React from 'react'
import { CDN_URL } from '../utils/constants';
const RestorentCard = (props) => {
  
    
    const {name,cloudinaryImageId,cuisines,avgRating,sla} = props.restoData.info;
    return (
        <div className="card-container">
            <img 
            alt="card-image" 
            style={{width: "100%"}}
            src={ CDN_URL+ cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}


export default RestorentCard
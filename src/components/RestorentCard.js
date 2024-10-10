import React, { useEffect } from 'react'
import { CDN_URL } from '../utils/constants';
const RestorentCard = (props) => {
  
    console.log(props);
    
    const {name,cloudinaryImageId,cuisines,avgRating,sla} = props.restoData.info;

    useEffect(() => {
    props.restoName(name);
    //console.log(name);
    
    },[])
    return (
        <div>
            <img 
            alt="card-image" 
            //style={{width: "100%"}}
            src={ CDN_URL+ cloudinaryImageId}
            />
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}

export const openStatusResto = (RestorentCard) =>{

    return ((props) =>{
        //console.log("card");
        
        return (
          <div>
            <label className="absolute bg-green-500 bg-opacity-70 text-white text-sm font-bold py-1 px-3 rounded-full mr-2">open</label>
            <RestorentCard {...props}/>
          </div>
        );
    })
}

export default RestorentCard    
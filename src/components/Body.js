import React from 'react'
import RestorentCard from './RestorentCard'
import restoList from '../utils/mockData'
import { useState } from 'react'
const Body = () => {

    const [restoLists,setRestoLists] = useState(restoList);
    const setNewList = () => {
        let filteredList = restoList.filter((rest) => rest.info.avgRating > 4);
        setRestoLists(filteredList);
    };
    return (
        <div className="body">
            <button 
            className="filter-btn"
            onClick={ setNewList}
            > 
            Top Resto's
            </button>
            <button 
            className="filter-btn"
            onClick={ () => {setRestoLists(restoList)} }
            > 
            UnSet
            </button>
            <div className="res-container">
            {
                restoLists.map((resto) => (
                <RestorentCard key={resto.info.id} restoData = {resto}/>
            ))
            }
            
            </div>
        </div>
    )
}

export default Body
import { useLocation, useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestorentMenu from "../utils/useRestorentMenu";
import AccordionMenu from "./AccordionMenu";
import { useState } from "react";
const RestorentManu = () => {
  const [openName, setOpenName] = useState(null);

    const {resId} = useParams();
    //#region  to create saperate custom hook to featch data
    //const[getCardMenu, setCardMenu] = useState(null);
    //console.log(resId);
    
    // useEffect(() => {
    //     fetchCardData();
    // },[])
    // const fetchCardData = async() =>{
    //     const carddata = await fetch(
    //         MENU_ITEMS + resId);
    //         const json = await carddata.json();
    //         //console.log();//?.cardGroupMap?.REGUALR?.cards[2]?.card?.card?.itemCards
    //         //console.log(json);
            
    //         setCardMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    // };
    //#endregion
   
    
    const getCardMenu = useRestorentMenu(resId);
    const location = useLocation();
    //console.log("resto Card",location);
    
    const {name}  =  location.state ||{};


    const filteredItems = getCardMenu?.filter(item => item.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(filteredItems);
    if(getCardMenu === null) return <Shimmer />

    const getCardMenuForEachTitle = getCardMenu[2]?.card?.card?.itemCards;

    
    const toggleItem = (name) => {
      
      setOpenName(openName === name ? null : name);
      
  };
  console.log("open_INDEX_after_set",openName);
    return (
      <div className="menu">
        <div className="m-8 ml-40 text-xl">
          {/* <b>{name}</b> */}
        </div>
        {filteredItems.map((menu,index) => (
          
          <AccordionMenu 
          key={menu?.card?.card?.title} 
          title={menu?.card?.card?.title}
          content = {menu?.card?.card?.itemCards}
          isOpen={openName === menu?.card?.card?.title}
          onToggle={() => toggleItem(menu?.card?.card?.title)}
          />
        ))}
      </div>
    );
}

export default RestorentManu